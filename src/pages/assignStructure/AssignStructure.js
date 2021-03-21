import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import MultiFileInput from "../../common/forms/MultiFileInput";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/DataTable";
import ExportExcel from "../../common/ExportExcel";
import StructureAttributesTable from "./StructureAttributesTable";
import FaIcon from "../../common/FaIcon";
import {
  componentsMetaData,
  getExcelData,
  getComponentTableData,
  CSVLoaderStyles,
} from "./utils";
import Col6 from "../../common/forms/Col6";
import { CSVReader } from "react-papaparse";
import InputGroupButton from "../../common/forms/InputGroupButton";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import FormRow from "../../common/forms/FormRow";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { transformDropDownData } from "../../utils/dataTransformer";
import IconButton from "../../common/forms/IconButton";
import IconTextButton from "../../common/forms/IconTextButton";
import ButtonRow from "../../common/forms/ButtonRow";
import Loader from "../../common/Loader";

class AssignStructure extends Component {
  fileInputRef = React.createRef();
  exportBtnRef = React.createRef();
  downloadBtnRef = React.createRef();

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
    return (
      <>
        <PageContainer>
          {/* {this.props.scr.isLoading && <Loader />}
          {this.props.scr.isProjMsg && (
            <CustomAlert variant="success" message={this.props.proj.message} />
          )} */}
          <Loader />
          <SimpleCard>
            <SimpleRow>
              <SearchableDropDown
                size="col-md-4"
                label="Project"
                name="projectName"
                id="projectName"
                selectOptions={transformDropDownData(
                  this.props.scr.projList,
                  "id",
                  "name"
                )}
                labelSize="col-sm-3"
                fieldSize="col-sm-9"
                onChange={(obj) =>
                  this.props.handleChangeComponentProjectName(obj)
                }
                value={this.props.scr.projName}
              />
              <SearchableDropDown
                size="col-md-4"
                labelSize="col-md-3 pr-0"
                fieldSize="col-md-9 "
                label="Structure"
                name="structureName"
                id="structureName"
                selectOptions={transformDropDownData(
                  this.props.scr.structList,
                  "id",
                  "name"
                )}
                onChange={(obj) =>
                  this.props.handleChangeComponentStructureName(obj)
                }
                value={this.props.scr.structName}
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-3 pr-0"
                fieldSize="col-md-9 "
                label="Struct. Family"
                name="structureName"
                id="structureName"
                value={this.props.scr.strcutureType}
                // value="LG&Bridge Builders"
                disabled
              />
            </SimpleRow>
            <SimpleRow>
              <TextInput
                size="col-md-4"
                labelSize="col-md-3"
                fieldSize="col-md-9 "
                label="IC"
                name="ic"
                id="ic"
                value={this.props.scr.ic}
                // value="BNF IC"
                // placeholder="Auto Fetch"
                disabled
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-3 "
                fieldSize="col-md-9 "
                label="BU"
                name="bu"
                id="bu"
                value={this.props.scr.bu}
                // value="Metro"
                // placeholder="Auto Fetch"
                disabled={true}
              />

              <TextInput
                size="col-md-4"
                labelSize="col-md-3 pr-0"
                fieldSize="col-md-9 "
                label="Struct. Code"
                name="structureCode"
                id="structureCode"
                value={this.props.scr.structureCode}
                placeholder="Auto Fetch"
                disabled
              />
            </SimpleRow>
            <SimpleRow>
              <TextInput
                label="Component"
                size="col-md-4"
                labelSize="col-md-3 pr-0"
                fieldSize="col-md-9"
                name="noOfComponents"
                id="noOfComponents"
                onChange={(e) =>
                  this.props.handleChangeNoOfComponents(e.target.value)
                }
                value={this.props.scr.noOfComponents}
                placeholder="No of Components"
              />
              <TextInput
                size="col-md-4"
                labelSize="col-md-3"
                fieldSize="col-md-9 "
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
                onChange={(e) => {
                  this.props.handleChangeComponentDrawingNumber(e.target.value);
                }}
                value={this.props.scr.drawingNum}
                btnText={<FaIcon iconname="faFileAlt" />}
                onClick={() => this.fileInputRef.current.click()}
              />
            </SimpleRow>
            <MultiFileInput
              innerRef={this.fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => this.props.handleFileUpload(e.target.files)}
              value={this.props.scr.fileInput}
            />
            <SimpleRow>
              {this.getFiles(this.props.scr.files).map((file, index) => (
                <Col6 size="col-md-3">
                  <TextInput
                    size="col-md-12"
                    fieldSize="col-md-10 px-0"
                    placeholder="BU Name"
                    name={this.props.index}
                    id={this.props.index}
                    value={file.name}
                    disabled
                    iconSize="col-md-2 d-flex justify-content-center"
                    iconname="faTimesCircle"
                    onClick={() => this.props.removeFiles(file, index)}
                  />
                </Col6>
              ))}
            </SimpleRow>
            {/* table */}
            {this.props.scr.structAttri.length > 0 ? (
              <>
                <StructureAttributesTable
                  {...this.props}
                  onChange={(e, id) =>
                    this.props.handleChangeAssignStruct(e, id)
                  }
                  bodyData={this.props.scr.structAttri}
                  title="Structure Attributes"
                />

                {/* <Button
                btnText="Clear"
                onClick={this.props.clearStrcutAttri}
                btnType="btn-secondary"
              /> */}
              </>
            ) : null}
            <ButtonRow position="center">
              <Button
                btnText="Save"
                onClick={this.props.saveAssignStruct}
                type="primary"
                gradient
              />
            </ButtonRow>
            <hr />

            <FormRow>
              <Col6 size="col-md-6 offset-md-3 mb-3">
                <div>
                  <CSVReader
                    onDrop={this.props.handleOnDrop}
                    onError={this.handleOnError}
                    noDrag
                    addRemoveButton
                    onRemoveFile={() => this.props.handleOnDrop([])}
                    className="test"
                  >
                    <span className="loader-text">
                      <FaIcon iconname="faUpload" />
                      &nbsp;Upload Excel Template
                    </span>
                  </CSVReader>
                </div>
              </Col6>
              <CustomDataTable
                metaData={componentsMetaData()}
                bodyData={getComponentTableData(this.props.scr)}
                // bodyData={[{}, {}]}
                // progressPending={this.props.assignStructure.isLoading}
              />
            </FormRow>
            <SimpleRow>
              <Col6>
                <ButtonRow className="excel-upload-btn mb-2" position="left">
                  <div style={{ display: "none" }}>
                    <ExportExcel
                      data={getExcelData(this.props.scr)}
                      compRef={this.downloadBtnRef}
                      // header={this.props.headers}
                      filename={"test"}
                      className="download-btn"
                      iconname="faDownload"
                    />
                  </div>
                  <Button
                    btnText={
                      <>
                        <FaIcon iconname="faDownload" /> Download As Excel
                      </>
                    }
                    type="light"
                    gradient
                    onClick={() => this.downloadBtnRef.current.click()}
                  />
                </ButtonRow>
              </Col6>
              <Col6>
                <ButtonRow>
                  <Button
                    btnText="Save"
                    onClick={this.props.saveAssignComp}
                    type="primary"
                    gradient
                    disabled={
                      this.props.scr.projName.value &&
                      this.props.scr.structName.value
                        ? false
                        : true
                    }
                  />
                </ButtonRow>
              </Col6>
            </SimpleRow>
            {/* <FormRow className="mb-3">
              <ExportExcel
                data={getExcelData(this.props.scr)}
                // header={this.props.headers}
                filename={"test"}
                className="download-btn"
                iconname="faDownload"
              />
            </FormRow>
            <SimpleRow className="d-flex justify-content-center">
              <Button
                btnText="SAVE"
                onClick={this.props.saveAssignComp}
                btnType="primary"
              />
            </SimpleRow> */}
            <hr />
            <SimpleRow className="d-flex justify-content-center">
              <Button
                btnText="Complete"
                onClick={() => {}}
                type="success"
                gradient
              />
              <Button
                btnText="Discard"
                onClick={() => {}}
                type="danger"
                gradient
              />
            </SimpleRow>
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default AssignStructure;
