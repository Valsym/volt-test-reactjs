import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, FormControl, HelpBlock, ControlLabel, Col} from 'react-bootstrap';

class ProductsForm extends React.Component{
  constructor() {
    super();

    this.sendProducts = this.sendProducts.bind(this);
    this.getFormData = this.getFormData.bind(this);

    this.data = {data: ''};
  }

  getFormData() {
    let data = {
      name: this.inputName.value,
      price: this.inputPrice.value,
    }
    return data
  }

  sendProducts(event) {
    const data = this.getFormData();
    console.log('data=', data);
    if (data.name == '') {
      event.preventDefault();
    } else {
      fetch('http://localhost:8000/api/products',{
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
      <Form onSubmit={this.sendProducts}>
        <FormGroup controlId="formInlineName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Parachute Pants"
              inputRef={ref => { this.inputName = ref; }}  />
          </Col>
        </FormGroup>

          <FormGroup controlId="formInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              Price
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="29.99"
                inputRef={ref => { this.inputPrice = ref; }} />
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

export default ProductsForm;
