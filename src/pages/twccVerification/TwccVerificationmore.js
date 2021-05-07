import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";
import DateInput from "../../common/forms/DateInput";
import SimpleRow from "../../common/forms/SimpleRow";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import Col6 from "../../common/forms/Col6";

class ViewMoretwccVerification extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title="Physical Verification"
				showModal={this.props.physicalVerification.showSaveModal}
				handleClose={this.props.hideSaveModal}
				handleSave={this.props.savePhysicalVerification}
				size="md"
				isShowFooter={true}
				disableSave={
					this.props.physicalVerification.fromDue === "" ||
					this.props.physicalVerification.toDue === ""
				}
			>
				{/* {console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />} */}

				<SimpleRow>
					<DateInput
						size="col-md-12"
						labelSize="col-md-3 offset-md-1 text-center"
						fieldSize="col-md-7"
						label="From Due"
						name="From due"
						id="From due"
						onChange={(e) => this.props.handleChangeFromDate(e.target.value)}
						// value={this.props.requirement.activeItem.planStartdate}
					/>
				</SimpleRow>
				<SimpleRow>
					<DateInput
						size="col-md-12"
						labelSize="col-md-3 offset-md-1 text-center"
						fieldSize="col-md-7"
						label="To Due"
						name="To due"
						id="To due"
						onChange={(e) => this.props.handleChangeToDate(e.target.value)}
						// value={this.props.requirement.activeItem.planStartdate}
					/>
				</SimpleRow>
			</Modal>
		);
	}
}

export default ViewMoretwccVerification;
