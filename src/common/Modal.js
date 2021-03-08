import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "./forms/Button";

class CustomModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleClose}
        size={this.props.size}
        centered
        className="rounded"
      >
        <Modal.Header className="bg bg-sm bg-primary" closeButton>
          <Modal.Title className="text-light">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.children}</Modal.Body>
        {this.props.isShowFooter && (
          <Modal.Footer>
            <Button
              type="primary"
              onClick={this.props.handleSave}
              btnText="Save"
            />
            <Button
              type="secondary"
              onClick={this.props.handleClose}
              btnText="Cancel"
            />
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}

export default CustomModal;
