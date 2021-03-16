import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";


class ViewRequirementViewMore extends Component {
  constructor(props) {
    super(props);
  }
  dateFormatter(ele) {
    let dateArray = ele.split('T');
    return dateArray[0];
  }
  render() {
    console.log(`Show model: ${this.props.showAddComponentModal}`)
    return (
      <Modal
        title={`View Requirement - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeRequirementViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <SimpleRow>
          <TextInput
            label="MR No"
            name="mrNo"
            id="mrNo"
            value={this.props.requirement.requirementViewMore.mrNo}
          />
          <TextInput
            label="Project Name"
            name="projectName"
            id="projectName"
            value={this.props.requirement.requirementViewMore.projectName}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Planned Start Date"
            name="planStartdate"
            id="planStartdate"
            value={this.dateFormatter(`${this.props.requirement.requirementViewMore.planStartdate}`)}
          />
          <TextInput
            label="Planned Releas edate"
            name="planReleasedate"
            id="planReleasedate"
            value={this.dateFormatter(`${this.props.requirement.requirementViewMore.planReleasedate}`)}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Actual Start Date"
            name="actualStartdate"
            id="actualStartdate"
            value={this.dateFormatter(`${this.props.requirement.requirementViewMore.actualStartdate}`)}
          />
          <TextInput
            label="Actual Release Date"
            name="actualReleasedate"
            id="actualReleasedate"
            value={this.dateFormatter(`${this.props.requirement.requirementViewMore.actualReleasedate}`)}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Required Wbs ID"
            name="requireWbsId"
            id="requireWbsId"
            value={this.props.requirement.requirementViewMore.requireWbsId}
          />
          <TextInput
            label="Actual Wbs ID"
            name="actualWbsId"
            id="actualWbsId"
            value={this.props.requirement.requirementViewMore.actualWbsId}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Status"
            name="status"
            id="status"
            value={this.props.requirement.requirementViewMore.status}
          />
          {/* <TextInput
                label="Status Internal"
                name="statusInternal"
                id="statusInternal"
                value={this.props.requirement.requirementViewMore.statusInternal}
              /> */}
        </SimpleRow>
      </Modal>
    );
  }
}

export default ViewRequirementViewMore;
