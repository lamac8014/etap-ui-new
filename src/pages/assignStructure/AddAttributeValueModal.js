import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

class AddAttributeValueModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.currentAttr);
    this.state = {
      value: this.props.currentAttr.value,
      error: false,
      errorType: "",
    };
  }

  isNumbers = (value) => {
    const regex = /^\d+$/;
    return regex.test(value) ? true : false;
  };

  isAlphabets = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? true : false;
  };

  changeValue = () => {
    // if (this.state.value !== "") {
    //   if (this.props.currentAttr.typeOfInput.id === "numeric") {
    //     if (this.isNumbers(this.state.value)) {
    //       this.props.handleValueChange(
    //         this.state.value,
    //         this.props.currentAttr.id
    //       );
    //     } else {
    //       this.setState({ error: true, errorType: "numeric" });
    //     }
    //   } else if (this.props.currentAttr.typeOfInput.id === "alphabetic") {
    //     if (this.isAlphabets(this.state.value)) {
    //       this.props.handleValueChange(
    //         this.state.value,
    //         this.props.currentAttr.id
    //       );
    //     } else {
    //       this.setState({ error: true, errorType: "alphabetic" });
    //     }
    //   } else {
    //     this.props.handleValueChange(
    //       this.state.value,
    //       this.props.currentAttr.id
    //     );
    //   }
    // } else {
    this.props.handleValueChange(this.state.value, this.props.currentAttr.id);
    // }
  };
  render() {
    return (
      <Modal
        title="Set Attribute Value"
        showModal={this.props.showModal}
        handleClose={this.props.handleClose}
        handleSave={() => {
          this.changeValue();
          this.props.handleClose();
        }}
        size="md"
        isShowFooter={true}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput
            disabled
            size="col-md-12"
            label="Description"
            name="description"
            id="description"
            value={this.props.currentAttr.name}
          />
          <TextInput
            disabled
            size="col-md-12"
            label="UOM"
            name="uom"
            id="uom"
            value={this.props.currentAttr.uom}
          />
          <TextInput
            size="col-md-12"
            label="Value"
            name="value"
            id="value"
            onChange={(e) => this.setState({ value: e.target.value })}
            value={this.state.value}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default AddAttributeValueModal;
