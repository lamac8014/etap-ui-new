import React, { Component } from "react";
import Modal from "../../common/Modal";

class ViewMoreModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    return (
      <Modal
        title="View More"
        showModal={this.props.fabCost.viewMoreFlag}
        handleSave={() => {}}
        handleClose={() => this.props.setViewMoreModalFlag(false)}
        size="lg"
        isShowFooter={true}
      ></Modal>
    );
  }
}

export default ViewMoreModal;
