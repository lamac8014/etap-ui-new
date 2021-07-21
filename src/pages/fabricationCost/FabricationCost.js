import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import MultiFileInput from "../../common/forms/MultiFileInput";
import Button from "../../common/forms/Button";
import Loader from "../../common/Loader";
import CustomDataTable from "../../common/DataTable";
import SimpleRow from "../../common/forms/SimpleRow";
import ExportExcel from "../../common/ExportExcel";
import FaIcon from "../../common/FaIcon";
import ButtonRow from "../../common/forms/ButtonRow";
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
  downloadBtnRef = React.createRef();
  componentDidMount = () => {
    this.props.buildStructureCost();
    this.props.getCompDetails();
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
                 bodyData={this.props.fabCost.buildCost}
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
                // bodyData={getComponentTableData(this.props.scr)}
                bodyData={this.props.fabCost.compDetails}
                // progressPending={this.props.assignStructure.isLoading}
                pagination={true}
                // paginationTotalRows={
                //   this.props.scr.uploadData && this.props.scr.uploadData.length
                // }
                paginationPerPage={5}
                noHeader={true}
                style={{ margin: "0" }}
              />
            </FormRow>
            <SimpleRow>
              <Col6>
                <ButtonRow className="excel-upload-btn mb-2" position="left">
                   <div style={{ display: "none" }}>  
                   <ExportExcel
											data={getExcelData(this.props.fabCost )}
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
                        <FaIcon iconname="faDownload" /> Download as Excel
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
                    btnText="SAVE"
                    onClick={this.props.saveAssignComp}
                    type="primary"
                    gradient
                  />
                </ButtonRow>
              </Col6>
            </SimpleRow>
            <hr />
            <SimpleRow className="d-flex justify-content-center">

              <Button
                btnText="Save"
                onClick={() => { }}
                type="success"
                gradient
              />
              <Button
                btnText="Discard"
                onClick={() => { }}
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
