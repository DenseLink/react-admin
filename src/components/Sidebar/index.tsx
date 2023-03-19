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
  toggle: boolean;
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
            Discover
          </SidebarLink>
          <SidebarLink onClick={handleClickFunction} to="services">
            {" "}
            Services
          </SidebarLink>
          <SidebarLink onClick={handleClickFunction} to="signup">
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
