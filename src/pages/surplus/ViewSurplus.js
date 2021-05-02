import React, { Component } from "react";

import { surplusApproveMetaData, transformUsersList } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ConfirmModal from "../../common/forms/ConfirmModal";

class ViewSurplus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeId: null,
			showDeleteModal: false,
			showApproveModal: false,
			filterText: "",
			resetPaginationToggle: false,
		};
	}
	componentDidMount() {
		this.props.surplusList();
	}

	render() {
		return (
			<PageContainer>
				<SimpleCard>
					{/* {this.props.users.usersList && ( */}
					{this.state.showApproveModal && (
						<ConfirmModal
							closeAction={() =>
								this.setState({ showApproveModal: false, activeId: null })
							}
							title="Approve Surplus"
							deleteAction={() => {
								this.props.handleApprove(this.state.activeId);
								this.setState({ showApproveModal: false, activeId: null });
							}}
							frontText="Are you sure?"
							cancelText="Canceled!"
						/>
					)}
					{/* )} */}
					{/* {this.props.requirement.requirementsList && ( */}
					{this.state.showDeleteModal && (
						<ConfirmModal
							closeAction={() =>
								this.setState({ showDeleteModal: false, activeId: null })
							}
							title="Reject Surplus"
							deleteAction={() => {
								this.props.handleReject(this.state.activeId);
								this.setState({ showDeleteModal: false, activeId: null });
							}}
							frontText="Are you sure?"
							cancelText="Cancelled!"
						/>
					)}
					<DataTable
						metaData={surplusApproveMetaData(
							// (id) => this.setState({ activeId: id, showDeleteModal: true }),
							(id) => this.setState({ activeId: id, showApproveModal: true }),
							(id) => this.setState({ activeId: id, showDeleteModal: true }),
							() => {}
						)}
						bodyData={this.props.surplus.surplusList}
					/>
					{/* )} */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewSurplus;
