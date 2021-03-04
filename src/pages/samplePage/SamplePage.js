import React, { Component } from "react";
import Button from "../../common/forms/Button";
import Col6 from "../../common/forms/Col6";
import ConfirmModal from "../../common/forms/ConfirmModal";
import SimpleRow from "../../common/forms/SimpleRow";

class SamplePage extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  render() {
    return (
      <div>
        <h1>this is the demo page</h1>
        <SimpleRow>
          <Col6 size="col-md-3">
            <Button
              btnText="Show Confirm Modal"
              gradient
              type="danger"
              onClick={() => {
                this.setState({ showModal: true });
              }}
            />
          </Col6>
        </SimpleRow>
        {this.state.showModal && (
          <ConfirmModal
            title="this is the title"
            frontText="this is the front text"
            confirmText="this is the confirm text"
            cancelText="this is the cancel text"
            deleteAction={() => console.log("delete button is pressed...")}
            closeAction={() => this.setState({ showModal: false })}
          />
        )}
      </div>
    );
  }
}

export default SamplePage;
