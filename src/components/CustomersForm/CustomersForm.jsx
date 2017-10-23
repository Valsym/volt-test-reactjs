import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, FormControl, HelpBlock, ControlLabel, Col} from 'react-bootstrap';

const attributes = [
    { type: "Text", name: "Name", required: true, label: "Name" },
    { type: "Text", adress: "Adress", required: true, label: "Adress"},
    { type: "Text", tel: "Tel", label: "Tel" }
];

class CustomersForm extends React.Component{
  constructor() {
    super();

    this.sendCustomers = this.sendCustomers.bind(this);
    //this.getFormData = this.getFormData.bind(this);

    this.data = {data: ''};
  }
/*
  getFormData() {
    let data = {
      name: this.refs.inputName.value,
      adress: this.refs.inputAdress.value,
      phoneNumber: this.refs.inputPhone.value
    }
    this.data = {data: data};
    return data
  }
*/
  sendCustomers(event) {
    //const data = this.refs.inputName.getValue();
    //console.log('data=',this.data);
    event.preventDefault();
  }

  componentDidMount() {
    const form = document.querySelector('form');
    fetch('http://localhost:8000/api/customers',{
      method: 'POST',
      body: new FormData(form)
    })
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
    })
    .catch(console.error);
  }

  render(){
    return(
      <Form onSubmit={this.sendCustomers}>
        <FormGroup controlId="formInlineName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Mark Benson"
              ref="inputName" />
          </Col>
        </FormGroup>

          <FormGroup controlId="formInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              Adress
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="353 Rochester St, Rialto FL 43250"
                ref="inputAdress" />
            </Col>
          </FormGroup>


          <FormGroup controlId="formInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              phoneNumber
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="555-534-2342" ref="inputPhone" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>);
  }
}

export default CustomersForm;
