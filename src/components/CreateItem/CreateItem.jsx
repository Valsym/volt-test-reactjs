import React from 'react';
import CustomersForm from '../CustomersForm';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

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

    return (
      <span>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Create
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create new {this.props.subreq}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <CustomersForm />

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
