import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true} style={{ color: 'white'}}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}style={{ color: 'white'}}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}style={{ color: 'white'}}>
            Contact

          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://discord.gg/dqtrstYeZH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
