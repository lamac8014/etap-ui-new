import React, { Component } from "react";
import { componentMetaData, getComponentTableData, getExcelData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ModifyComponentsModal from "./ModifyComponentsModal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import { CSVReader } from "react-papaparse";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";
import Col6 from "../../common/forms/Col6";
import ButtonRow from "../../common/forms/ButtonRow";
import ExportExcel from "../../common/ExportExcel";
import Button from "../../common/forms/Button";

class ViewAssignComponent extends Component {
  constructor() {
    super();
    this.downloadBtnRef = React.createRef();
  }
  componentDidMount() {
    let dispStructId = window.atob(this.props.match.params.dispStructId);
    let dispReqId = window.atob(this.props.match.params.dispReqId);
    let projStrId = window.atob(this.props.match.params.projStrId);
    let structName = window.atob(this.props.match.params.structName);
    let structCode = window.atob(this.props.match.params.structCode);
    let projectName = window.atob(this.props.match.params.project);
    let dcNumber = window.atob(this.props.match.params.dcNumber);

    this.props.getComponentData(
      dispStructId,
      dispReqId,
      projStrId,
      structName,
      structCode,
      projectName,
      dcNumber
    );
  }

  render() {
    return (
      // <ContentLoader>
      <PageContainer>
        <SimpleCard>
          {/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
          <SimpleRow>
            <TextInput
              size="col-md-4"
              label="Project"
              name="projectName"
              id="projectName"
              labelSize="col-sm-3"
              fieldSize="col-sm-9"
              disabled
              // onChange={(obj) =>
              //   this.props.handleChangeComponentProjectName(obj)
              // }
              value={this.props.cmpc.projectName}
            />
            <TextInput
              size="col-md-4"
              labelSize="col-md-3 pr-0"
              fieldSize="col-md-9 "
              label="Structure"
              name="structureName"
              id="structureName"
              disabled
              // onChange={(obj) =>
              //   this.props.handleChangeComponentStructureName(obj)
              // }
              value={this.props.cmpc.structName}
            />
            <TextInput
              size="col-md-4"
              labelSize="col-md-3 pr-0"
              fieldSize="col-md-9 "
              label="Struct. Code"
              name="structureCode"
              id="structureCode"
              value={this.props.cmpc.structCode}
              placeholder="Auto Fetch"
              disabled
            />
          </SimpleRow>
          {/* <SimpleRow>
						<TextInput
							label="Component"
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9"
							name="noOfComponents"
							id="noOfComponents"
							// onChange={(e) =>
							//   this.props.handleChangeNoOfComponents(e.target.value)
							// }
							// value={this.props.scr.noOfComponents}
							placeholder="No of Components"
						/>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3"
							fieldSize="col-md-9 "
							label="Est. Weight"
							name="estimatedWeight"
							id="estimatedWeight"
							// onChange={(e) =>
							//   this.props.handleChangeEstimatedWeight(e.target.value)
							// }
							// value={this.props.scr.estimatedWeight}
						/>
						<InputGroupButton
							size="col-md-4"
							label="Dr.No"
							labelSize="col-md-3"
							fieldSize="col-md-9"
							// onChange={(e) => {
							//   this.props.handleChangeComponentDrawingNumber(e.target.value);
							// }}
							// value={this.props.scr.drawingNum}
							btnText={<FaIcon iconname="faFileAlt" />}
							// onClick={() => this.fileInputRef.current.click()}
						/>
					</SimpleRow> */}
          <ModifyComponentsModal {...this.props} />
          {/* {this.props.assignStructure.assignComponentList.components && ( */}
          <hr />
          <FormRow>
            <Col6 size="col-md-6 offset-md-3 mb-3">
              <div>
                <CSVReader
                  onDrop={this.props.handleOnDrop}
                  onError={this.handleOnError}
                  noDrag
                  addRemoveButton
                  onRemoveFile={() => this.props.removeExcelData()}
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
              metaData={componentMetaData((id) => this.props.handleEdit(id))}
              bodyData={getComponentTableData(this.props.cmpc)}
              // bodyData={(this.props.cmpc.uploadData)}
            />
          </FormRow>
          <SimpleRow>
            <Col6>
              <ButtonRow className="excel-upload-btn mb-2" position="left">
                <div style={{ display: "none" }}>
                  <ExportExcel
                    data={getExcelData(this.props.cmpc)}
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
                  btnText="Modify Components"
                  onClick={this.props.modifyComponents}
                  type="primary"
                  gradient
                  disabled={
                    this.props.cmpc.uploadData.filter((item) => {
                      return item.isModified === "Y" || item.isModified === "y";
                    }).length > 0
                      ? false
                      : true
                  }
                />
              </ButtonRow>
            </Col6>
          </SimpleRow>

          {/* } */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewAssignComponent;
