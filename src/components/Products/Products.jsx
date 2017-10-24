import React from 'react';
import FetchData from '../FetchData';

class Products extends React.Component{
  render(){
    return 	<FetchData subreq="products"/>;
  }
}

/*
class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products')
      .then(res => {
		console.log('res.body=',res.body);
		return res.json();
      })
	    .then((data) => {
		console.log(data);
        this.setState({ data });
	  })
	  .catch(console.error);
  }

  render() {
    return (
      <div>
    		<h1>Products List</h1>
    		<BootstrapTable data={this.state.data} bordered={ false }>
    		  <TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
    		  <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
    		  <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
    		</BootstrapTable>;
  		</div>
    );
  }
}
*/
export default Products;
