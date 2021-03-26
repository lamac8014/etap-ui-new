import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import SearchableDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformDropDownData } from "../../utils/dataTransformer";
import IconTextButton from "../../common/forms/IconTextButton";
import AddAttributes from "./AddAttributes";
class AddStructure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`${
          this.props.structure.isEdit ? "Update" : "Create New"
        } Structure`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.structure.isEdit
            ? this.props.updateStructure
            : this.props.addStructure
        }
        handleClose={this.props.closeAddStructureModal}
        size="lg"
        isShowFooter={true}
      >
        {/* {console.log("isLoading", this.props.isLoading)} */}
        {this.props.isLoading && <Loader />}

        <SimpleRow>
          <TextInput
            label="Structure Name"
            name="structureName"
            id="structureName"
            onChange={(e) =>
              this.props.handleChangeStructureName(e.target.value)
            }
            value={this.props.structure.structureName}
          />
          {/* <TextInput
                label="Structure Family"
                name="structureFamily"
                id="structureFamily"
                onChange={e =>
                  this.props.handleChangeStructureFamily(e.target.value)
                }
                value={this.props.structure.structureFamily}
              /> */}
          <SearchableDropDown
            label="Structure Family"
            name="structureFamily"
            selectOptions={transformDropDownData(
              this.props.structure.structureFamilyList,
              "id",
              "name"
            )}
            onChange={(obj) => this.props.handleChangeStructureFamily(obj)}
            value={this.props.structure.structureFamily}
          />
        </SimpleRow>
        <div class="form-group row">
          <div class="col-sm-8">
            <IconTextButton
              btnText="Add Attributes"
              onClick={this.props.addAttribute}
            />
          </div>
        </div>
        <div class="form-group row">
          <div className="col-md-12">
          {this.props.structure.attributeList.map((e, i) => {
            return (
              <AddAttributes
                onNameChange={(e) => this.props.onNameChange(e.target.value, i)}
                onTypeOfInputChange={(obj) =>
                  this.props.onTypeOfInputChange(obj.label, i)
                }
                onUoMChange={(e) => this.props.onUoMChange(e.target.value, i)}
                onAttributeRemove={(i) => this.props.onAttributeRemove(i)}
                index={i}
                nameValue={this.props.structure.attributeList[i].name}
                typeOfInputValue={
                  this.props.structure.attributeList[i].typeOfInput
                }
                uomValue={this.props.structure.attributeList[i].uom}
              />
            );
          })}
          </div>
          
        </div>
      </Modal>
    );
  }
}

export default AddStructure;
