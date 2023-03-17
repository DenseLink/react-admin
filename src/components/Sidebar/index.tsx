import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SideBarStyles";

const index = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">
            {" "}
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="discover">
            {" "}
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to="services">
            {" "}
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to="signup">
            {" "}
            Signup{" "}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;
