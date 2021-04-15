import React, { Component } from "react";
// import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import Loader from "../../common/Loader";
import { cmpcViewPageMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
// import AssignVendorModal from "./AssignVendorModal";
import SimpleCard from "../../common/cards/SimpleCard";
import PageContainer from "../../common/forms/PageContainer";

class CmpcViewPage extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getDispatchStructureData();
	}

	render() {
		return (
			<>
				<PageContainer>
					<SimpleCard>
						{this.props.cmpcAdd.isLoading && <Loader />}
						{/* {this.props.procurement.message && (
            <Popup
              type={this.props.procurement.isSuccess ? "success" : "danger"}
              message={this.props.procurement.message}
              onClose={this.props.resetMessage}
            />
          )} */}
						{/* <AssignVendorModal
              {...this.props}
              showModal={this.props.procurement.showEditModalFlag}
            /> */}
						{this.props.cmpcAdd.dispatchStructure && (
							<CustomDataTable
								metaData={cmpcViewPageMetaData((id, dispStrId) =>
									this.props.redirectToAddComponents(id, dispStrId)
								)}
								bodyData={this.props.cmpcAdd.dispatchStructure}
							/>
						)}
					</SimpleCard>
				</PageContainer>
			</>
		);
	}
}

export default CmpcViewPage;
