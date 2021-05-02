import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import Radio from "../../common/forms/Radio";
import DateInput from "../../common/forms/DateInput";
import ImageInput from "../../common/forms/ImageInput";
import swal from "sweetalert";

class ViewSurplusMore extends Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
	}

	render() {
		return (
			<Modal
				title="Declare Surplus"
				showModal={this.props.surplus.showEditModal}
				handleClose={this.props.closeEditModal}
				handleSave={() => {
					this.props.surplus.isSurplusChecked
						? this.props.addSurplus()
						: swal("scrap action initiated", { icon: "info" });
				}}
				size="md"
				isShowFooter={true}
			>
				<SimpleRow>
					<Col6 size="col-md-12 d-flex">
						<Col6 size="col-md-3">
							<p>Action</p>
						</Col6>
						<Col6 size="col-md-9 px-3">
							<Radio
								color="primary"
								label="Declare Surplus"
								id="1"
								value="surplus"
								name="surplusRadio"
								onChange={(e) =>
									this.props.handleChangeSurplusAction(e.target.value)
								}
								checked={this.props.surplus.isSurplusChecked}
							/>
							<Radio
								color="primary"
								label="Recommend for Scrap"
								id="2"
								value="scrap"
								name="surplusRadio"
								onChange={(e) =>
									this.props.handleChangeSurplusAction(e.target.value)
								}
								checked={this.props.surplus.isScrapChecked}
							/>
						</Col6>
					</Col6>
				</SimpleRow>
				<DateInput
					size="col-md-12"
					labelSize="col-md-3"
					fieldSize="col-md-9"
					label="Surplus From"
					name="surplusFrom"
					id="surplusFrom"
					onChange={(e) => this.props.handleChangeSurplusDate(e.target.value)}
					value={this.props.surplus.dateFrom}
				/>
				<div style={{ display: "none" }}>
					<ImageInput
						innerRef={this.imageRef}
						onChange={(e) => {
							this.props.handleChangeSurplusUpload(e.target.files[0]);
						}}
					/>
				</div>
				<InputGroupButton
					label="Upload Image"
					size="col-md-12"
					labelSize="col-md-3 pr-0"
					fieldSize="col-md-9"
					value={
						this.props.surplus.currentFile
							? this.props.surplus.currentFile.name
							: ""
					}
					btnText={<FaIcon iconname="faFileImage" />}
					onClick={() => this.imageRef.current.click()}
					disabled
				/>
				<TextInput
					size="col-md-12"
					labelSize="col-md-3"
					fieldSize="col-md-9 "
					label="Existing Site"
					name="existingSite"
					id="existingSite"
					value={this.props.surplus.surplusViewMore.projectName}
					// value="BNF IC"
					// placeholder="Auto Fetch"
					disabled
				/>
			</Modal>
		);
	}
}

export default ViewSurplusMore;
