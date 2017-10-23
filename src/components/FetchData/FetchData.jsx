import React from 'react';
import CustomersForm from '../CustomersForm';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

import CreateItem from '../CreateItem';

class FetchData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/${this.props.subreq}`)
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
	const subreq = this.props.subreq;
	let stitle = '';
	let table = '';
	switch(subreq) {
	  case 'customers':
		stitle = <h1>Customer List &nbsp;&nbsp;<CreateItem subreq='customer'/></h1>
		table =
  		<BootstrapTable data={this.state.data} bordered={ false }>
  		  <TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
  		  <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
  		  <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
  		  <TableHeaderColumn dataField='phone'></TableHeaderColumn>
  		</BootstrapTable>;
		break;

	  case 'products':
		stitle = <h1>Products List &nbsp;&nbsp;<CreateItem subreq='product'/></h1>;
		table =
  		<BootstrapTable data={this.state.data} bordered={ false }>
  		  <TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
  		  <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
  		  <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
  		</BootstrapTable>;
		break;

	  default:
		break;
	}

    return (
      <div>
    		{stitle}
        {table}
      </div>
    );
  }
}

export default FetchData;
