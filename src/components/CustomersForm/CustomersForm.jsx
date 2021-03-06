import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, FormControl, HelpBlock, ControlLabel, Col} from 'react-bootstrap';

class CustomersForm extends React.Component{
  constructor() {
    super();

    this.sendCustomers = this.sendCustomers.bind(this);
    this.getFormData = this.getFormData.bind(this);

    this.data = {data: ''};
  }

  getFormData() {
    let data = {
      name: this.inputName.value,
      adress: this.inputAdress.value,
      phone: this.inputPhone.value
    }
    return data
  }

  sendCustomers(event) {
    const data = this.getFormData();
    console.log('data=', data);
    if (data.name == '') {
      event.preventDefault();
    } else {
      fetch('http://localhost:8000/api/customers',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(console.error);
    }
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
              inputRef={ref => { this.inputName = ref; }}  />
          </Col>
        </FormGroup>

          <FormGroup controlId="formInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              Adress
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="353 Rochester St, Rialto FL 43250"
                inputRef={ref => { this.inputAdress = ref; }} />
            </Col>
          </FormGroup>


          <FormGroup controlId="formInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              phoneNumber
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="555-534-2342"
                inputRef={ref => { this.inputPhone = ref; }} />
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
