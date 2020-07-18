import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Sidebar from './Sidebar';

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
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
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
















/* import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div>
      <Navbar className="navbar navbar-expand-lg bg-dark" expand="lg">
        <NavbarBrand className="" href="/">czech.ninja</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/resources/">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teachers">Teacher's Lounge</NavLink>
            </NavItem>
             <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Declension Tables
                    </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Explanation of cases</DropdownItem>
                    <DropdownItem>Main list</DropdownItem>
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
            </Dropdown> }
          </Nav>
          <UncontrolledDropdown nav inNavbar className="d-lg-none">
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header; */
