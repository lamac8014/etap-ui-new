import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

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
        <FormRow>
          <TextInput
            label="Independent Company Name"
            size="col-md-10 offset-md-2"
            labelSize="col-md-5 text-right"
            fieldSize="col-md-3"
            name="ic"
            id="ic"
            onChange={(e) => this.props.handleChangeIc(e.target.value)}
            value={this.props.icbu.icName}
          />
        </FormRow>

        {this.props.icbu.isModalMsg && (
          <p className="text-danger">{this.props.icbu.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddIndependentCompany;
