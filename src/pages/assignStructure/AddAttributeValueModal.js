import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import Col6 from "../../common/forms/Col6";
import SimpleRow from "../../common/forms/SimpleRow";

class AddAttributeValueModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      error: false,
      errorMsg: "",
    };
  }
  // componentDidMount() {
  // 	this.setState({ value: parseInt(this.props.scr.currentAttribute.value) });
  // }

  isNumbers = (value) => {
    const regex = /^\d+$/;
    return regex.test(value) ? true : false;
  };

  isAlphabets = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? true : false;
  };

  changeValue = (e) => {
    if (e.target.value === "") {
      let tempObj = this.props.scr.currentAttribute;
      tempObj.value = e.target.value;
      this.props.setCurrentAttribute(tempObj);
    } else if (this.props.scr.currentAttribute.typeOfInput.id === "numeric") {
      if (this.isNumbers(e.target.value)) {
        this.setState({ error: false, errorMsg: "" });
        let tempObj = this.props.scr.currentAttribute;
        tempObj.value = e.target.value;
        this.props.setCurrentAttribute(tempObj);
      } else {
        this.setState({ error: true, errorMsg: "The Input type is Numeric" });
      }
    } else if (
      this.props.scr.currentAttribute.typeOfInput.id === "alphabetic"
    ) {
      if (this.isAlphabets(e.target.value)) {
        this.setState({ error: false, errorMsg: "" });
        let tempObj = this.props.scr.currentAttribute;
        tempObj.value = e.target.value;
        this.props.setCurrentAttribute(tempObj);
      } else {
        this.setState({
          error: true,
          errorMsg: "The Input type is Alphabetic",
        });
      }
    } else if (this.props.scr.currentAttribute.typeOfInput.id === "both") {
      this.setState({ error: false, errorMsg: "" });
      let tempObj = this.props.scr.currentAttribute;
      tempObj.value = e.target.value;
      this.props.setCurrentAttribute(tempObj);
    }
    // } else {
    //   let tempObj = this.props.scr.currentAttribute;
    //   tempObj.value = e.target.value;
    //   this.props.setCurrentAttribute(tempObj);
    // }
  };
  render() {
    return (
      <Modal
        title="Set Attribute Value"
        showModal={this.props.scr.showAttributeValueModal}
        handleClose={() => {
          this.props.showAttributeValueModal(false);
          this.props.setCurrentAttribute({});
          this.setState({ value: 0 });
        }}
        handleSave={() => {
          this.props.handleChangeAssignStruct(
            this.props.scr.currentAttribute.value,
            this.props.scr.currentAttribute.id
          );
          this.props.showAttributeValueModal(false);
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
            value={this.props.scr.currentAttribute.name}
          />
          <TextInput
            disabled
            size="col-md-12"
            label="UOM"
            name="uom"
            id="uom"
            value={this.props.scr.currentAttribute.uom}
          />
          <TextInput
            size="col-md-12"
            label="Value"
            name="value"
            id="value"
            onChange={(e) => this.changeValue(e)}
            value={this.props.scr.currentAttribute.value}
          />
        </FormRow>
        {this.state.error && (
          <SimpleRow>
            <Col6 size="col-md-12">
              <p className="text-danger text-center mb-0">
                {this.state.errorMsg}
              </p>
            </Col6>
          </SimpleRow>
        )}
      </Modal>
    );
  }
}

export default AddAttributeValueModal;
