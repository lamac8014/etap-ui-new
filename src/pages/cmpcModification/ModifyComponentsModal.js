import React, { Component } from "react";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import TextArea from "../../common/forms/TextArea";

class ModifyComponentsModal extends Component {
	constructor(props) {
		super(props);
	}

	isNumbers = (value) => {
		const regex = /^\d+$/;
		return regex.test(value) ? true : false;
	};

	isAlphabets = (value) => {
		const regex = /^[A-Za-z]+$/;
		return regex.test(value) ? true : false;
	};

	render() {
		return (
			<Modal
				title="Modify Values"
				showModal={this.props.cmpc.showEditComponentModal}
				handleClose={this.props.closeEditComponentModal}
				handleSave={() => {
					this.props.modifyComponents();
				}}
				size="md"
				disableSave={
					this.props.cmpc.modifiedData.length === "" &&
					this.props.cmpc.modifiedData.breadth === "" &&
					this.props.cmpc.modifiedData.thickness === "" &&
					this.props.cmpc.modifiedData.weight === "" &&
					this.props.cmpc.modifiedData.height === "" &&
					this.props.cmpc.addPlate === ""
						? true
						: false
				}
				isShowFooter={true}
			>
				<SimpleRow>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">Length : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="length"
								id="length"
								value={this.props.cmpc.currentComp.leng}
								disabled={true}
							/>
						</span>
					</Col6>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">New Length : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="newLength"
								id="newLength"
								value={this.props.cmpc.modifiedData.length}
								onChange={(event) => {
									this.props.handleChangeLength(event.target.value);
								}}
							/>
						</span>
					</Col6>
				</SimpleRow>

				<SimpleRow>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">Breadth : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="breadth"
								id="breadth"
								value={this.props.cmpc.currentComp.breath}
								disabled={true}
							/>
						</span>
					</Col6>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">New Breadth : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="newBreadth"
								id="newBreadth"
								value={this.props.cmpc.modifiedData.breadth}
								onChange={(event) => {
									this.props.handleChangeBreadth(event.target.value);
								}}
							/>
						</span>
					</Col6>
				</SimpleRow>
				<SimpleRow>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">Thickness : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="thickness"
								id="thickness"
								value={this.props.cmpc.currentComp.thickness}
								disabled={true}
							/>
						</span>
					</Col6>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">New Thickness : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="newthickness"
								id="newthickness"
								value={this.props.cmpc.modifiedData.width}
								onChange={(event) => {
									this.props.handleChangeWidth(event.target.value);
								}}
							/>
						</span>
					</Col6>
				</SimpleRow>
				<SimpleRow>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">Height : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="heigth"
								id="heigth"
								value={this.props.cmpc.currentComp.height}
								disabled={true}
							/>
						</span>
					</Col6>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">New Height : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="newHeight"
								id="newHeight"
								value={this.props.cmpc.modifiedData.height}
								onChange={(event) => {
									this.props.handleChangeHeight(event.target.value);
								}}
							/>
						</span>
					</Col6>
				</SimpleRow>
				<SimpleRow>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">Weight : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="weight"
								id="weight"
								value={this.props.cmpc.currentComp.weight}
								disabled={true}
							/>
						</span>
					</Col6>
					<Col6 size="col-md-6 ">
						<span>
							<label className="mb-0">New Weight : </label>
							<br />
							<TextInput
								size="col-md-12 px-0"
								fieldSize="col-md-12"
								name="newWeight"
								id="newWeight"
								value={this.props.cmpc.modifiedData.weight}
								onChange={(event) => {
									this.props.handleChangeWeight(event.target.value);
								}}
							/>
						</span>
					</Col6>
				</SimpleRow>
				<SimpleRow>
					<TextArea
						labelSize="col-lg-3"
						size="col-lg-12"
						label="Add Plate"
						name="addPlate"
						id="addPlate"
						onChange={(e) => this.props.handleChangeAddPlate(e.target.value)}
						// value={this.props.requirement.remarks}
						placeholder="Add plate"
					/>
				</SimpleRow>
			</Modal>
		);
	}
}

export default ModifyComponentsModal;
