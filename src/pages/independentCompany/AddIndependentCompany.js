import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropdown from "../../common/forms/SearchableDropdown";

class AddIndependentCompany extends Component {
  render() {
    return (
      <Modal
        title={`${this.props.icbu.isEditMode ? "Update" : "Add"} IC`}
        showModal={this.props.icbu.showAddIcbuModal}
        handleSave={
          this.props.icbu.isEditMode
            ? this.props.updateIcbu
            : this.props.createIcbu
        }
        handleClose={this.props.closeAddIcbuModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <TextInput
            label="Independent Company Name"
            size="col-md-7"
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7"
            name="ic"
            id="ic"
            onChange={(e) => this.props.handleChangeIc(e.target.value)}
            value={this.props.icbu.icName}
          />
          <SearchableDropdown
            label="Status"
            size="col-md-5"
            selectOptions={[
              { value: "Active", label: "Active" },
              { value: "InActive", label: "InActive" },
            ]}
            onChange={(value) => this.props.handleIcStatus(value)}
            value={this.props.icbu.icStatus}
          />
        </SimpleRow>

        {this.props.icbu.isModalMsg && (
          <p className="text-danger">{this.props.icbu.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddIndependentCompany;
