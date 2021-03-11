import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Button from "../../common/forms/Button";
import DateInput from "../../common/forms/DateInput";
import {
  transformStructureListData,
  transformVendorCodeListData,
  fabricationTableMetaData,
  outSourcingTableMetaData,
} from "./utils";
import CustomDataTable from "../../common/DataTable";

class AssignVendorModal extends Component {
  populateVendorStructures = () => {
    if (
      this.props.procurement.selectedStructures !== [] &&
      this.props.procurement.vendor.value !== undefined
    ) {
      let tempArr = [];
      if (this.props.procurement.activeItem.serviceType === "Fabrication") {
        if (this.props.procurement.fabricationCost !== []) {
          this.props.procurement.selectedStructures.map((structure) => {
            let tempObj = {
              subContId: this.props.procurement.vendor.value,
              vendorName: this.props.procurement.vendor.label,
              structureId: structure.value,
              structureName: structure.label,
              fabricationCost: this.props.procurement.fabricationCost.find(
                (item) => {
                  return item.structureId === structure.value;
                }
              ).cost,
            };
            tempArr.push(tempObj);
          });
        }
      } else {
        if (
          this.props.procurement.monthlyRent !== 0 &&
          this.props.procurement.contractYears !== 0 &&
          this.props.procurement.plannedReleaseDate !== "" &&
          this.props.procurement.actualStartDate !== "" &&
          this.props.procurement.expectedReleaseDate !== ""
        ) {
          this.props.procurement.selectedStructures.map((structure) => {
            let tempObj = {
              subContId: this.props.procurement.vendor.value,
              vendorName: this.props.procurement.vendor.label,
              structureId: structure.value,
              structureName: structure.label,
              monthlyRent: this.props.procurement.fabricationCost,
              contractYears: this.props.procurement.contractYears,
              plannedReleaseDate: this.props.procurement.plannedReleaseDate,
              expectedReleaseDate: this.props.procurement.expectedReleaseDate,
              actualStartDate: this.props.procurement.actualStartDate,
            };
            tempArr.push(tempObj);
          });
        }
      }
      this.props.setVendorStructures(tempArr);
    }
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
        <FormRow>
          <SearchableDropDown
            size="col-md-6"
            labelSize={
              this.props.procurement.activeItem.serviceType === "Fabrication"
                ? "col-md-4"
                : "col-md-3"
            }
            fieldSize={
              this.props.procurement.activeItem.serviceType === "Fabrication"
                ? "col-md-8 px-0"
                : "col-md-9"
            }
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
            labelSize={
              this.props.procurement.activeItem.serviceType === "Fabrication"
                ? "col-md-4"
                : "col-md-3"
            }
            fieldSize={
              this.props.procurement.activeItem.serviceType === "Fabrication"
                ? "col-md-8 px-0"
                : "col-md-9"
            }
            label="Vendor Name"
            name="vendorName"
            id="vendorName"
            selectOptions={transformVendorCodeListData(
              this.props.procurement.vendorCodeList
            )}
            onChange={(item) => this.props.handleChangeVendorId(item)}
          />
        </FormRow>
        {this.props.procurement.activeItem.serviceType === "Fabrication" &&
          this.props.procurement.selectedStructures &&
          this.props.procurement.selectedStructures.length !== 0 && (
            <>
              <FormRow>
                <h4 className="ml-2 mb-4">Fabrication Cost</h4>
              </FormRow>
              <FormRow>
                {this.props.procurement.selectedStructures.map(
                  (structure, index) => (
                    <TextInput
                      size="col-md-4"
                      labelSize="col-md-3"
                      fieldSize="col-md-9 pl-0"
                      label={structure.label}
                      name="fabricationCost"
                      id="fabricationCost"
                      onChange={(e) =>
                        this.props.handleChangeFabricationCost(
                          e.target.value,
                          structure.value
                        )
                      }
                    />
                  )
                )}
              </FormRow>
            </>
          )}
        {this.props.procurement.activeItem.serviceType === "Outsourcing" && (
          <>
            <FormRow>
              <TextInput
                label="Monthly Rent"
                name="monthlyRent"
                id="monthlyRent"
                onChange={(e) =>
                  this.props.handleChangeMonthlyRent(e.target.value)
                }
              />
              <TextInput
                label="Contract Years"
                name="contractYears"
                id="contractYears"
                onChange={(e) =>
                  this.props.handleChangeContractYears(e.target.value)
                }
              />
            </FormRow>
            <FormRow>
              <DateInput
                label="Planned Release Date"
                name="plannedReleaseDate"
                id="plannedReleaseDate"
                onChange={(e) =>
                  this.props.handleChangePlannedReleaseDate(e.target.value)
                }
              />
              <DateInput
                label="Actual Start Date"
                name="actualStartDate"
                id="actualStartDate"
                onChange={(e) =>
                  this.props.handleChangeActualStartDate(e.target.value)
                }
              />
              <DateInput
                label="Expected Release Date"
                name="expectedReleaseDate"
                id="expectedReleaseDate"
                onChange={(e) =>
                  this.props.handleChangeExpectedReleaseDate(e.target.value)
                }
              />
            </FormRow>
          </>
        )}
        <FormRow>
          <Button
            btnType="primary"
            btnText="Add"
            onClick={() => this.populateVendorStructures()}
          />
        </FormRow>
        {this.props.procurement.showTableFlag && (
          <>
            {this.props.procurement.vendorStructures && (
              <CustomDataTable
                metaData={
                  this.props.procurement.activeItem.serviceType ===
                  "Fabrication"
                    ? fabricationTableMetaData(
                        this.removeStructureFromVendorStructures
                      )
                    : outSourcingTableMetaData(
                        this.removeStructureFromVendorStructures
                      )
                }
                bodyData={this.props.procurement.vendorStructures}
                progressPending={this.props.procurement.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.procurement.siteDispatchDetails &&
                  this.props.procurement.siteDispatchDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
              />
            )}
          </>
        )}
      </Modal>
    );
  }
}

export default AssignVendorModal;
