import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Button from "../../common/forms/Button"
import ButtonRow from "../../common/forms/ButtonRow"
import FileInput from "../../common/forms/FileInput";
import IconTextButton from "../../common/forms/IconTextButton";
import Col6 from "../../common/forms/Col6";
import FaIcon from "../../common/FaIcon";
import MultiFileInput from "../../common/forms/MultiFileInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
class AddDrNoPage extends Component {
  fileInputRef = React.createRef();
  inputRef = React.createRef();

  getFiles = (files) => {
		let fileIcons = [];
		for (let i = 0; i < files.length; i++) {
			fileIcons.push(files[i]);
		}
		return fileIcons;
	};

  render() {
    return (
      // <Modal
      //   title={`Add Dr No`}
      //   showModal={this.props.showAddModal}
      //   handleClose={this.props.closeAddModal}
      //   //handleSave={this.props.addUser}
      //   size="md"
      //   isShowFooter={true}
      //   gradient
      // >
        <FormRow>
          <InputGroupButton
            label="Dr.No"
            onChange={() => {
            }}
            //value={}
            btnText={<FaIcon iconname="faFileAlt" />}
            onClick={() => this.fileInputRef.current.click()}
          />
          <MultiFileInput
							innerRef={this.fileInputRef}
							style={{ display: "none" }}
							onChange={(e) => this.props.handleFileUpload(e.target.files)}
							value={this.props.scr.fileInput}
						/>
           <SimpleRow>
							{this.getFiles(this.props.scr.files).map((file, index) => (
								<Col6 size="col-md-3">
									<TextInput
										size="col-md-12"
										fieldSize="col-md-10 px-0"
										placeholder=""
										name={this.props.index}
										id={this.props.index}
										value={file.name}
										disabled
										iconSize="col-md-2 d-flex justify-content-center"
										iconname="faTimesCircle"
										onClick={() => this.props.removeFiles(file, index)}
									/>
								</Col6>
							))}

						</SimpleRow>
        </FormRow>
      // </Modal>
    );
  }
}

export default AddDrNoPage;
