import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import Radio from "../../common/forms/Radio";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { transformVendorCodeListData } from "./utils";

class AddScrapModal extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }

  render() {
    return (
      <Modal
        title="Add Scrap"
        showModal={this.props.scrap.showEditModal}
        handleClose={this.props.closeEditModal}
        handleSave={() => {
          this.props.addScrap();
        }}
        size="md"
        isShowFooter={true}
        disableSave={
          this.props.scrap.scrapVendor.value &&
          this.props.scrap.auctionID &&
          this.props.scrap.scrapRate
            ? false
            : true
        }
      >
        <SearchableDropDown
          size="col-md-12"
          label="Vendor Name"
          name="vendorName"
          id="vendorName"
          selectOptions={transformVendorCodeListData(
            this.props.scrap.vendorCodesList
          )}
          value={this.props.scrap.scrapVendor}
          onChange={(item) => this.props.handleChangeVendor(item)}
        />
        <TextInput
          size="col-md-12"
          labelSize="col-md-3"
          fieldSize="col-md-9 "
          label="Scrap Rate"
          name="scrapRate"
          id="scrapRate"
          value={this.props.scrap.scrapRate}
          onChange={(e) => {
            this.props.handleChangeScrapRate(e.target.value);
          }}
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
          label="Auction ID"
          size="col-md-12"
          labelSize="col-md-3 pr-0"
          fieldSize="col-md-9"
          value={this.props.scrap.auctionID}
          placeholder="Auction ID"
          onChange={(e) => this.props.handleChangeAuctionId(e.target.value)}
          btnText={<FaIcon iconname="faFileUpload" />}
          onClick={() => this.fileRef.current.click()}
        />
      </Modal>
    );
  }
}

export default AddScrapModal;
