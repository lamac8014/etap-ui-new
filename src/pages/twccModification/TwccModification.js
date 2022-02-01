import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoretwccModification from "../../containers/twccModification/twccModificationmore";
import ViewMoreModal from "./ViewMoreModal";

class ViewtwccModification extends Component {
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
		this.props.getTwccModificationData();
	}

	render() {
		return (
			<PageContainer>
				<SimpleCard>
					<ViewMoretwccModification
						showScrapViewMoreModel={this.props.twcc.showEditModal}
					/>
					<ViewMoreModal {...this.props}/>

					{/* {this.props.users.scrapList && ( */}
					<DataTable
						metaData={listUsersMetaData(
							// (id) => this.setState({ activeId: id, showDeleteModal: true }),
							(id) => {
								this.props.showEditModal(id);
							},
							(id) => {
								this.props.showViewMoreModal(id)
							},
							(dispStrId,  name, code, proj ) => {
								this.props.redirectToComponentPage(
									dispStrId,
									name,
									code,
									proj,
								);
							},
						)}
						bodyData={this.props.twcc.twccModificationData}
					/>
					{/* )} */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewtwccModification;
