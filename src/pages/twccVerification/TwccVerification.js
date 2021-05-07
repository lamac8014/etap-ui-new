import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreScrap from "../../containers/scrap/viewMoreScrap";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import ViewMoretwccVerification from "../../containers/twccVerification/twccVerificationMore";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import { transformDropDownData } from "../../utils/dataTransformer";

class ViewtwccVerification extends Component {
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
		this.props.getProjectCodeList();
	}

	render() {
		let tableData = [
			{
				structureName: "Launching Griders",
				structureCode: "111",
				numberOfComponents: "",
			},
			{
				structureName: "Launching Griders",
				structureCode: "123",
				numberOfComponents: "",
			},
			{
				structureName: "Trestles",
				structureCode: "124",
				numberOfComponents: "",
			},
		];
		return (
			<PageContainer>
				<SimpleCard>
					<ViewMoretwccVerification {...this.props} />
					<SearchableDropDown
						size="col-md-4"
						label="Site"
						name="Site"
						labelSize="col-sm-3 pr-0"
						fieldSize="col-sm-9 pl-0"
						selectOptions={transformDropDownData(
							this.props.physicalVerification.projectList,
							"id",
							"name"
						)}
						onChange={(obj) => this.props.handleChangeProjectName(obj)}
						value={this.props.physicalVerification.projectName}
					/>
					{/* {this.props.users.scrapList && ( */}
					<DataTable
						metaData={listUsersMetaData(this.props.setSelectedItems)}
						bodyData={
							this.props.physicalVerification.physicalVerificationDetails
						}
					/>
					{/* )} */}
					<ButtonRow>
						<Button
							btnText="Save"
							type="success"
							onClick={this.props.showSaveModal}
							disabled={
								this.props.physicalVerification.selectedItems.length > 0
									? false
									: true
							}
							gradient
						/>
						<Button
							btnText="Cancel"
							type="danger"
							onClick={() => {}}
							gradient
						/>
					</ButtonRow>
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewtwccVerification;
