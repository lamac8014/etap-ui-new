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
    let dateArray = ele.split("T");
    return dateArray[0];
  }
  render() {
    console.log(`Show model: ${this.props.showAddComponentModal}`);
    return (
      <Modal
        title={`Requirement No. :${this.props.requirement.requirementViewMore.mrNo}`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeRequirementViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        {this.props.requirement.requirementViewMore.siteRequirementStructures.map(
          (req, index) => (
            <div key={index}>
              <SimpleRow>
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Structure Name"
                  name="structName"
                  id="structName"
                  value={req.structName}
                  disabled
                />
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Quantity"
                  name="quantity"
                  id="quantity"
                  value={req.quantity}
                  disabled
                />
              </SimpleRow>
              <SimpleRow>
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Planned Start Date"
                  name="planStartdate"
                  id="planStartdate"
                  value={this.dateFormatter(req.planStartdate)}
                  disabled
                />
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Planned Release date"
                  name="planReleasedate"
                  id="planReleasedate"
                  value={this.dateFormatter(req.planReleasedate)}
                  disabled
                />
              </SimpleRow>
              <SimpleRow>
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Required By date"
                  name="requiredByDate"
                  id="requiredByDate"
                  value={this.dateFormatter(req.requireByDate)}
                  disabled
                />
                <TextInput
                  labelSize="col-md-3 pr-0"
                  label="Required Wbs ID"
                  name="requireWbsId"
                  id="requireWbsId"
                  value={req.requireWbsId}
                  disabled
                />
              </SimpleRow>
              {index <
                this.props.requirement.requirementViewMore
                  .siteRequirementStructures.length -
                  1 && <hr />}
            </div>
          )
        )}
      </Modal>
    );
  }
}

export default ViewRequirementViewMore;
