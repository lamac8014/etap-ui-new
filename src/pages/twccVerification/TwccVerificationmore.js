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

class ViewMoretwccVerification extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title={``}
				showModal={this.props.showScrapViewMoreModel}
				handleClose={this.props.closeScarpViewMoreModal}
				size="lg"
				isShowFooter={true}
			>
				{console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />}

				<SimpleRow>
					<DateInput
						size="col-md-6"
						labelSize="col-md-3 offset-md-1"
						fieldSize="col-md-6"
						label="From Due"
						name="From due"
						id="From due"
						onChange={(e) =>
							this.props.handleChangeDispatchDate(e.target.value)
						}
						// value={this.props.requirement.activeItem.planStartdate}
					/>
					<DateInput
						size="col-md-6"
						labelSize="col-md-3 offset-md-1"
						fieldSize="col-md-6"
						label="To Due"
						name="To due"
						id="To due"
						onChange={(e) =>
							this.props.handleChangeDispatchDate(e.target.value)
						}
						// value={this.props.requirement.activeItem.planStartdate}
					/>
				</SimpleRow>
			</Modal>
		);
	}
}

export default ViewMoretwccVerification;
