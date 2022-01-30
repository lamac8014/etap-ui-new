import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import IconTextButton from "../../common/forms/IconTextButton";
import Col6 from "../../common/forms/Col6";
import TextArea from "../../common/forms/TextArea";
import SiteRequirementStructure from "./SiteRequirementStructure";
import { transformProjectValue, requestCreationMetaData } from "./utils";
import SiteRequirementsModal from "./SiteRequirementsModal";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SimpleRow from "../../common/forms/SimpleRow";
import CustomDataTable from "../../common/DataTable";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import AddRequirementViewMore from "./AddRequirementViewmore";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class AddRequirement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
    };
  }
  componentDidMount() {
    const name = transformProjectValue();
    console.log(`Project Name: ${name}`);
    this.setState({ projectName: name });
    this.props.getProjectList();
    this.props.getWBSList();
    this.props.getStructureData();
    this.props.resetRequirement();
  }

  showErrorMessage = (message) => {
    NotificationManager.error(message, "", 5000);
  };

  validateSaveAction = (requirement, saveCallback) => {
    let message = "", item = {}, approveSaveAction= true
    if(requirement.savedRequirementList.length > 0){
      for(let index= 0; index< requirement.savedRequirementList.length; index++){
        item = requirement.savedRequirementList[index]
        if(item.quantity === ""){
          message = "Please enter \"Quantity\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.planReleasedate === ""){
          message = "Please select \"Planned Release Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.planStartdate === ""){
          message = "Please select \"Planned Start Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.requireByDate === ""){
          message = "Please select \"Require By Date\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.wbsName === ""){
          message = "Please select \"WBS\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.segmentName === ""){
          message = "Please select \"Segment\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.subSegmentName === ""){
          message = "Please select \"Sub Segment\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
        if(item.elementName === ""){
          message = "Please select \"Element\" for structure \"" + item.structName + "\""
          approveSaveAction = false
          break
        }
      }
      this.showErrorMessage(message)
    }else{
      this.showErrorMessage("Please add atleast one requirement")
      approveSaveAction = false
    }
    if(approveSaveAction){
      saveCallback();
    }
  }

  render() {
    // const subprop = this.props.addRequirement;

    return (
      <>
        <PageContainer>
        <NotificationContainer />
          <SimpleCard>
            <SimpleRow>
              <TextInput
                size="col-md-6"
                labelSize="col-md-2"
                fieldSize="col-md-5"
                label="Project"
                name="projectName"
                id="projectName"
                value={this.state.projectName}
                placeholder="Auto Fetch"
                disabled={true}
              />
            </SimpleRow>
            <ButtonRow position="left">
              <IconTextButton
                btnText="Requirement"
                onClick={this.props.addSiteRequirement}
                gradient
              />
            </ButtonRow>

            <div className="form-group row my-4">
              <SiteRequirementStructure {...this.props} />
            </div>
            {/* <div className="form-group row my-4">
              {this.props.requirement.siteRequirementList.map((e, i) => {
                return (
                  <Col6>
                    <SiteRequirementStructure
                      {...this.props}
                      onStructureIDChange={(e) =>
                        this.props.onStructureIDChange(e.target.value, i)
                      }
                      onQuantityChange={(e) =>
                        this.props.onQuantityChange(e.target.value, i)
                      }
                      handleStructureNameChange={(obj) =>
                        this.props.handleStructureNameChange(obj, i)
                      }
                      onSiteRequirementRemove={(i) =>
                        this.props.onSiteRequirementRemove(i)
                      }
                      index={i}
                      structureFamily={
                        this.props.requirement.siteRequirementList[i]
                          .structFamily
                      }
                      quantity={
                        this.props.requirement.siteRequirementList[i].quantity
                      }
                      structureName={
                        this.props.requirement.siteRequirementList[i]
                          .structureName
                      }
                    />
                  </Col6>
                );
              })} */}
            {/* </div> */}
            <FormRow>
              <CustomDataTable
                metaData={requestCreationMetaData((id) =>
                  this.props.openViewMoreModal(id)
                )}
                bodyData={this.props.requirement.savedRequirementList}
              />
              <SiteRequirementsModal
                {...this.props}
                showModal={this.props.requirement.showModal}
              />
              <AddRequirementViewMore
                {...this.props}
                showModalViewMore={this.props.requirement.showViewMoreModal}
              />
            </FormRow>
            <SimpleRow>
              <TextArea
                labelSize="col-lg-3"
                size="col-lg-6"
                label="Remarks"
                name="remarks"
                id="remarks"
                onChange={(e) =>
                  this.props.handleChangeRequirementRemarks(e.target.value)
                }
                value={this.props.requirement.remarks}
                placeholder="Remarks"
              />
            </SimpleRow>
            <hr />
            <ButtonRow position="center">
              <Button
                btnText="SAVE"
                onClick={() => this.validateSaveAction(this.props.requirement, this.props.saveRequirement)}
                type="success"
                gradient
              />
              <Button
                btnText="DISCARD"
                type="danger"
                gradient
                onClick={this.props.resetRequirement}
              />
            </ButtonRow>
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default AddRequirement;
