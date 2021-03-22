import React, { Component } from "react";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Checkbox from "../../common/forms/Checkbox";
import SimpleRow from "../../common/forms/SimpleRow";
import Radio from "../../common/forms/Radio";

class AddSubContractor extends Component {
  render() {
    console.log(
      `In vendor page: ${JSON.stringify(this.props.vendor.venServList)}`
    );
    return (
      <Modal
        title={`${this.props.vendor.isEditMode ? "Update" : "Add"} Vendor`}
        showModal={this.props.vendor.showAddVendorModal}
        handleSave={
          this.props.vendor.isEditMode
            ? this.props.updateVendor
            : this.props.createVendor
        }
        handleClose={this.props.closeAddVendorModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Vendor Name"
            name="vendorName"
            id="vendorName"
            onChange={(e) => this.props.handleChangeVendorName(e.target.value)}
            value={this.props.vendor.vendorName}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Vendor Code"
            name="vendorCode"
            id="vendorCode"
            onChange={(e) => this.props.handleChangeVendorCode(e.target.value)}
            value={this.props.vendor.vendorCode}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Email"
            name="email"
            id="email"
            onChange={(e) => this.props.handleChangeVendorEmail(e.target.value)}
            value={this.props.vendor.email}
          />
          <TextInput
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Contact Number"
            name="contactNumber"
            id="contactNumber"
            onChange={(e) =>
              this.props.handleChangeVendorContactNumber(e.target.value)
            }
            value={this.props.vendor.contactNumber}
          />
        </SimpleRow>
        <SimpleRow>
          <SearchableDropDown
            labelSize="col-md-5 pr-0"
            fieldSize="col-md-7 pl-0"
            label="Status"
            selectOptions={[
              { value: "Active", label: "Active" },
              { value: "InActive", label: "InActive" },
            ]}
            onChange={(obj) => this.props.handleChangeVendorStatus(obj)}
            value={this.props.vendor.vendorStatus}
          />
        </SimpleRow>
        <SimpleRow className="justify-content-around my-3">
          {this.props.vendor.venServList.map((dt, i) => {
            return (
              <Radio
                color="success"
                label={dt.name}
                id={i}
                value={dt.name}
                name="cmpcRadio"
                onChange={(e) => this.props.onServTypeChange(e.target.value)}
                checked={dt.checked}
              />
            );
          })}
        </SimpleRow>
        {this.props.vendor.isModalMsg && (
          <p className="text-danger">{this.props.vendor.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddSubContractor;
