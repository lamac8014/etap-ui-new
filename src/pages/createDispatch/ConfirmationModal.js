import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import DataTable from "../../common/DataTable";
import FormRow from "../../common/forms/FormRow";
import { dispatchTableMetaData, transformDispatchTableData } from "./utils";

class ConfirmationModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title="Confirm Dispatch"
				showModal={this.props.createDispatch.showConfirmationModal}
				handleClose={this.props.hideConfirmationModal}
				handleSave={this.props.createDispatchApi}
				size="lg"
				isShowFooter={true}
			>
				{console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />}

				<h6>The following structures will be dispatched : </h6>
				<FormRow>
					<DataTable
						metaData={dispatchTableMetaData((row) =>
							this.props.removeFromDispatchStructures(row)
						)}
						bodyData={transformDispatchTableData(
							this.props.createDispatch.dispatchStructures
						)}
					/>
				</FormRow>
			</Modal>
		);
	}
}

export default ConfirmationModal;
