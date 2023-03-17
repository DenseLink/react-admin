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

const Navbar = ({ toggle }): JSX.Element => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon onClick={toggle}>
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
