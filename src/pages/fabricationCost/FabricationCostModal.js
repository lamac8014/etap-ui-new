import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
import FileInput from "../../common/forms/FileInput";
import FormRow from "../../common/forms/FormRow";
import InputGroupButton from "../../common/forms/InputGroupButton";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

class FabricationCostModal extends Component {
  woUploadRef = React.createRef();
  constructor() {
    super();
    this.state = {
      structureNames: [],
    };
  }
  render() {
    return (
      <Modal
        title="Add Fabrication Cost"
        showModal={this.props.fabCost.fabCostModalflag}
        handleSave={() => {}}
        handleClose={() => this.props.setFabCostModalFlag(false)}
        size="md"
        isShowFooter={true}
      >
        <FormRow>
          <TextInput
            label="Fabrication Cost"
            size="col-md-12 "
            labelSize="col-md-4"
            fieldSize="col-md-8"
            value={this.props.fabCost.fabCost}
            onChange={(e) =>
              this.props.handleChangeFabricationCost(e.target.value)
            }
          />
        </FormRow>
        <FormRow>
          <InputGroupButton
            size="col-md-12 "
            label="WO"
            labelSize="col-md-4"
            fieldSize="col-md-8"
            value={
              this.props.fabCost.woFile.name
                ? this.props.fabCost.woFile.name
                : "Choose your file.."
            }
            placeholder="Upload.."
            btnText={<FaIcon iconName="faFileAlt" />}
            onClick={() => this.woUploadRef.current.click()}
            disabled
          />
        </FormRow>
        <FileInput
          innerRef={this.woUploadRef}
          style={{ display: "none" }}
          onChange={(e) => this.props.handleWoUpload(e.target.files[0])}
        />
      </Modal>
    );
  }
}

export default FabricationCostModal;
