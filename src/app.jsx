import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory,
  hashHistory
} from 'react-router'

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
