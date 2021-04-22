import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import TextArea from "../../common/forms/TextArea";

class GetQuantityModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title={
					this.props.createDispatch.serviceTypeId === 1
						? "Fabrication"
						: "Outsourcing"
				}
				showModal={this.props.createDispatch.showGetQuantityModal}
				handleClose={this.props.hideGetQuantityModal}
				handleSave={this.props.setStructuresForFabOut}
				size="sm"
				isShowFooter={true}
			>
				{console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />}

				<SimpleRow>
					<TextInput
						size="col-md-12"
						label="Quantity"
						name="quantity"
						id="quantity"
						onChange={(e) => this.props.handleChangeQuantity(e.target.value)}
						value={this.props.createDispatch.quantity}
					/>
				</SimpleRow>
				<SimpleRow>
					<TextArea
						size="col-lg-12"
						label="Remarks"
						name="remarks"
						id="remarks"
						onChange={(e) => this.props.handleChangeNotes(e.target.value)}
						value={this.props.createDispatch.notes}
						placeholder="Remarks"
					/>
				</SimpleRow>
			</Modal>
		);
	}
}

export default GetQuantityModal;
