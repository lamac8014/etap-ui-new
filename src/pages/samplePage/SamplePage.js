import React, { Component } from "react";
import Button from "../../common/forms/Button";
import Col6 from "../../common/forms/Col6";
import ConfirmModal from "../../common/forms/ConfirmModal";
import SimpleRow from "../../common/forms/SimpleRow";
import DataTable from "../../common/DataTable";
import { LOGO } from "../../assets/images";
import Checkbox from "../../common/forms/Checkbox";
import ExportExcel from "../../common/ExportExcel";

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
        <Checkbox color="primary" id="1" onChange={() => {}} />
        <Checkbox color="danger" id="2" outline onChange={() => {}} />
        <DataTable
          metaData={[
            { text: "Column 1", dataField: "col1" },
            { text: "Column 2", dataField: "col2" },
            { text: "Column 3", dataField: "col3" },
            { text: "Column 4", dataField: "col4" },
            { text: "Column 5", dataField: "col5" },
          ]}
          bodyData={[
            {
              id: "1",
              col1: "sample 1",
              col2: "sample 2",
              col3: "sample 3",
              col4: "sample 4",
              col5: "sample 5",
            },
            {
              id: "2",
              col1: "sample 1",
              col2: "sample 2",
              col3: "sample 3",
              col4: "sample 4",
              col5: "sample 5",
            },
          ]}
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
