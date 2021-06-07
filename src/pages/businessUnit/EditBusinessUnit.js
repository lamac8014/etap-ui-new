import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { businessUnitRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
//import SearchableDropDown from "../../common/forms/SearchableDropdown";
import BUList from "./buList";
import IconTextButton from "../../common/forms/IconTextButton";
import SearchableDropdown from "../../common/forms/SearchableDropdown";

class EditBusinessUnit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getICCodes();
  }

  render() {
    return (
      <Modal
        title={"Update BU"}
        showModal={this.props.showEditBusinessUnitModal}
        handleSave={this.props.updateBusinessUnitType}
        handleClose={this.props.closeAddBusinessUnitModal}
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <FormRow>
          <SearchableDropdown
            label="IC Name"
            name="icCodes"
            selectOptions={transformDropDownData(
              this.props.businessUnit.icCodeList,
              "id",
              "name"
            )}
            onChange={(obj) => this.props.handleChangeICCode(obj)}
            value={this.props.businessUnit.icCode}
          />
          <TextInput
            label="BU Name"
            name="Business Unit Name"
            id="businessUnitName"
            onChange={(e) =>
              this.props.handleChangeBusinessUnit(e.target.value)
            }
            value={this.props.businessUnit.buName}
          />
           <SearchableDropdown
            label="Status"
            //labelSize="col-md-3 text-right"
            //fieldSize="col-md-7"
            selectOptions={[
              { value: "Active", label: "Active" },
              { value: "InActive", label: "InActive" },
            ]}
            onChange={(obj) => this.props.handleBuStatus(obj)}
            value={this.props.businessUnit.buStatus}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default EditBusinessUnit;
