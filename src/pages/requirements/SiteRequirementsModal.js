import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import FormRow from "../../common/forms/FormRow";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import DateInput from "../../common/forms/DateInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { transformDropDownData } from "../../utils/dataTransformer";

// import SearchableDropDown from "../../common/forms/SearchableDropDown";
// import Label from "../../common/forms/Label";
// import DateInput from "../../common/forms/DateInput";
// import FileInput from "../../common/forms/FileInput";

class SiteRequirementsModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    let tempArr = [
      {
        name: "Capacity",
        uom: "MT",
        value: "5",
        typeOfInput: { id: "numeric", label: "numeric" },
      },
      {
        name: "Overall Length",
        uom: "m",
        value: "6",
        typeOfInput: { id: "numeric", label: "numeric" },
      },
      {
        name: "Weight",
        uom: "MT",
        value: "7",
        typeOfInput: { id: "numeric", label: "numeric" },
      },
      {
        name: "Underslung/Overslung",
        typeOfInput: { id: "alphabetic", label: "alphabetic" },
        uom: "MT",
      },
    ];

    return (
      <Modal
        title="Site Requirements"
        showModal={this.props.showModal}
        handleSave={() => {}}
        handleClose={this.props.showModalClose}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <SearchableDropDown
            size="col-md-6"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Required for WBS"
            name="requiredWorkBreak"
            selectOptions={transformDropDownData(
              this.props.requirement.wbsCodesList,
              "id",
              "name"
            )}
            onChange={(obj) =>
              this.props.handleChangeRequirementRequiredWorkBreak(obj)
            }
            value={this.props.requirement.requiredWorkBreak}
          />
          {/* <SearchableDropDown
                size="col-md-4"
                labelSize="col-md-4"
                fieldSize="col-md-8"
                label="Actual WBS"
                name="actualWorkBreak"
                selectOptions={transformDropDownData(
                  this.props.requirement.wbsCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeRequirementActualWorkBreak(obj)
                }
                value={this.props.requirement.actualWorkBreak}
              /> */}
          <DateInput
            size="col-md-6"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Planned Start Date"
            name="plannedStartDate"
            id="plannedStartDate"
            onChange={(e) =>
              this.props.handleChangeRequirementPlannedStartDate(e.target.value)
            }
            value={this.props.requirement.planedStartDate}
          />
        </SimpleRow>

        <SimpleRow>
          {/* <DateInput
                size="col-md-4"
                labelSize="col-md-4"
                fieldSize="col-md-8"
                label="Actual Start Date"
                name="actualStartDateOfUsage"
                id="actualStartDateOfUsage"
                onChange={(e) =>
                  this.props.handleChangeRequirementActualStartDateOfUsage(
                    e.target.value
                  )
                }
                value={this.props.requirement.actualStartDateOfUsage}
              /> */}
          <DateInput
            size="col-md-6"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Planned Release"
            name="plannedReleaseDate"
            id="plannedReleaseDate"
            onChange={(e) =>
              this.props.handleChangeRequirementPlannedReleaseDate(
                e.target.value
              )
            }
            value={this.props.requirement.expectedReleaseDate}
          />
          <DateInput
            size="col-md-6"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Required By"
            name="expectedReleaseDate"
            id="expectedReleaseDate"
            onChange={(e) =>
              this.props.handleChangeRequirementExpectedReleaseDate(
                e.target.value
              )
            }
            value={this.props.requirement.expectedReleaseDate}
          />
        </SimpleRow>
        <SimpleRow>
          {tempArr.map((structure, index) => (
            <Col6>
              <div className="row" key={index}>
                <div className="col-md-6  pr-0">
                  <TextInput
                    size="col-md-12"
                    fieldSize="col-md-12 px-0 "
                    // label="Attributes"
                    name="attributes"
                    id="attributes"
                    value={structure.name}
                    disabled
                  />
                </div>
                <div className="col-md-3  pr-0">
                  <TextInput
                    size="col-md-12"
                    fieldSize="col-md-12 px-0"
                    // label="UoM"
                    name="uom"
                    id="uom"
                    value={structure.uom}
                    disabled={true}
                  />
                </div>
                <div className="col-md-3">
                  <TextInput
                    size="col-md-12"
                    fieldSize="col-md-12 px-0"
                    placeholder="Value"
                    name="value"
                    id="value"
                    value={structure.value}
                  />
                </div>
              </div>
            </Col6>
          ))}
        </SimpleRow>
      </Modal>
    );
  }
}

export default SiteRequirementsModal;
