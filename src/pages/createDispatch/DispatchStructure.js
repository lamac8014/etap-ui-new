import React, { Component } from "react";

import {
	dispatchStructureMetaData,
	twccdispatchStructureMetaData,
	lstVerifyStructureQtyMetaData,
	transformdispatchStructure,
	transformAttributeFilterValues,
} from "./utils";
import CustomDataTable from "../../common/DataTable";
import FormRow from "../../common/forms/FormRow";
import Button from "../../common/forms/Button";
// import Popup from "../../common/forms/Popup";
import TextInput from "../../common/forms/TextInput";
import ConfirmModal from "../../common/forms/ConfirmModal";
import Col6 from "../../common/forms/Col6";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomAlert from "../../common/forms/customAlert";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import DispatchStructureViewMore from "./DispatchStructureViewMore";
import ButtonRow from "../../common/forms/ButtonRow";
import GetQuantityModal from "./GetQuantityModal";
import ConfirmationModal from "./ConfirmationModal";

class DispatchStructure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			resetPaginationToggle: false,
			flag: false,
		};
	}

	// previous(data) {
	//   data.history.push("/etrack/dispatch/twccDispatch");
	// }

	componentDidMount = () => {
		let siteReqid = window.atob(this.props.match.params.siteReqId);
		let structid = window.atob(this.props.match.params.structId);
		this.props.onPageLoad(structid, siteReqid);
	};

	// componentWillUnmount() {
	// 	localStorage.removeItem("currentRequirementInfo");
	// }

	render() {
		const currentReqInfo = JSON.parse(
			localStorage.getItem("currentRequirementInfo")
		);
		return (
			<PageContainer>
				<SimpleCard>
					{this.props.createDispatch.message && (
						<CustomAlert
							type={this.props.createDispatch.isSuccess ? "success" : "error"}
							message={this.props.createDispatch.message}
							onClose={this.props.resetMessage}
						/>
					)}
					{this.props.createDispatch.dispatchError && (
						<CustomAlert
							type="error"
							message={this.props.createDispatch.dispatchErrMsg}
							onClose={() => this.props.setDispatchError(false, "")}
						/>
					)}
					{/* <ConfirmModal
            showModal={this.props.createDispatch.showModal}
            handleClose={() => this.props.hideConfirmModal()}
            title="Confirm Dispatch"
            handleConfirm={() => {
              this.props.createDispatchApi();
            }}
          > */}
					{/* <h6 className="text-danger">
              {this.props.createDispatch.modalMessage}?
            </h6>
          </ConfirmModal> */}

					{this.props.createDispatch.activeItem && (
						<>
							<SimpleRow>
								<TextInput
									size="col-md-4"
									label="MR No"
									fieldSize="col-md-8"
									labelSize="col-sm-4"
									value={currentReqInfo.mrNumber}
									disabled
								/>
								<TextInput
									size="col-md-4"
									label="Structure Name"
									fieldSize="col-md-8"
									labelSize="col-sm-4"
									value={currentReqInfo.structureName}
									disabled
								/>
								<TextInput
									size="col-md-4"
									label="Req Site"
									fieldSize="col-md-8"
									labelSize="col-sm-4"
									value={currentReqInfo.requestBy}
									disabled
								/>
							</SimpleRow>
							<SimpleRow>
								<TextInput
									size="col-md-4"
									label="Quantity"
									fieldSize="col-md-8"
									labelSize="col-sm-4"
									value={currentReqInfo.quantity}
									disabled
								/>
								<SearchableDropDown
									label="Search By Rel.Date"
									fieldSize="col-md-8"
									size="col-md-4"
									labelSize="col-sm-4"
									selectOptions={[
										{ label: "ONEMONTH", value: "ONEMONTH" },
										{ label: "THREEMONTHS", value: "THREEMONTHS" },
										{ label: "SIXMONTHS", value: "SIXMONTHS" },
									]}
									onChange={(obj) => this.props.handleChangeReleaseFilter(obj)}
									// value={this.props.createDispatch.activeItem.planStartdate}
								/>
								<SearchableDropDown
									label="Search By Attributes"
									fieldSize="col-md-8"
									size="col-md-4"
									labelSize="col-sm-4"
									onChange={(obj) =>
										this.props.handleChangeAttributeFilter(obj)
									}
									selectOptions={transformAttributeFilterValues(
										currentReqInfo.structureAttributes
									)}
									// value={this.props.createDispatch.activeItem.projectName}
								/>
							</SimpleRow>
						</>
					)}
					<hr />

					<DispatchStructureViewMore {...this.props} />
					<GetQuantityModal {...this.props} />
					<ConfirmationModal {...this.props} />
					{this.props.createDispatch.siteReqDetailsById && (
						<CustomDataTable
							metaData={twccdispatchStructureMetaData(
								(row) => {
									this.props.setSelectedStructures(row);
								},
								(structCode) => {
									this.props.showAttributeViewMore(structCode);
								}
							)}
							bodyData={this.props.createDispatch.transformedSiteReq}
							// bodyData={tempArr}
						/>
					)}
					<ButtonRow>
						<Button
							btnText="Reuse"
							gradient
							onClick={() => {
								// if (this.props.createDispatch.selectedItems.length === 0) {
								//   this.props.setDispatchError(
								//     true,
								//     "Select atleast one structure"
								//   );
								// } else {
								//   let allowReuse = this.props.createDispatch.selectedItems.filter(
								//     (item) => {
								//       return item.availProjectId === null;
								//     }
								//   );
								//   if (allowReuse.length === 0) {
								//     this.props.showConfirmModal(
								//       `Dispatch structure(s) for Reuse`
								//     );
								this.props.setStructuresForReuse(4);
								// } else {
								//   this.props.setDispatchError(
								//     true,
								//     "Structure(s) not eligible for Reuse"
								//   );
								// }
							}}
							// }}
							disabled={this.props.createDispatch.disableReuse}
						/>
						<Button
							btnText="Fabrication"
							gradient
							onClick={() => {
								this.props.setServiceTypeId(1);
								this.props.showGetQuantityModal();
								// if (this.props.createDispatch.selectedItems.length === 0) {
								//   this.props.setDispatchError(
								//     true,
								//     "Select atleast one structure"
								//   );
								// } else {
								//   this.props.showConfirmModal(
								//     `Dispatch structure(s) for Fabrication`
								//   );
								// }
							}}
							disabled={this.props.createDispatch.disableFabrication}
						/>
						<Button
							btnText="Outsourcing"
							gradient
							onClick={() => {
								// if (this.props.createDispatch.selectedItems.length === 0) {
								//   this.props.setDispatchError(
								//     true,
								//     "Select atleast one structure"
								//   );
								// } else {
								//   this.props.showConfirmModal(
								//     `Dispatch structure(s) for Outsourcing`
								//   );
								this.props.setServiceTypeId(2);
								// }
								this.props.showGetQuantityModal();
							}}
							disabled={this.props.createDispatch.disableOutSourcing}
						/>
					</ButtonRow>
					<br />
					<ButtonRow position="center">
						{/* <div style={{ textAlign: "center", marginRight: "300px" }}>
                <button className="btn btn-md btn-primary" onClick={(data) => this.previous(data)}>
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>
              </div> */}

						{/* <div style={{ textAlign: "center", marginRight: "50px" }}>
                <button className="btn btn-md btn-primary" onClick={(data) => this.previous(data)}>
                  SAVE
                  </button>
              </div> */}
						<Button
							type="success"
							gradient
							btnText="Dispatch"
							onClick={this.props.showConfirmationModal}
						/>
					</ButtonRow>
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default DispatchStructure;
