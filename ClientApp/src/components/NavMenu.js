import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCoffee} from "@fortawesome/free-solid-svg-icons"

export default (props) => {
const {name} = props;

    return (
      <div>
      <Navbar inverse fixedTop fluid collapseOnSelect>
        {/* <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Planner</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> */}
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <FontAwesomeIcon icon={faCoffee} /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <FontAwesomeIcon icon={faCoffee} /> Counter
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <FontAwesomeIcon icon={faCoffee} /> Fetch data
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/dash'}>
              <NavItem>
                <FontAwesomeIcon icon={faCoffee} /> Dash
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
}
