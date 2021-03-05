import React, { Component } from "react";
import Button from "../../common/forms/Button";
import Col6 from "../../common/forms/Col6";
import ConfirmModal from "../../common/forms/ConfirmModal";
import SimpleRow from "../../common/forms/SimpleRow";
import DataTable from "../../common/DataTable";

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
        <DataTable
          metaData={[
            { text: "Column 1", dataField: "" },
            { text: "Column 2", dataField: "" },
            { text: "Column 3", dataField: "" },
            { text: "Column 4", dataField: "" },
            { text: "Column 5", dataField: "" },
          ]}
          bodyData={[{}, {}]}
          showButton={true}
          btnText="Add Structure"
          onClick={() => this.setState({ showModal: true })}
        />
        {/* <SimpleRow>
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
        </SimpleRow> */}
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
