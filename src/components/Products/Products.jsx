import React from 'react';
import FetchData from '../FetchData';

class Products extends React.Component{
  render(){
    return 	<FetchData subreq="products"/>;
  }
}

export default Products;
