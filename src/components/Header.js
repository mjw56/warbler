import React from 'react';
import { ImmutableComponent } from './ImmutableComponent';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

export class Header extends ImmutableComponent {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Twitter</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Notifications</NavItem>
          <NavItem eventKey={1} href="#">Messages</NavItem>
        </Nav>
      </Navbar>
    )
  }
}