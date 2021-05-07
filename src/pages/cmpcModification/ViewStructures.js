import React, { Component } from "react";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { structureMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreModal from "./ViewMoreModal";

class ViewStructures extends Component {
	componentDidMount() {
		this.props.getStructureTableData();
	}
	render() {
		return (
			<PageContainer>
				<SimpleCard>
					{/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}

					{/* {this.props.cmpc.structureData && ( */}
					<ViewMoreModal {...this.props} />
					<CustomDataTable
						metaData={structureMetaData(
							(dispStrId, dispReqId, projStrId, name, code, proj, dcNumber) => {
								this.props.redirectToComponentPage(
									dispStrId,
									dispReqId,
									projStrId,
									name,
									code,
									proj,
									dcNumber
								);
							},
							(id) => {
								this.props.openViewMoreModal(id);
							}
						)}
						bodyData={this.props.cmpc.structureData}
					/>
					{/* )} */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewStructures;
