import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark expand='md' className='navbar_custom'>
        <NavbarBrand tag={RRNavLink} to='/home' activeClassName='active'>
          Dynamicly
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/expense' activeClassName='active'>
                Expense
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='https://github.com/felix-le/dynamicly_project_interview_fe'
                target='_blank'
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
