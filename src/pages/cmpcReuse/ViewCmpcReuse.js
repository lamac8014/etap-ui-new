import React, { Component } from "react";
import { listUsersMetaData, addIdToData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import Radio from "../../common/forms/Radio";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import CustomAlert from "../../common/forms/customAlert";
import ViewMoreModal from "./ViewMoreModal";

class ViewCmpcReuse extends Component {
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
		this.props.cmpcList();
	}

	render() {
		return (
			<PageContainer>
				{/* {this.props.cmpcReuse.message && (
          <CustomAlert
            type={this.props.cmpcReuse.isSuccess ? "success" : "error"}
            message={this.props.cmpcReuse.message}
            onClose={this.props.resetMessage}
          />
        )} */}
				<ViewMoreModal {...this.props} />
				<SimpleCard>
					{/* {this.props.users.scrapList && ( */}
					<DataTable
						keyField="dispatchRequirementId"
						metaData={listUsersMetaData(
							(id) => {
								this.props.setSelectedStructures(id);
							},
							(structure) => {
								this.props.showViewMoreModal(structure);
							}
						)}
						// bodyData={this.props.cmpcReuse.conditionAssessmentDetails}
						bodyData={this.props.cmpcReuse.transformedCmpcList}
					/>
					{/* )} */}
					<SimpleRow className="d-flex justify-content-center">
						<Col6 size="col-md-3">
							<Radio
								color="success"
								label="With Modification"
								id="1"
								value="withMod"
								name="cmpcRadio"
								onChange={(e) =>
									this.props.handleChangeModification(e.target.value)
								}
							/>
						</Col6>

						<Col6 size="col-md-3">
							<Radio
								color="success"
								label="Without Modification"
								id="2"
								value="withoutMod"
								name="cmpcRadio"
								onChange={(e) =>
									this.props.handleChangeModification(e.target.value)
								}
							/>
						</Col6>

						<Col6 size="col-md-3">
							<Radio
								color="success"
								label="Reject"
								id="3"
								value="reject"
								name="cmpcRadio"
								onChange={(e) =>
									this.props.handleChangeModification(e.target.value)
								}
							/>
						</Col6>
					</SimpleRow>
					<ButtonRow>
						<Button
							btnText="Submit"
							onClick={() => {
								this.props.updateStructure();
							}}
							type="success"
							gradient
						/>
						<Button
							btnText="Discard"
							onClick={() => {}}
							type="danger"
							gradient
						/>
					</ButtonRow>
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewCmpcReuse;
