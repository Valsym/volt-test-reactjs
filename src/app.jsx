
import React, { PropTypes } from 'react';
//import PropTypes from 'prop-types';
import { render } from 'react-dom';


import ReactRouterDOM from 'react-router-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory,
} from 'react-router'

import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Layout from 'components/Layout';
import Main from 'components/Main';
import Customers from 'components/Customers';
import Products from 'components/Products';


render(
  <Router history={browserHistory}>
  		<Route component={Layout} path='/'>
        <IndexRoute component={Main} />
  			<Route component={Customers} path='/customers' />
  			<Route component={Products} path='/products' />
  		</Route>
  </Router>,
	document.getElementById('app-root'));

