import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import FormRow from "../../common/forms/FormRow";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import DateInput from "../../common/forms/DateInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { transformDropDownData } from "../../utils/dataTransformer";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// import SearchableDropDown from "../../common/forms/SearchableDropDown";
// import Label from "../../common/forms/Label";
// import DateInput from "../../common/forms/DateInput";
// import FileInput from "../../common/forms/FileInput";

class SiteRequirementsModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
      error: false,
      errorMsg: "",
    };
  }

  isNumbers = (value) => {
    const regex = /^[(\d*\.)?\d]+$/;
    return regex.test(value) ? true : false;
  };

  isAlphabets = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? true : false;
  };

  changeValue = (e, index) => {
    if (e.target.value === "") {
      this.props.handleChangeRequirementAttributeValue(e.target.value, index);
    } else if (
      this.props.requirement.activeItem.structureAttributesVal[index]
        .typeOfInput.id === "numeric"
    ) {
      if (this.isNumbers(e.target.value)) {
        this.setState({ error: false, errorMsg: "" });
        this.props.handleChangeRequirementAttributeValue(e.target.value, index);
      } else {
        NotificationManager.warning(
          "The Input type is Numeric",
          // <p className="text-white">Error</p>,
          "",
          3000
        );
      }
    } else if (
      this.props.requirement.activeItem.structureAttributesVal[index]
        .typeOfInput.id === "alphabetic"
    ) {
      if (this.isAlphabets(e.target.value)) {
        this.setState({ error: false, errorMsg: "" });
        this.props.handleChangeRequirementAttributeValue(e.target.value, index);
      } else {
        NotificationManager.warning(
          "The Input type is Alphabetic",
          // <p className="text-white">Error</p>,
          "",
          3000
        );
      }
    } else if (
      this.props.requirement.activeItem.structureAttributesVal[index]
        .typeOfInput.id === "both"
    ) {
      this.setState({ error: false, errorMsg: "" });
      this.props.handleChangeRequirementAttributeValue(e.target.value, index);
    }
  };

  showErrorMessage = (message) => {
    NotificationManager.warning(message, "", 5000);
  };

  validateSaveAction = (item, saveCallback) => {
    let message = "", approveSaveAction= true
        if(item.wbsName === ""){
          message = "Please select \"WBS\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.segmentName === ""){
          message = "Please select \"Segment\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.subSegmentName === ""){
          message = "Please select \"Sub Segment\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.elementName === ""){
          message = "Please select \"Element\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.planReleasedate === ""){
          message = "Please select \"Planned Release Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.planStartdate === ""){
          message = "Please select \"Planned Start Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        else if(item.requireByDate === ""){
          message = "Please select \"Require By Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
        }
        if(approveSaveAction){
          saveCallback();
        }else{
          this.showErrorMessage(message)

        }

      
    // }else{
    //   this.showErrorMessage("Please add atleast one requirement")
    //   approveSaveAction = false
    // }
    
  }

  render() {
    return (
      <>
        <NotificationContainer />
        {this.props.requirement.activeItem.structId && (
          <Modal
            title="Site Requirements"
            showModal={this.props.showModal}
            handleSave={() => {this.validateSaveAction(this.props.requirement.activeItem, this.props.onRequirementModalSave)}}
            handleClose={this.props.showModalClose}
            size="xl"
            isShowFooter={true}
          >
            <SimpleRow>
              <SearchableDropDown
                size="col-md-3"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 pl-0"
                label="WBS"
                name="requiredWorkBreak"
                selectOptions={this.props.requirement.wbsList}
                onChange={(obj) =>
                  this.props.handleChangeRequirementRequiredWorkBreak(obj)
                }
                value={this.props.requirement.activeItem.wbsName}
              />
              <SearchableDropDown
                size="col-md-3"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 pl-0"
                label="Segment"
                name="segment"
                selectOptions={this.props.requirement.segmentList}
                onChange={(obj) =>
                  this.props.handleChangeRequirementWbsSegment(obj)
                }
                value={this.props.requirement.activeItem.segmentName}
              />
              <SearchableDropDown
                size="col-md-3"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 pl-0"
                label="Subsegment"
                name="subSegment"
                selectOptions={this.props.requirement.subSegmentList}
                onChange={(obj) =>
                  this.props.handleChangeRequirementWbsSubSegment(obj)
                }
                value={this.props.requirement.activeItem.subSegmentName}
              />
              <SearchableDropDown
                size="col-md-3"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 pl-0"
                label="Element"
                name="element"
                selectOptions={this.props.requirement.elementList}
                onChange={(obj) =>
                  this.props.handleChangeRequirementWbsElement(obj)
                }
                value={this.props.requirement.activeItem.elementName}
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
                size="col-md-4"
                labelSize="col-md-5 pr-0"
                fieldSize="col-md-7 pl-0"
                label="Planned Start Date"
                name="plannedStartDate"
                id="plannedStartDate"
                onChange={(e) =>
                  this.props.handleChangeRequirementPlannedStartDate(
                    e.target.value
                  )
                }
                value={this.props.requirement.activeItem.planStartdate}
              />
              <DateInput
                size="col-md-4"
                labelSize="col-md-5 pr-0"
                fieldSize="col-md-7 pl-0"
                label="Planned Release"
                name="plannedReleaseDate"
                id="plannedReleaseDate"
                onChange={(e) =>
                  this.props.handleChangeRequirementPlannedReleaseDate(
                    e.target.value
                  )
                }
                value={this.props.requirement.activeItem.planReleasedate}
              />
              <DateInput
                size="col-md-4"
                labelSize="col-md-5 pr-0"
                fieldSize="col-md-7 pl-0"
                label="Required By"
                onChange={(e) =>
                  this.props.handleChangeRequirementRequiredBy(e.target.value)
                }
                value={this.props.requirement.activeItem.requireByDate}
              />
            </SimpleRow>
            <SimpleRow>
              {this.props.requirement.activeItem.structId &&
                this.props.requirement.activeItem.structureAttributesVal.map(
                  (structure, index) => (
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
                            onChange={(e) => this.changeValue(e, index)}
                          />
                        </div>
                      </div>
                    </Col6>
                  )
                )}
            </SimpleRow>
          </Modal>
        )}
      </>
    );
  }
}

export default SiteRequirementsModal;
