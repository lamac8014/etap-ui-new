import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { businessUnitRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import BUList from "./buList";
import IconTextButton from "../../common/forms/IconTextButton";

class AddBusinessUnit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getICCodes();
    this.props.getSbgCodes();
  }

  render() {
    return (
      <Modal
        title={"Create BU"}
        showModal={this.props.showAddBusinessUnitModal}
        handleSave={
          this.props.businessUnit.isEditMode
            ? this.props.updateBusinessUnitType
            : this.props.addBusinessUnitType
        }
        handleClose={
          this.props.businessUnit.isEditMode
            ? this.props.closeAddBusinessUnitModal
            : this.props.closeAddBusinessUnitModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}
        <SimpleRow>
          <SearchableDropDown
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
          <SearchableDropDown
            label="SBG Name"
            name="sbgName"
            selectOptions={transformDropDownData(
              this.props.businessUnit.sbgCodeList,
              "id",
              "name"
            )}
            onChange={(obj) => this.props.handleChangeSbgCode(obj)}
            value={this.props.businessUnit.sbgCode}
          />
        </SimpleRow>
        <div className="col-sm-8">
          <IconTextButton btnText="Add BU" onClick={this.props.addBU} />
        </div>
        <br />
        <div className="form-group row">
          {this.props.businessUnit.businessUnitList.map((e, i) => {
            return (
              <BUList
                onBUNameChange={(e) =>
                  this.props.onBUNameChange(e.target.value, i)
                }
                onBUNameRemove={(i) => this.props.onBUNameRemove(i)}
                index={i}
                buName={this.props.businessUnit.businessUnitList[i].buName}
              />
            );
          })}
        </div>
        {this.props.businessUnit.isModalMsg && (
          <p className="text-danger">{this.props.businessUnit.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddBusinessUnit;
