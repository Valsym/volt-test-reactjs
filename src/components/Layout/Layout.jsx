import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
//import PropTypes from 'prop-types';
import { PropTypes } from 'react';
import {  Link } from 'react-router';
//import './bootstrap.css';
import { IndexLinkContainer } from 'react-router-bootstrap'


const propTypes = {
  children: PropTypes.node
};

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Invoice App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <NavItem>Invoice</NavItem>
              <NavItem><Link to='/products'>Products</Link></NavItem>
              <NavItem><Link to='/customers'>Customers</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          {this.props.children}
        </Grid>

      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
