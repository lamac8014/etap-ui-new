import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import SearchableDropdown from "../../common/forms/SearchableDropdown";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

class AddSbg extends Component {
  render() {
    return (
      <Modal
        title={`${this.props.sbg.isEditMode ? "Update" : "Add"} SBG`}
        showModal={this.props.sbg.showModal}
        handleSave={
          this.props.sbg.isEditMode
            ? () => {
                this.props.updateSbgData();
              }
            : () => {
                this.props.addSbgData();
              }
        }
        handleClose={this.props.closeSbgModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <TextInput
            label="SBG Name"
            size="col-md-7"
            labelSize="col-md-5 "
            fieldSize="col-md-7"
            name="sbgName"
            id="sbgName"
            onChange={(e) => this.props.handleSbgName(e.target.value)}
            value={this.props.sbg.sbgName}
          />
          <SearchableDropdown
            label="Status"
            size="col-md-5"
            selectOptions={[
              { value: "Active", label: "Active" },
              { value: "InActive", label: "InActive" },
            ]}
            onChange={(value) => this.props.handleSbgStatus(value)}
            value={this.props.sbg.status}
          />
        </SimpleRow>

        {/* {this.props.icbu.isModalMsg && (
          <p className="text-danger">{this.props.icbu.component.message}</p>
        )} */}
      </Modal>
    );
  }
}

export default AddSbg;
