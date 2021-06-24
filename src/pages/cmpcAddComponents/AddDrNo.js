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
import MultiFileInput from "../../common/forms/MultiFileInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
class AddDrNo extends Component {
    fileInputRef = React.createRef();
    exportBtnRef = React.createRef();
    downloadBtnRef = React.createRef();
    inputRef = React.createRef();
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
                    <InputGroupButton
                        label="Dr.No"
                        onChange={(e) => {
                            this.props.handlechangeDrNumber(e.target.value);
                        }}
                        value={this.props.cmpcAdd.drNo}
                        btnText={<FaIcon iconname="faFileAlt" />}
                        onClick={() => this.fileInputRef.current.click()}
                    />
                    <MultiFileInput
                        innerRef={this.fileInputRef}
                        style={{ display: "none" }}
                        onChange={(e) =>
                            this.props.handleChangeFileUpload(e.target.files)
                        }
                    />
                </FormRow>

            </Modal >
        );
    }
}
export default AddDrNo;