import React, { Component } from "react";
import Loader from "../../common/Loader";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import Radio from "../../common/forms/Radio";
import { transformVendorData } from "./utils";

class ViewMoretwccModification extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.twcc.vendorCodeList.length === 0 &&
			this.props.getVendorCodeList();
	}

	disableSaveButton = () => {
		if (this.props.twcc.isSite) {
			return false;
		} else if (this.props.twcc.isVendor && this.props.twcc.subContId !== 0) {
			return false;
		} else {
			return true;
		}
	};

	render() {
		return (
			<Modal
				title={`${this.props.twcc.currentStructure.structrueName} : ${this.props.twcc.currentStructure.dcNumber}`}
				showModal={this.props.showScrapViewMoreModel}
				handleClose={this.props.closeEditModal}
				handleSave={this.props.updateComponenthistory}
				size="s"
				isShowFooter={true}
				disableSave={this.disableSaveButton()}
			>
				{console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />}
				<SimpleRow>
					<Col6 size="col-md-12">
						<span>
							<label className="mb-0">Assign To : </label>
							<br />
							<div className="d-flex justify-content-around">
								<Radio
									color="primary"
									label="Site"
									id="1"
									name="twccRadio"
									onChange={(e) => this.props.setIsSite(this.props.twcc.isSite)}
									checked={this.props.twcc.isSite}
								/>
								<Radio
									color="primary"
									label="Vendor"
									id="2"
									name="twccRadio"
									onChange={(e) =>
										this.props.setIsVendor(this.props.twcc.isVendor)
									}
									checked={this.props.twcc.isVendor}
								/>
							</div>
						</span>
					</Col6>
				</SimpleRow>
				{this.props.twcc.isVendor && (
					<SimpleRow>
						<Col6 size="col-md-12">
							<span>
								<label className="mb-0">Choose vendor : </label>
								<br />
								<SearchableDropDown
									size="col-md-12"
									name="Vendor"
									fieldSize="col-sm-12 px-0"
									selectOptions={transformVendorData(
										this.props.twcc.vendorCodeList
									)}
									onChange={(obj) => this.props.setVendorVode(obj)}
								/>
							</span>
						</Col6>
					</SimpleRow>
				)}
			</Modal>
		);
	}
}

export default ViewMoretwccModification;
