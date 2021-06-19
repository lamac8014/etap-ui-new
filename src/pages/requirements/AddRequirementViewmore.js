import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

class AddRequirementViewMore extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    return (
      <>
        {this.props.requirement.viewMoreActiveItem &&
          this.props.requirement.viewMoreActiveItem.structId && (
            <Modal
              title="Requirement Details"
              showModal={this.props.showModalViewMore}
              handleSave={() => {}}
              handleClose={() => this.props.closeViewMoreModal()}
              size="xl"
              isShowFooter={false}
            >
              <SimpleRow>
                <TextInput
                  disabled
                  size="col-md-3"
                  labelSize="col-md-4 pr-0"
                  fieldSize="col-md-8 pl-0"
                  label="WBS"
                  name="requiredWorkBreak"
                  // onChange={(obj) =>
                  //   this.props.handleChangeRequirementRequiredWorkBreak(obj)
                  // }
                  value={
                    this.props.requirement.viewMoreActiveItem.wbsName
                      ? this.props.requirement.viewMoreActiveItem.wbsName.label
                      : ""
                  }
                />
                <TextInput
                  disabled
                  size="col-md-3"
                  labelSize="col-md-4 pr-0"
                  fieldSize="col-md-8 pl-0"
                  label="Segment"
                  name="segment"
                  // onChange={(obj) =>
                  //   this.props.handleChangeRequirementRequiredWorkBreak(obj)
                  // }
                  value={
                    this.props.requirement.viewMoreActiveItem.segmentName
                      ? this.props.requirement.viewMoreActiveItem.segmentName
                          .label
                      : ""
                  }
                />
                <TextInput
                  disabled
                  size="col-md-3"
                  labelSize="col-md-4 pr-0"
                  fieldSize="col-md-8 pl-0"
                  label="Sub segment"
                  name="subSegment"
                  // onChange={(obj) =>
                  //   this.props.handleChangeRequirementRequiredWorkBreak(obj)
                  // }
                  value={
                    this.props.requirement.viewMoreActiveItem.subSegmentName
                      ? this.props.requirement.viewMoreActiveItem.subSegmentName
                          .label
                      : ""
                  }
                />
                <TextInput
                  disabled
                  size="col-md-3"
                  labelSize="col-md-4 pr-0"
                  fieldSize="col-md-8 pl-0"
                  label="Element"
                  name="element"
                  // onChange={(obj) =>
                  //   this.props.handleChangeRequirementRequiredWorkBreak(obj)
                  // }
                  value={
                    this.props.requirement.viewMoreActiveItem.elementName
                      ? this.props.requirement.viewMoreActiveItem.elementName
                          .label
                      : ""
                  }
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
                <TextInput
                  disabled
                  size="col-md-4"
                  labelSize="col-md-5 pr-0"
                  fieldSize="col-md-7 pl-0"
                  label="Planned Start Date"
                  name="plannedStartDate"
                  id="plannedStartDate"
                  value={
                    this.props.requirement.viewMoreActiveItem.planStartdate
                  }
                />
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
                <TextInput
                  disabled
                  size="col-md-4"
                  labelSize="col-md-5 pr-0"
                  fieldSize="col-md-7 pl-0"
                  label="Planned Release Date"
                  name="plannedReleaseDate"
                  id="plannedReleaseDate"
                  value={
                    this.props.requirement.viewMoreActiveItem.planReleasedate
                  }
                />
                <TextInput
                  disabled
                  size="col-md-4"
                  labelSize="col-md-5 pr-0"
                  fieldSize="col-md-7 pl-0"
                  label="Required By"
                  value={
                    this.props.requirement.viewMoreActiveItem.requireByDate
                  }
                />
              </SimpleRow>
              <SimpleRow>
                {this.props.requirement.viewMoreActiveItem.structId &&
                  this.props.requirement.viewMoreActiveItem.structureAttributesVal.map(
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
                              disabled
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
                    )
                  )}
              </SimpleRow>
            </Modal>
          )}
      </>
    );
  }
}

export default AddRequirementViewMore;
