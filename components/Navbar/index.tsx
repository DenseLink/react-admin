import type React from "react";

import { Nav, NavbarContainer, NavLogo } from "./NavbarStyles";

const index: React.FC = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>dolla</NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default index;
