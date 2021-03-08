import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { siteDispatchMetaDatatext } from "./utils";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomDataTable from "../../common/DataTable";
import UpdateSiteDispatchModal from "./UpdateSiteDispatchModal";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class SiteDispatch extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSiteDispatchDetails();
  }

  showModal = (id) => {
    if (this.props.siteDispatch.showEditModalFlag) {
      this.props.setActiveItem(id);
      this.props.showUpdateSiteDispatchModal(id);
    } else {
      this.props.closeUpdateSiteDispatchModal();
    }
  };

  render() {
    return (
      <>
        <PageContainer>
          <SimpleCard>
          {this.props.siteDispatch.isLoading && <Loader />}
          {/* {this.props.siteDispatch.message && (
            <CustomAlert
              variant={this.props.siteDispatch.isSuccess ? "success" : "danger"}
              message={this.props.siteDispatch.message}
            />
          )} */}
          <UpdateSiteDispatchModal
            {...this.props}
            showModal={this.props.siteDispatch.showEditModalFlag}
          />
            {this.props.siteDispatch.siteDispatchDetails && (
              <CustomDataTable
                metaData={siteDispatchMetaDatatext(
                  this.props.showUpdateSiteDispatchModal
                )}
                // bodyData={this.props.siteDispatch.siteDispatchDetails}
                bodyData={[{
                  mrNo:"1",
                  dispatchNo:"3",
                  structId:"sample",
                  structureName:"sample",
                  createdDateTime:"sample time"
                }]}
                progressPending={this.props.siteDispatch.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.siteDispatch.siteDispatchDetails &&
                  this.props.siteDispatch.siteDispatchDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
              />
            )}
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default SiteDispatch;
