import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import Layout from 'components/Layout';
import CustomersPage from 'components/CustomersPage';
import ProductsPage from 'components/ProductsPage';
import MainPage from 'components/MainPage';

export default (
  <Route component={Layout} exact path='/'>
    <IndexRoute component={Main} />
    <Route component={Customers} path='/customers' />
	<Route component={Products} path='/products' />
	<Route component={NotFound} />
  </Route>
);

/*
src/routes.jsx

import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CounterPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={HelloWorldPage} />
    <Route component={CounterPage} path='counters' />
    <Route component={TimePage} path='time' />
  </Route>
);
*/
