import { FaBars } from "react-icons/fa";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarStyles";

type NavbarProps = {
  toggle: boolean;
};

const Navbar = ({ toggle }: NavbarProps): JSX.Element => {
  const handleClickFunction = (): void => {
    // eslint-disable-next-line no-param-reassign
    toggle = !toggle;
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon onClick={handleClickFunction}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Signup</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin"> Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
