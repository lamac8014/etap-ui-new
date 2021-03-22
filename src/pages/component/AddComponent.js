import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        title={`${
          this.props.component.isEditMode ? "Update" : "Add"
        } Component Type`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.component.isEditMode
            ? this.props.updateComponentType
            : this.props.addComponentType
        }
        handleClose={this.props.closeAddComponentModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <TextInput
            size="col-md-7"
            label="Component Type"
            name="componentType"
            id="componentType"
            labelSize="col-md-4 text-center"
            fieldSize="col-md-7"
            onChange={(e) =>
              this.props.handleChangeComponentType(e.target.value)
            }
            value={this.props.component.componentType}
          />
          {/* <SimpleDropDown
            label="Status"
            labelSize="col-md-3 text-right"
            fieldSize="col-md-6"
            selectOptions={[
              { id: "Active", label: "Active" },
              { id: "InActive", label: "InActive" },
            ]}
            onChange={(e) =>
              this.props.handleComponentTypeStatus(e.target.value)
            }
            value={this.props.component.componentTypeStatus}
          /> */}
          <SearchableDropDown
            size="col-md-5"
            labelSize="col-md-3 text-right"
            fieldSize="col-md-8"
            label="Status"
            name="status"
            selectOptions={[
              { id: "Active", label: "Active" },
              { id: "InActive", label: "InActive" },
            ]}
            onChange={(obj) => this.props.handleComponentTypeStatus(obj)}
            value={this.props.component.componentTypeStatus}
          />
        </SimpleRow>

        {this.props.component.isModalMsg && (
          <p className="text-danger">{this.props.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default CreateUser;
