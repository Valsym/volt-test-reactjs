import React from 'react';
import FetchData from '../FetchData';

class Customers extends React.Component{
  render(){
    return 	<FetchData subreq="customers"/>;
  }
}

export default Customers;
