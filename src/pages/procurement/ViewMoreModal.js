import React, { Component } from "react";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

class ViewMoreModal extends Component {
  render() {
    return (
      <Modal
        title="Structure Information"
        showModal={this.props.showViewMore}
        handleClose={this.props.handleClose}
        size="md"
        isShowFooter={false}
      >
        <TextInput
          size="col-md-10 offset-md-1"
          labelSize="col-md-4"
          fieldSize="col-md-8 "
          label="Service Type"
          name="serviceType"
          id="serviceType"
          value={this.props.activeItem.serviceType}
          disabled
        />
        <TextInput
          size="col-md-10 offset-md-1"
          labelSize="col-md-4"
          fieldSize="col-md-8 "
          label="Created Date"
          name="createdDate"
          id="createdDate"
          value={this.props.activeItem.createdDateTime.split("T")[0]}
          disabled
        />
        <TextInput
          size="col-md-10 offset-md-1"
          labelSize="col-md-4"
          fieldSize="col-md-8 "
          label="Status"
          name="status"
          id="status"
          value={this.props.activeItem.status}
          disabled
        />
      </Modal>
    );
  }
}

export default ViewMoreModal;
