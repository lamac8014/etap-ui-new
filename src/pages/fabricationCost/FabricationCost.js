import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import MultiFileInput from "../../common/forms/MultiFileInput";
import Button from "../../common/forms/Button";
import Loader from "../../common/Loader";
import CustomDataTable from "../../common/DataTable";

import ExportExcel from "../../common/ExportExcel";
import FaIcon from "../../common/FaIcon";

import {
  componentsMetaData,
  getExcelData,
  structureTableMetaData,
} from "./utils";

import Col6 from "../../common/forms/Col6";
import { CSVReader } from "react-papaparse";
import IconTextButton from "../../common/forms/IconTextButton";
import IconButton from "../../common/forms/IconButton";

import InputGroupButton from "../../common/forms/InputGroupButton";
import ViewMoreModal from "./ViewMoreModal";
import FabricationCostModal from "./FabricationCostModal";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class AssignStructure extends Component {
  fileInputRef = React.createRef();
  fileInputRef2 = React.createRef();
  componentDidMount = () => {
    // this.props.setInitialData();
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
        <PageContainer>
          <SimpleCard>
          {this.props.fabCost.isLoading && <Loader />}
          {/* {this.props.fabCost.message && (
            <CustomAlert variant="success" message={this.props.proj.message} />
          )} */}
          <ViewMoreModal {...this.props} />
          <FabricationCostModal {...this.props} />
          
            <div className="mb-2">
              <CustomDataTable
                metaData={structureTableMetaData(
                  this.props.setFabCostModalFlag,
                  this.props.setViewMoreModalFlag
                )}
                // bodyData={getComponentTableData(this.props.scr)}
                bodyData={[{}, {}]}
                // progressPending={this.props.assignStructure.isLoading}
                pagination={true}
                // paginationTotalRows={
                //   this.props.scr.uploadData && this.props.scr.uploadData.length
                // }
                paginationPerPage={5}
                noHeader={true}
              />
            </div>
            <hr />
            <FormRow className="d-flex justify-content-end mb-2">
              <div style={{ display: "none" }}>
                <ExportExcel
                  compRef={this.fileInputRef2}
                  data={getExcelData(this.props.fabCost)}
                  // header={this.props.headers}
                  filename={"test"}
                  className="download-btn"
                  iconName="faDownload"
                />
                <CSVReader
                  onDrop={this.props.handleFileUpload}
                  onError={this.handleOnError}
                  noDrag
                  addRemoveButton
                  onRemoveFile={this.handleOnRemoveFile}
                  className="test"
                >
                  <span ref={this.fileInputRef}></span>
                </CSVReader>
              </div>
              <Button
                btnText={
                  <>
                    <FaIcon iconName="faUpload" /> Upload Excel Template
                  </>
                }
                btnType="btn-primary mx-3"
                onClick={() => this.fileInputRef.current.click()}
              />
            </FormRow>

            <CustomDataTable
              metaData={componentsMetaData()}
              // bodyData={getComponentTableData(this.props.scr)}
              bodyData={[{}, {}]}
              // progressPending={this.props.assignStructure.isLoading}
              pagination={true}
              // paginationTotalRows={
              //   this.props.scr.uploadData && this.props.scr.uploadData.length
              // }
              paginationPerPage={5}
              noHeader={true}
              style={{ margin: "0" }}
            />

            <FormRow className="d-flex justify-content-end ">
              <Button
                btnText={
                  <>
                    <FaIcon iconName="faDownload" /> Download as Excel
                  </>
                }
                btnType="btn-primary mx-3"
                onClick={() => this.fileInputRef2.current.click()}
              />
            </FormRow>
            <FormRow className="d-flex justify-content-center">
              <Button
                btnText="SAVE"
                onClick={this.props.saveAssignComp}
                btnType="primary"
              />
            </FormRow>
            <hr />
            <FormRow className="d-flex justify-content-center">
              <Button
                btnText="Save"
                onClick={() => {}}
                btnType="btn-primary mr-3"
              />
              <Button
                btnText="Discard"
                onClick={() => {}}
                btnType="btn-danger mr-3"
              />
            </FormRow>
         
          </SimpleCard>
         </PageContainer>
      </>
    );
  }
}

export default AssignStructure;
