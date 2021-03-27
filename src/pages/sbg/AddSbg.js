import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
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
                console.log("updated");
              }
            : () => {
                console.log("added");
              }
        }
        handleClose={this.props.closeSbgModal}
        size="lg"
        isShowFooter={true}
      >
        <FormRow>
          <TextInput
            label="Strategic Busi. Group Name"
            size="col-md-10 offset-md-2"
            labelSize="col-md-5 text-right"
            fieldSize="col-md-3"
            name="sbgName"
            id="sbgName"
            onChange={(e) => this.props.handleSbgName(e.target.value)}
            value={this.props.sbg.sbgName}
          />
        </FormRow>

        {/* {this.props.icbu.isModalMsg && (
          <p className="text-danger">{this.props.icbu.component.message}</p>
        )} */}
      </Modal>
    );
  }
}

export default AddSbg;
