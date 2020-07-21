import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <NavbarBrand href="/" className="mr-auto">czech.ninja</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/resources">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/teachers">Teacher's Lounge</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="d-lg-none">
              <DropdownToggle nav caret>
                Grammar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink to="/declension-all">Declension Tables</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink to="/pronouns">Pronouns</NavLink>
                </DropdownItem>
        
                <DropdownItem>
                <NavLink to="/prepositions">Prepositions</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
            
          </Collapse>
        </Navbar>
        
        
      </div>
    );
}

export default Header;















