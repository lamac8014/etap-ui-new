import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Button from "../../common/forms/Button"
import ButtonRow from "../../common/forms/ButtonRow"
import FileInput from "../../common/forms/FileInput";
import IconTextButton from "../../common/forms/IconTextButton";
import FaIcon from "../../common/FaIcon";
class AddDrNoModal extends Component {
    inputRef = React.createRef();
    constructor() {
    super();
    //fileInputRef = React.createRef();
    this.fileRef = React.createRef();
  }

render() {
    return (
      <Modal
        title={`Add Dr.No`}
        showModal={this.props.showAddModal}
        handleClose={this.props.closeAddModal}
        //handleSave={this.props.addUser}
        size="md"
        isShowFooter={true}
        gradient
      >
        <FormRow>
        <IconTextButton
            label="Add Dr.No"
            size="col-md-12"
            labelSize="col-md-3 pr-0"
            fieldSize="col-md-9"
            placeholder="Dr no"
            size="lg"
            btnText={<FaIcon iconname="faFileUpload" />}
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
        </FormRow>
      </Modal>
    );
  }  
}

export default AddDrNoModal;
