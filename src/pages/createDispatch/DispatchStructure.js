import React, { Component } from "react";

import {
  dispatchStructureMetaData,
  twccdispatchStructureMetaData,
  lstVerifyStructureQtyMetaData,
  transformdispatchStructure
} from "./utils";
import CustomDataTable from "../../common/CustomDataTable";
import FormRow from "../../common/forms/FormRow";
import Button from "../../common/forms/Button";
import Popup from "../../common/forms/Popup";
import TextInput from "../../common/forms/TextInput";
import ConfirmModal from "../../common/ConfirmModal";
import Col6 from "../../common/forms/Col6";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomAlert from "../../common/forms/customAlert";

class DispatchStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      resetPaginationToggle: false,
      dummy: [],
      flag: false,
    };
  }


  previous(data) {
    data.history.push('/etrack/dispatch/twccDispatch');
  }

  componentDidMount = () => {
    let id = window.atob(this.props.match.params.siteReqId);
    this.props.onPageLoad(id);
  };

  filteredItems = (data) => {
    return (
      data &&
      data.filter(
        (item) =>
          item.structureName &&
          item.structureName
            .toLowerCase()
            .includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    console.log("+++++++++")
    console.log(this.props.createDispatch.disableOutSourcing)
    console.log(this.props.createDispatch.disableFabrication)
    console.log(this.props.createDispatch.disableReuse)
    console.log("+++++++++")
    let tempArr = [{ structureName: "Launching Girders", availability: "Yes", date: "17/02/2021", attr: "Capacity", site: "Chennai" },
    { structureName: "Launching Girders", availability: "No", date: "01/03/2021", attr: "Capacity", site: "" },
    { structureName: "Launching Girders", availability: "Yes", date: "01/04/2021", attr: "Capacity", site: "Chennai" },
    { structureName: "Launching Girders", availability: "No", date: "01/05/2021", attr: "Capacity", site: "" },]
    return (
      <PageContainer>
        <SimpleCard>
          {this.props.createDispatch.message && (
            <CustomAlert
              type={this.props.createDispatch.isSuccess ? "success" : "error"}
              message={this.props.createDispatch.message}
              onClose={this.props.resetMessage}
            />
          )}
          {this.props.createDispatch.dispatchError && (
            <CustomAlert
              type="error"
              message={this.props.createDispatch.dispatchErrMsg}
              onClose={() => this.props.setDispatchError(false, "")}
            />
          )}
          <ConfirmModal
            showModal={this.props.createDispatch.showModal}
            handleClose={() => this.props.hideConfirmModal()}
            title="Confirm Dispatch"
            handleConfirm={() => {
              this.props.createDispatchApi();
            }}
          >
            <h6 className="text-danger">
              {this.props.createDispatch.modalMessage}?
            </h6>
          </ConfirmModal>

          {this.props.createDispatch.activeItem && (
            <>
              <FormRow>
                <TextInput
                  size="col-md-4"
                  label="MR No"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.mrNo}
                  disabled
                />
                <TextInput
                  size="col-md-4"
                  label="Structure Name"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.projectName}
                  disabled
                />
                <TextInput
                  size="col-md-4"
                  label="Req Site"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.projectName}
                  disabled
                />
              </FormRow>
              <FormRow>
                <TextInput
                  size="col-md-4"
                  label="Qty"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.quantity}
                  disabled
                />
                <TextInput
                  size="col-md-4"
                  label="Search By Rel.Date"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.planStartdate}
                  disabled
                />
                <TextInput
                  size="col-md-4"
                  label="Search By Attributes"
                  fieldSize="col-md-8"
                  labelSize="col-sm-4"
                  value={this.props.createDispatch.activeItem.projectName}
                  disabled
                />
              </FormRow>
            </>
          )}
          <hr />

          {this.props.createDispatch.siteReqDetailsById && (
            <CustomDataTable
              metaData={twccdispatchStructureMetaData((row) => this.props.setSelectedStructures(row))}
              // bodyData={this.filteredItems(transformdispatchStructure(this.props.createDispatch.lstStructforDispatch))}
              bodyData={tempArr}

            />
          )}
          <FormRow className="d-flex justify-content-end">
            <Button
              btnText="Reuse"
              btnType="btn-primary mx-2"
              onClick={() => {
                if (this.props.createDispatch.selectedItems.length === 0) {
                  this.props.setDispatchError(
                    true,
                    "Select atleast one structure"
                  );
                } else {
                  let allowReuse = this.props.createDispatch.selectedItems.filter(
                    (item) => {
                      return item.availProjectId === null;
                    }
                  );
                  if (allowReuse.length === 0) {
                    this.props.showConfirmModal(
                      `Dispatch structure(s) for Reuse`
                    );
                    this.props.setServiceTypeId(4);
                  } else {
                    this.props.setDispatchError(
                      true,
                      "Structure(s) not eligible for Reuse"
                    );
                  }
                }
              }}
              disable={this.props.createDispatch.disableReuse}
            />
            <Button
              btnText="Fabrication"
              btnType="btn-primary mx-2"
              onClick={() => {
                if (this.props.createDispatch.selectedItems.length === 0) {
                  this.props.setDispatchError(
                    true,
                    "Select atleast one structure"
                  );
                } else {
                  this.props.showConfirmModal(
                    `Dispatch structure(s) for Fabrication`
                  );
                  this.props.setServiceTypeId(1);
                }
              }}
              disable={this.props.createDispatch.disableFabrication}
            />
            <Button
              btnText="Outsourcing"
              btnType="btn-primary mx-2"
              onClick={() => {
                if (this.props.createDispatch.selectedItems.length === 0) {
                  this.props.setDispatchError(
                    true,
                    "Select atleast one structure"
                  );
                } else {
                  this.props.showConfirmModal(
                    `Dispatch structure(s) for Outsourcing`
                  );
                  this.props.setServiceTypeId(2);
                }
              }}
              disable={this.props.createDispatch.disableOutSourcing}
            />
          </FormRow><br />
          <FormRow className="row">


            <Col6 size="col-md-2 offset-md-3 d-flex justify-content-center">
              <div style={{ textAlign: "center", marginRight: "300px" }}>
                <button className="btn btn-md btn-primary" onClick={(data) => this.previous(data)}>
                  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>
              </div>

              <div style={{ textAlign: "center", marginRight: "50px" }}>
                <button className="btn btn-md btn-primary" onClick={(data) => this.previous(data)}>
                  SAVE
                  </button>
              </div>
              <Button
                btnText="DISPATCH"
                onClick={this.props.saveAssignStruct}
                btnType="primary"
              />


            </Col6>
          </FormRow>
        </SimpleCard>
      </PageContainer>

    );
  }
}

export default DispatchStructure;
