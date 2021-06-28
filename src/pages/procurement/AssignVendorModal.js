import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Button from "../../common/forms/Button";
import ButtonRow from "../../common/forms/ButtonRow";
import {
  transformStructureListData,
  transformVendorCodeListData,
  assignVendorTableMetaData,
  fabricationTableMetaData,
  outSourcingTableMetaData,
} from "./utils";
import CustomDataTable from "../../common/DataTable";

class AssignVendorModal extends Component {
  populateVendorStructures = () => {
    let tempArr = [];
    if (
      this.props.procurement.selectedStructures !== [] &&
      this.props.procurement.vendor.value !== undefined
    ) {
      this.props.procurement.selectedStructures.map((structure) => {
        let tempObj = {
          subContId: this.props.procurement.vendor.value,
          vendorName: this.props.procurement.vendor.label,
          projStructureId: structure.value,
          structureName: structure.label,
        };
        tempArr.push(tempObj);
      });
    }
    this.props.setVendorStructures(tempArr);
    this.props.setShowTableFlag(true);
  };

  removeStructureFromVendorStructures = (structureId) => {
    let tempArr = this.props.procurement.vendorStructures.filter(
      (structure) => {
        return structure.structureId !== structureId;
      }
    );
    this.props.setVendorStructures(tempArr);
  };

  render() {
    return (
      <Modal
        title="Assign Vendor"
        showModal={this.props.showModal}
        handleSave={() => {
          this.props.procurement.vendorStructures.length !== 0
            ? this.props.procurement.activeItem.serviceType === "Fabrication"
              ? this.props.fbAssignVendor()
              : this.props.osAssignVendor()
            : alert("Unable to save. Please check the fields");
        }}
        handleClose={this.props.closeAssignVendorModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <SearchableDropDown
            size="col-md-6"
            paddingTop= "1px"
            paddingBottom="1px"
            label="Structure Name"
            name="structureName"
            id="structureName"
            isMulti={true}
            selectOptions={transformStructureListData(
              this.props.procurement.structureListCode
            )}
            onChange={(item) => this.props.handleChangeSelectedStructures(item)}
          />
          <SearchableDropDown
            size="col-md-6"
            label="Vendor Name"
            name="vendorName"
            id="vendorName"
            selectOptions={transformVendorCodeListData(
              this.props.procurement.vendorCodeList,
              this.props.procurement.activeItem.serviceTypeId
            )}
            onChange={(item) => this.props.handleChangeVendorId(item)}
          />
        </SimpleRow>

        <ButtonRow position="center">
          <Button
            btnType="primary"
            btnText="Add"
            onClick={() => this.populateVendorStructures()}
          />
        </ButtonRow>
        {this.props.procurement.showTableFlag && (
          <>
            {this.props.procurement.vendorStructures && (
              <CustomDataTable
                metaData={assignVendorTableMetaData(
                  this.removeStructureFromVendorStructures
                )}
                bodyData={this.props.procurement.vendorStructures}
              />
            )}
          </>
        )}
      </Modal>
    );
  }
}

export default AssignVendorModal;
