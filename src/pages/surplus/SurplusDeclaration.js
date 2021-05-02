import React, { Component } from "react";

import { listUsersMetaData, transformUsersList } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewSurplusMore from "./ViewSurplusMore";
import SurplusDeclarationModal from "./SurplusDeclarationModal";

class SurplusDeclaration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeId: null,
			showDeleteModal: false,
			filterText: "",
			resetPaginationToggle: false,
		};
	}
	componentDidMount() {
		this.props.getProjectStructureData();
	}

	render() {
		return (
			<PageContainer>
				<ViewSurplusMore {...this.props} />
				<SurplusDeclarationModal {...this.props} />
				<SimpleCard>
					{/* {this.props.users.usersList && ( */}
					<DataTable
						metaData={listUsersMetaData(
							// (id) => this.setState({ activeId: id, showDeleteModal: true }),
							(id) => this.props.openViewMoreModal(id),
							(id) => this.props.openEditModal(id)
						)}
						bodyData={this.props.surplus.structureList}
					/>
					{/* )} */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default SurplusDeclaration;
