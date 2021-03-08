import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import MultiFileInput from "../../common/forms/MultiFileInput";
import Button from "../../common/forms/Button";
import CustomAlert from "../../common/forms/customAlert";
import Loader from "../../common/Loader";
import CustomDataTable from "../../common/DataTable";

import ExportExcel from "../../common/ExportExcel";
import StructureAttributesTable from "./StructureAttributesTable";
import FaIcon from "../../common/FaIcon";

import { componentsMetaData, getExcelData } from "./utils";

import Col6 from "../../common/forms/Col6";
import { CSVReader } from "react-papaparse";
import IconTextButton from "../../common/forms/IconTextButton";
import IconButton from "../../common/forms/IconButton";

import InputGroupButton from "../../common/forms/InputGroupButton";

class AssignStructure extends Component {
  fileInputRef = React.createRef();
  componentDidMount = () => {
    this.props.setInitialData();
  };

  getFiles = (files) => {
    let fileIcons = [];
    for (let i = 0; i < files.length; i++) {
      fileIcons.push(files[i]);
    }
    return fileIcons;
  };

  render() {
    let tempArr = [
      { id: "1", name: "Capacity", uom: "MT", value: "2509" },
      { id: "2", name: "Capacity", uom: "MT", value: "2509" },
      { id: "3", name: "Capacity", uom: "MT", value: "2509" },
      { id: "4", name: "Capacity", uom: "MT", value: "2509" },
    ];
    return (
      <>
        <ContentLoader>
          {this.props.scr.isLoading && <Loader />}
          {this.props.scr.isProjMsg && (
            <CustomAlert variant="success" message={this.props.proj.message} />
          )}
          <FormContainer formTitle={"Create Structure"}>
            <FormRow>
              <TextInput
                size="col-md-4"
                labelSize="col-md-4"
                fieldSize="col-md-8 "
                label="IC"
                name="ic"
                id="ic"
                // value={this.props.scr.strcutureType}
                value="BNF IC"
                placeholder="Auto Fetch"
                disabled
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 "
                fieldSize="col-md-8 "
                label="BU"
                name="bu"
                id="bu"
                // value={this.props.scr.structureCode}
                value="Metro"
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
                size="col-md-4"
                label="Project"
                name="projectName"
                id="projectName"
                labelSize="col-sm-4"
                fieldSize="col-sm-8"
                // value={this.props.scr.projName}
                value="PROJ0001"
                disabled
              />

            </FormRow>
            <FormRow>
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
                label="Struct. Family"
                name="structureName"
                id="structureName"
                // value={this.props.scr.structName}
                value="LG&Bridge Builders"
                disabled
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
                label="Structure"
                name="structureName"
                id="structureName"
                // value={this.props.scr.structName}
                value="Launching Girders"
                disabled
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-4 pr-0"
                fieldSize="col-md-8 "
                label="Struct. Code"
                name="structureCode"
                id="structureCode"
                // value={this.props.scr.strcutureType}
                value="STR000001"
                placeholder="Auto Fetch"
                disabled
              />


            </FormRow>

            <FormRow>
              <TextInput
                label="Component"
                size="col-md-4"
                labelSize="col-md-4"
                fieldSize="col-md-8"
                name="noOfComponents"
                id="noOfComponents"
                // onChange={(e) =>
                //   this.props.handleChangeComponentDrawingNumber(
                //     e.target.value
                //   )
                // }
                // value={this.props.scr.drawingNum}
                placeholder="No of Components"
                onChange={() => { }}
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-4"
                fieldSize="col-md-8 "
                label="Est. Weight"
                name="estimatedWeight"
                id="estimatedWeight"
                onChange={(e) =>
                  this.props.handleChangeEstimatedWeight(e.target.value)
                }
                value={this.props.scr.estimatedWeight}
              />
              <InputGroupButton
                size="col-md-4"
                label="Dr.No"
                labelSize="col-md-3"
                fieldSize="col-md-9"
                onChange={() => { }}
                value="O17078-Q-BR-CM-FB-1713"
                btnText={<FaIcon iconName="faFileAlt" />}
                onClick={() => this.fileInputRef.current.click()}
              />
            </FormRow>
            <MultiFileInput
              innerRef={this.fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => this.props.handleFileUpload(e.target.files)}
              value={this.props.scr.fileInput}
            />
            <FormRow>
              {this.getFiles(this.props.scr.files).map((file, index) => (
                <Col6 size="col-md-3">
                  <div class="row mb-10">
                    <div class="col-md-2">
                      <IconButton
                        iconName="faTimesCircle"
                        onClick={() => this.props.removeFiles(file, index)}
                      />
                    </div>
                    <div class="col-md-10">
                      <IconTextButton
                        iconName="faFile"
                        size="lg"
                        btnText={file.name}
                      />
                    </div>
                  </div>
                </Col6>
              ))}
            </FormRow>
            {/* table */}
            <hr />
            {/* {this.props.scr.structAttri.length > 0 ? ( */}
            <StructureAttributesTable
              onChange={(e, id) => this.props.handleChangeAssignStruct(e, id)}
              // bodyData={this.props.scr.structAttri}
              bodyData={tempArr}
              title="Structure Attributes"
            />
            {/* ) : null} */}
            <hr />
            <FormRow className="row">
              <Col6 size="col-md-6 offset-md-3 d-flex justify-content-center">
                <Button
                  btnText="SAVE"
                  onClick={this.props.saveAssignStruct}
                  btnType="primary"
                />
              </Col6>

              {/* <Button
                btnText="Clear"
                onClick={this.props.clearStrcutAttri}
                btnType="btn-secondary"
              /> */}
            </FormRow>
            <br />
            <FormRow className="excel-upload-btn mb-2">
              <CSVReader
                onDrop={this.props.handleOnDrop}
                onError={this.handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={this.handleOnRemoveFile}
                className="test"
              >
                <span class="btnText">
                  <FaIcon iconName="faUpload" /> Upload Excel Template
                </span>
              </CSVReader>
            </FormRow>
            <FormRow>
              <CustomDataTable
                metaData={componentsMetaData()}
                // bodyData={getComponentTableData(this.props.scr)}
                bodyData={[{}, {}]}
                // progressPending={this.props.assignStructure.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.scr.uploadData && this.props.scr.uploadData.length
                }
                paginationPerPage={5}
                noHeader={true}
                style={{ margin: "0" }}
              />
            </FormRow>
            <FormRow className="d-flex justify-content-center">
              <Button
                btnText="SAVE"
                onClick={this.props.saveAssignComp}
                btnType="primary"
              />
            </FormRow>
            <FormRow className="mb-3">
              <ExportExcel
                data={getExcelData(this.props.scr)}
                // header={this.props.headers}
                filename={"test"}
                className="download-btn"
                iconName="faDownload"
              />
            </FormRow>
            <FormRow className="d-flex justify-content-center">
              <Button
                btnText="Complete"
                onClick={() => { }}
                btnType="btn-primary mr-3"
              />
              <Button
                btnText="Discard"
                onClick={() => { }}
                btnType="btn-danger mr-3"
              />
            </FormRow>
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default AssignStructure;
