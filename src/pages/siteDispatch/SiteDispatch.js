import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";

import Loader from "../../common/Loader";
import { siteDispatchMetaDatatext ,sortData} from "./utils";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomDataTable from "../../common/DataTable";
// import UpdateSiteDispatchModal from "./UpdateSiteDispatchModal";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreModal from "./ViewMoreModal";
import { sortByFieldName } from "../../utils/common";
import { sortDataByDate } from "../../utils/common";

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
            <ViewMoreModal {...this.props} />
            {this.props.siteDispatch.siteDispatchDetails && (
              <CustomDataTable
                metaData={siteDispatchMetaDatatext(
                  (id) => {
                    this.props.openViewMoreModal(id);
                  },
                  (id1, id2, count, name, code) => {
                    this.props.redirectToComponentPage(
                      id1,
                      id2,
                      count,
                      name,
                      code
                    );
                  }
                )}
                bodyData={sortByFieldName,sortDataByDate(sortData(
                  this.props.siteDispatch.siteDispatchDetails,
                  "dcNumber")
                )}
                // bodyData={[
                // 	{
                // 		mrNo: "1",
                // 		dispatchNo: "3",
                // 		structId: "sample",
                // 		structureName: "sample",
                // 		createdDateTime: "sample time",
                // 	},
                // ]}
              />
            )}
          </SimpleCard>
        </PageContainer>
      </>
    );
  }
}

export default SiteDispatch;
