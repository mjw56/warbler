import React, { PropTypes } from 'react';
import { ImmutableComponent } from './ImmutableComponent';
import {
  Button,
  Input,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import io from 'socket.io-client';

export class Header extends ImmutableComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  _handleChange() {
    this.setState({
      input: this.refs.input.getValue()
    });
  }

  _handleSearch(e) {
    this.props.socket.emit(
      'twitter:update:search', 
      this.refs.input.getValue()
    );
  }

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
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Input type="text" 
              ref="input"
              onChange={this._handleChange.bind(this)}
              placeholder="Search"
            />
            {' '}
            <Button type="submit" onClick={this._handleSearch.bind(this)}>Search</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  socket: PropTypes.object
};