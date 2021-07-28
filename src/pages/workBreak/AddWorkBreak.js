import React, { Component } from "react";
import { Col } from "react-bootstrap";
import FormRow from "../../common/forms/FormRow";

import Button from "../../common/forms/Button";
import { CSVReader } from "react-papaparse";
import CustomDataTable from "../../common/DataTable";
import Col6 from "../../common/forms/Col6";
import {
  transformWBSData,
  listWBSMetaData,
  CSVLoaderStyles,
  getDownloadWbsTemplateData,
} from "./utils";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { transformDropDownData } from "../../utils/dataTransformer";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SimpleRow from "../../common/forms/SimpleRow";
import ExportExcel from "../../common/ExportExcel";

class AddWorkBreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  downloadBtnRef = React.createRef();

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  componentDidMount() {
    this.props.getProjectList();
  }
  filteredItems = (data) => {
    console.log(data);
    return (
      data &&
      data.filter(
        (item) =>
          item.wbs &&
          item.wbs.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    const subprop = this.props.addWorkBreak;
    return (
      <>
        <PageContainer>
          <SimpleCard>
            <FormRow>
              <SearchableDropDown
                label="Project Code"
                name="projectName"
                labelSize="mx-2"
                fieldSize="col-md-6"
                selectOptions={transformDropDownData(
                  this.props.wbs.projectCodesList,
                  "id",
                  "name"
                )}
                onChange={(obj) => this.props.handleChangeProjectName(obj)}
                value={this.props.wbs.wbsProjectName}
              />
            </FormRow>
            <hr />{" "}
            <FormRow>
              <Col className="col-6 offset-3">
                <CSVReader
                  onDrop={this.props.handleOnDrop}
                  onError={this.handleOnError}
                  noDrag
                  addRemoveButton
                  onRemoveFile={() => this.props.handleOnDrop([])}
                  style={CSVLoaderStyles}
                >
                  <span className="loader-text">Click to upload WBS File</span>
                </CSVReader>
              </Col>
            </FormRow>
            <br />
            <FormRow>
              {this.props.wbs.wbsUploadedData && (
                <CustomDataTable
                  metaData={listWBSMetaData()}
                  bodyData={transformWBSData(this.props.wbs.wbsUploadedData)}
                />
              )}
            </FormRow>
            <SimpleRow>
              <Col6>
                <div style={{ display: "none" }}>
                  <ExportExcel
                    data={getDownloadWbsTemplateData()}
                    compRef={this.downloadBtnRef}
                    // header={this.props.headers}
                    filename="wbs"
                    className="download-btn"
                    iconname="faDownload"
                  />
                </div>
                <span
                  className="download-wbs"
                  onClick={() => this.downloadBtnRef.current.click()}
                >
                  Download WBS Template
                </span>
              </Col6>
              <Col6 size="col-md-6 d-flex justify-content-end">
                <Button
                  btnText="Save"
                  onClick={this.props.saveWBSData}
                  disabled={
                    this.props.wbs.wbsProjectName === "" || this.props.wbs.wbsUploadedData === ""
                  }
                  type="primary"
                  gradient
                />
                <Button
                  btnText="Discard"
                  type="danger"
                  onClick={this.props.resetUsersData}
                  gradient
                />
              </Col6>
            </SimpleRow>
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default AddWorkBreak;
