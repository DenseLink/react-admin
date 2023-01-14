import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [pages, setPages] = useState([
    { title: "Profile Form", to: "/profile", icon: <PersonOutlinedIcon /> },
    { title: "Calendar", to: "/calendar", icon: <CalendarTodayOutlinedIcon /> },
    { title: "FAQ Page", to: "/faq", icon: <HelpOutlineOutlinedIcon /> }
  ]);
  const [ languages, setLanguages ] = useState(["J", "P", "T"]);

  const handleDragEnd = (oldIndex, newIndex) => {
    setPages(arrayMove(pages, oldIndex, newIndex));
  };

  return (
    <ProSidebar collapsed={isCollapsed}>
      <Menu>
      <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
       <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best</h3>
        <SortableContext
         items={languages}
         strategy={verticalListSortingStrategy}
         >
          {languages.map(language => <SortableItem key={language} id={language}/>)}
          </SortableContext>
        {pages.map(({ title, to, icon }, index) => (
          <MenuItem
            key={title}
            active={selected === title}
            style={{
              color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            onDragEnd={() => handleDragEnd(index)}
          >
            <Typography>{title}</Typography>
            <Link to={to} />
          </MenuItem>
        ))}
        </Container>
        </DndContext>
      </Menu>
    </ProSidebar>
  );

};

export default Sidebar;