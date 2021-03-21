import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import AddAttributes from "./AddAttributes";
class AssignComponentViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`View Component - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeAssignComponentViewMoreModal}
        size="xl"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure ID"
            name="structureId"
            id="structureId"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.assignStructure.assignComponentList.structureId}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Name"
            name="strcutureName"
            id="strcutureName"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignComponentList.strcutureName}
          />

          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Family"
            name="structureFamily"
            id="structureFamily"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={
              this.props.assignStructure.assignComponentList.strcutureTypeName
            }
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Code"
            name="structureCode"
            id="structureCode"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.assignStructure.assignComponentList.structureCode}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="BU Name"
            name="buName"
            id="buName"
            value={this.props.assignStructure.assignComponentList.buName}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="IC Name"
            name="icName"
            id="icName"
            value={this.props.assignStructure.assignComponentList.icName}
          />
        </SimpleRow>

        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Component ID"
            name="componentID"
            id="componentID"
            value={this.props.assignStructure.assignComponentViewMore.compId}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Component Number"
            name="componentNO"
            id="componentNO"
            value={
              this.props.assignStructure.assignComponentViewMore.componentNo
            }
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Component Status"
            name="compStatus"
            id="compStatus"
            value={
              this.props.assignStructure.assignComponentViewMore.compStatus
            }
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Component Type"
            name="compTypeId"
            id="compTypeId"
            value={
              this.props.assignStructure.assignComponentViewMore.compTypeName
            }
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Drawing No"
            name="drawingNo"
            id="drawingNo"
            value={this.props.assignStructure.assignComponentViewMore.drawingNo}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Project Id"
            name="projectId"
            id="projectId"
            value={this.props.assignStructure.assignComponentList.projectId}
          />
        </SimpleRow>

        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Breadth"
            name="breath"
            id="breath"
            value={this.props.assignStructure.assignComponentViewMore.breath}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Height"
            name="height"
            id="height"
            value={this.props.assignStructure.assignComponentViewMore.height}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Length"
            name="leng"
            id="leng"
            value={this.props.assignStructure.assignComponentViewMore.leng}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Weight"
            name="weight"
            id="weight"
            value={this.props.assignStructure.assignComponentViewMore.width}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Make Type"
            name="makeType"
            id="makeType"
            value={this.props.assignStructure.assignComponentViewMore.makeType}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Thickness"
            name="thickness"
            id="thickness"
            value={this.props.assignStructure.assignComponentViewMore.thickness}
          />
        </SimpleRow>

        <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Tag"
            name="tag"
            id="tag"
            value={this.props.assignStructure.assignComponentViewMore.isTag}
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="QR Code"
            name="qrCode"
            id="qrCode"
            value={this.props.assignStructure.assignComponentViewMore.qrCode}
          />
        </SimpleRow>
      </Modal>
    );
  }
}

export default AssignComponentViewMore;
