import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

class AddAttributeValueModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			error: false,
			errorType: "",
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
		let tempObj = this.props.scr.currentAttribute;
		tempObj.value = e.target.value;
		this.props.setCurrentAttribute(tempObj);
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
			</Modal>
		);
	}
}

export default AddAttributeValueModal;
