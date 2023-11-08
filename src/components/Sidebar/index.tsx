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

type NavbarProps = {
  isOpen: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

const index = ({ isOpen, toggle, setToggle }: NavbarProps): JSX.Element => {
  const handleClickFunction = (): void => {
    setToggle(!toggle);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={handleClickFunction}>
      <Icon onClick={handleClickFunction}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={handleClickFunction} to="about">
            {" "}
            About
          </SidebarLink>
          <SidebarLink onClick={handleClickFunction} to="discover">
            {" "}
            Skills
          </SidebarLink>
          <SidebarLink onClick={handleClickFunction} to="services">
            {" "}
            Portfolio
          </SidebarLink>
          <SidebarLink onClick={handleClickFunction} to="signup">
            {" "}
            Education{" "}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;
