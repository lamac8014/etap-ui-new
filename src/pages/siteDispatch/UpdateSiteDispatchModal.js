import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Label from "../../common/forms/Label";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";
import IconButton from "../../common/forms/IconButton";
import IconTextButton from "../../common/forms/IconTextButton";
import SimpleRow from "../../common/forms/SimpleRow";

class UpdateSiteDispatchModal extends Component {
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  inputRef = React.createRef();
  render() {
    let tempArr = [];
    this.props.siteDispatch.structureListCode.map((item) => {
      tempArr.push({
        value: item.id,
        label: item.structureName,
      });
    });
    return (
      <Modal
        title="Update Site Dispatch"
        showModal={this.props.showModal}
        handleSave={() => {
          this.props.siteDispatch.workOrderNumber !== "" &&
          this.props.siteDispatch.dispatchDate !== "" &&
          this.props.siteDispatch.structureId !== ""
            ? this.props.updateSiteDispatch()
            : alert("Fill all the fields");
        }}
        handleClose={this.props.closeUpdateSiteDispatchModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <Label label="To Site" />
          <SearchableDropDown
            label="Structure Name"
            name="structureName"
            id="structureName"
            selectOptions={tempArr}
            onChange={(item) =>
              this.props.handleChangeStructureName(item.value)
            }
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Structure Code"
            name="structureCode"
            id="structureCode"
            // value={
            //   this.props.siteDispatch.activeItem.monthlyRent
            //     ? this.props.siteDispatch.activeItem.monthlyRent
            //     : 0
            // }
            disabled
          />
          <DateInput
            label="Dispatch Date"
            name="dispatchDate"
            id="dispatchDate"
            onChange={(e) =>
              this.props.handleChangeDispatchDate(e.target.value)
            }
          />
        </SimpleRow>
        <SimpleRow>
          <IconTextButton
            className="btn-rounded"
            fieldSize="col-md-7"
            iconName="faPlus"
            size="lg"
            btnText="Upload WO"
            onClick={() => this.inputRef.current.click()}
          />
          <FileInput
            innerRef={this.inputRef}
            size="col-md-6"
            style={{ display: "none" }}
            onChange={(e) =>
              this.props.handleChangeUploadedFile(e.target.files[0])
            }
          />
        </SimpleRow>

        {/* {this.props.siteDispatch.activeItem.serviceTypeId === 1 && (
          <>
            <FormRow>
              <TextInput
                label="Fabrication Cost"
                name="fabricationCost"
                id="fabricationCost"
                value={
                  this.props.siteDispatch.activeItem.fabricationCost
                    ? this.props.siteDispatch.activeItem.fabricationCost
                    : 0
                }
                disabled
              />
              <TextInput
                label="Work Order Number"
                name="workOrderNumber"
                id="workOrderNumber"
                onChange={(e) =>
                  this.props.handleChangeWorkOrderNumber(e.target.value)
                }
              />
            </FormRow>
            <FormRow>
              <FileInput
                size="col-md-6"
                onChange={(e) =>
                  this.props.handleChangeUploadedFile(e.target.files[0])
                }
              />
            </FormRow>
          </>
        )} */}
        {/* {this.props.siteDispatch.activeItem.serviceTypeId === 2 && (
          <>
            <FormRow>
              <TextInput
                label="Monthly Rent"
                name="monthlyRent"
                id="monthlyRent"
                value={
                  this.props.siteDispatch.activeItem.monthlyRent
                    ? this.props.siteDispatch.activeItem.monthlyRent
                    : 0
                }
                disabled
              />

              <TextInput
                label="Contract Years"
                name="contractYears"
                id="contractYears"
                value={
                  this.props.siteDispatch.activeItem.contractYears
                    ? this.props.siteDispatch.activeItem.contractYears
                    : 0
                }
                disabled
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="Plan Release Date"
                name="planReleaseDate"
                id="planReleaseDate"
                value={
                  this.props.siteDispatch.activeItem.planReleaseDate
                    ? this.props.siteDispatch.activeItem.planReleaseDate
                    : 0
                }
                disabled
              />
              <FileInput size="col-md-6" />
            </FormRow>
          </>
        )} */}
      </Modal>
    );
  }
}

export default UpdateSiteDispatchModal;
