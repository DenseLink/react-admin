import { useEffect, useMemo, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

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
import type { NavbarProps } from "./NavbarTypes";

const toggleHome = (): void => {
  scroll.scrollToTop();
};
const Navbar = ({ toggle }: NavbarProps): JSX.Element => {
  const [scrollNav, setScrollNav] = useState(false);

  const iconContextValue = useMemo(() => ({ color: "#fff" }), []);

  const changeNav = (): void => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={iconContextValue}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo href="/" onClick={toggleHome}>
            InkTrail
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks duration={500} offset={-80} to="about" smooth spy>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks duration={500} offset={-80} to="discover" smooth spy>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks duration={500} offset={-80} to="services" smooth spy>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks duration={500} offset={-80} to="signup" smooth spy>
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
