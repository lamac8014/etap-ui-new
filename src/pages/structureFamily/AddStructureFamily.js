import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";

import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import SearchableDropdown from "../../common/forms/SearchableDropdown";

class AddStructureFamily extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`${
          this.props.structureFamily.isEditMode ? "Update" : "Create New"
        } Structure Family`}
        showModal={this.props.showAddStructureFamilyModal}
        handleSave={
          this.props.structureFamily.isEditMode
            ? this.props.updateStructureFamilyType
            : this.props.addStructureFamilyType
        }
        handleClose={
          this.props.structureFamily.isEditMode
            ? this.props.closeAddStructureFamilyModal
            : this.props.closeAddStructureFamilyModal
        }
        size="lg"
        isShowFooter={true}
      >
        {this.props.isLoading && <Loader />}
        <SimpleRow>
          <TextInput
            label="Structure Family"
            name="structureFamily"
            id="structureFamily"
            labelSize="col-md-4 pr-0"
            fieldSize="col-md-8"
            onChange={(e) =>
              this.props.handleChangeStructureFamilyType(e.target.value)
            }
            value={this.props.structureFamily.structureFamilyType}
          />

          <SearchableDropdown
            label="Status"
            labelSize="col-md-3 text-right"
            fieldSize="col-md-7"
            selectOptions={[
              { value: "Active", label: "Active" },
              { value: "InActive", label: "InActive" },
            ]}
            onChange={(obj) => this.props.handleStructureFamilyTypeStatus(obj)}
            value={this.props.structureFamily.structureFamilyTypeStatus}
          />
        </SimpleRow>

        {this.props.structureFamily.isModalMsg && (
          <p className="text-danger">{this.props.structureFamily.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddStructureFamily;
