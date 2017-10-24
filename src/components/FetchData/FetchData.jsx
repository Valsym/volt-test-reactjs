import React from 'react';
import CustomersForm from '../CustomersForm';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

import CreateItem from '../CreateItem';

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);

    this.state = { data: [] };

    this.options = { afterDeleteRow: this.onAfterDeleteRow};
    this.selectRowProp = { mode: 'checkbox'  };

  }

  onAfterDeleteRow(rowKeys) {
    const dropRowKeysStr = rowKeys.join(',');

    if (confirm(`Are you sure you want to delete ${rowKeys}?`)) {
      rowKeys.map((id) => {

      /* This method don't work. I can't understund Why... The server don't answer */

        const url = 'http://localhost:8000/api/customers/' + id;
        console.log('url=',url);
        fetch({
          method: 'DELETE',
          url: url,
          body: JSON.stringify({ customer_id: id }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(function (data) {
          console.log('Request succeeded with JSON response', data);
        })
        .catch(console.error);
      });

    }
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
  		<BootstrapTable data={this.state.data} bordered={ false }
         deleteRow selectRow={ this.selectRowProp } options={ this.options }>
  		  <TableHeaderColumn isKey dataField='id'>#</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
  		  <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
  		  <TableHeaderColumn dataField='phone'></TableHeaderColumn>
      </BootstrapTable>;
		break;

	  case 'products':
		stitle = <h1>Products List &nbsp;&nbsp;<CreateItem subreq='product'/></h1>;
		table =
  		<BootstrapTable data={this.state.data} bordered={ false }
        deleteRow selectRow={ this.selectRowProp } options={ this.options }>
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
