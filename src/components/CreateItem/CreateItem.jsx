import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

import CustomersForm from '../CustomersForm';
import ProductsForm from '../ProductsForm';

class CreateItem extends React.Component {

  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.state ={ showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    const form = this.props.subreq == 'customers' ? <CustomersForm /> :
      <ProductsForm />

    return (
      <span>
        <Button onClick={this.open} >
          Create
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create new {this.props.subreq}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            { form }

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
};

export default CreateItem;
