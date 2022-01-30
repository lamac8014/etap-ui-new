import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import DateInput from "../../common/forms/DateInput";
import InputGroupButton from "../../common/forms/InputGroupButton";

import FaIcon from "../../common/FaIcon";
import TextArea from "../../common/forms/TextArea";
import FileInput from "../../common/forms/FileInput";
import ImageInput from "../../common/forms/ImageInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Modal from "../../common/Modal";
import YearInput from "../../common/forms/YearInput";


class ViewMoreModal extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.imageRef = React.createRef();
  }
  componentDidMount = () => {
    this.props.onModalLoad();
  };

  render() {
    return (
      <Modal
        title={`Edit Built Details`}
        showModal={this.props.built.openViewMoreModal}
        handleSave={this.props.addComponent}
        handleClose={this.props.closeViewMoreModal}
        size="xl"
        isShowFooter={true}
        disableSave={
          this.props.built.currentStructure.structureId === undefined || 
          this.props.built.wbsItem.elementName === undefined ||
          this.props.built.expRelDate === "" ||
          this.props.built.fabYear === "" ||
          this.props.built.reUse.value === undefined ||
          this.props.built.estWeight === "" ? true : false
        }
      >
        <SimpleRow>
          <TextInput
            disabled
            label="DC No"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            name="dispatchNo"
            id="dispatchNo"
            onChange={(e) => this.props.handleChangedcNo(e.target.value)}
            value={this.props.built.currentStructure.dispatchNo}
            // value={this.props.built.asBuildStructure.dispatchNo}
            placeholder="Auto fetch"
          />
          <TextInput
            disabled
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Structure Name"
            name="structrueName"
            id="structrueName"
            onChange={(e) => this.props.handleChangeStructName(e.target.value)}
            value={this.props.built.currentStructure.structrueName}
            placeholder="Auto fetch"
          />
          <TextInput
            disabled
            label="Structure Code"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            name="structCode"
            id="structCode"
            onChange={(e) => this.props.handleChangeStructCode(e.target.value)}
            value={this.props.built.currentStructure.structureCode}
            // value={this.props.built.asBuildStructure.strcutureCode}
            placeholder="Auto fetch"
          />
        </SimpleRow>
        <SimpleRow>
          <SearchableDropDown
            size="col-md-4"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="WBS"
            name="requiredWorkBreak"
            selectOptions={this.props.built.wbsList}
            onChange={(obj) => {
              this.props.handleChangeWbs(obj);
            }}
          />
          <SearchableDropDown
            size="col-md-4"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Segment"
            name="segment"
            selectOptions={this.props.built.segmentList}
            onChange={(obj) => {
              this.props.handleChangeSegment(obj);
            }}
          />
          <SearchableDropDown
            size="col-md-4"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Sub segment"
            name="subSegment"
            selectOptions={this.props.built.subSegmentList}
            onChange={(obj) => {
              this.props.handleChangeSubSegment(obj);
            }}
          />
        </SimpleRow>
        <SimpleRow>
          <SearchableDropDown
            size="col-md-4"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            label="Element"
            name="element"
            selectOptions={this.props.built.elementList}
            onChange={(obj) => {
              this.props.handleChangeElement(obj);
            }}
          />
          <DateInput
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Expected Rel. Date"
            name="reldate"
            id="reldate"
            onChange={(e) => this.props.handleChangeRelDate(e.target.value)}
            value={this.props.built.expRelDate}
          />
          <YearInput
            label="Fabrication Year"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            name="fabricationYear"
            id="fabricationYear"
            onChange={(date) => {
              this.props.handleChangeFabYear(date);
            }}
            value={this.props.built.fabYear}
          />
        </SimpleRow>

        <SimpleRow>
          <SearchableDropDown
            label="Reusability"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            name="reusability"
            id="reusability"
            onChange={(obj) => {
              this.props.handleChangeReuse(obj);
            }}
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.built.reUse}
            selectOptions={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            placeholder="Select Reusability"
          />
          <div style={{ display: "none" }}>
            <ImageInput
              innerRef={this.imageRef}
              onChange={(e) => {
                this.props.handleUploadImage(e.target.files[0]);
              }}
            />
          </div>
          <InputGroupButton
            label="Upload Image"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            value={this.props.built.imgUpload.name}
            btnText={<FaIcon iconname="faFileImage" />}
            onClick={() => this.imageRef.current.click()}
            disabled
          />
          <div style={{ display: "none" }}>
            <FileInput
              innerRef={this.fileRef}
              onChange={(e) => {
                this.props.handleChangeFileUpload(e.target.files[0]);
              }}
            />
          </div>
          <InputGroupButton
            label="Upload File"
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            value={this.props.built.files.name}
            btnText={<FaIcon iconname="faFileUpload" />}
            onClick={() => this.fileRef.current.click()}
            disabled
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            size="col-md-4"
            fieldSize="col-md-8"
            labelSize="col-sm-4"
            label="Weight"
            name="weight"
            id="weight"
            onChange={(e) => this.props.handleChangeWeight(e.target.value)}
            value={this.props.built.estWeight}
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
          <div style={{ display: "none" }}>
            <FileInput
              innerRef={this.fileRef}
              onChange={(event) => {
                this.props.handleUploadFile(event.target.files[0]);
              }}
            />
            <ImageInput
              innerRef={this.imageRef}
              onChange={(event) => {
                this.props.handleUploadImage(event.target.files[0]);
              }}
            />
          </div>
        </SimpleRow>
        <SimpleRow>
          <TextArea
            size="col-md-6"
            label="Remarks"
            name="remarks"
            id="remarks"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
            onChange={(e) => this.props.handleChangeRemarks(e.target.value)}
            value={this.props.built.rmark}
          />
        </SimpleRow>
      </Modal>
    );
  }
}

export default ViewMoreModal;
