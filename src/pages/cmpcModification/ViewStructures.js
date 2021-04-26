import React, { Component } from "react";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { structureMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

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
					<CustomDataTable
						metaData={structureMetaData(
							(dispStrId, dispReqId, projStrId, name, code, proj) => {
								this.props.redirectToComponentPage(
									dispStrId,
									dispReqId,
									projStrId,
									name,
									code,
									proj
								);
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
