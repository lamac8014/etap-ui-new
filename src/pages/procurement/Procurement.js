import React, { Component } from "react";
// import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import Loader from "../../common/Loader";
import { siteDispatchMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import AssignVendorModal from "./AssignVendorModal";
import SimpleCard from "../../common/cards/SimpleCard";
import PageContainer from "../../common/forms/PageContainer";
import { sortByFieldName } from "../../utils/common";

class Procurement extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSiteDispatchDetails();
  }

  render() {
    return (
      <>
        <PageContainer>
          <SimpleCard>
            {this.props.procurement.isLoading && <Loader />}
            {/* {this.props.procurement.message && (
            <Popup
              type={this.props.procurement.isSuccess ? "success" : "danger"}
              message={this.props.procurement.message}
              onClose={this.props.resetMessage}
            />
          )} */}
            <AssignVendorModal
              {...this.props}
              showModal={this.props.procurement.showEditModalFlag}
            />

            {this.props.procurement.siteDispatchDetails && (
              <CustomDataTable
                metaData={siteDispatchMetaData(
                  this.props.showAssignVendorModal
                )}
                bodyData={sortByFieldName(
                  this.props.procurement.siteDispatchDetails,
                  "dispatchNo"
                )}
              />
            )}
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default Procurement;
