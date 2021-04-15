import React, { Component } from "react";
import { componentMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ModifyComponentsModal from "./ModifyComponentsModal";

class ViewAssignComponent extends Component {
	componentDidMount() {
		let dispStructId = window.atob(this.props.match.params.dispStructId);
		let structName = window.atob(this.props.match.params.structName);
		let structCode = window.atob(this.props.match.params.structCode);
		this.props.getComponentData(dispStructId, structName, structCode);
	}

	render() {
		return (
			// <ContentLoader>
			<PageContainer>
				<SimpleCard
					title={`${this.props.cmpc.structName} : ${this.props.cmpc.structCode}`}
				>
					{/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
					<ModifyComponentsModal {...this.props} />
					{/* {this.props.assignStructure.assignComponentList.components && ( */}
					<CustomDataTable
						metaData={componentMetaData((id) => this.props.handleEdit(id))}
						bodyData={this.props.cmpc.componentData}
					/>

					{/* } */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewAssignComponent;
