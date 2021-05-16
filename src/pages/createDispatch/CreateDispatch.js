import React, { Component } from "react";
import { twccDispatchMetaData } from "./utils";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/DataTable";
import TwccDispatchViewMore from "../../containers/createDispatch/twccDispatchViewMore";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import { sortDataByDate } from "../../utils/common";

class CreateDispatch extends Component {
  constructor() {
    super();
    this.state = {
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getSiteReqDetails();
  }

  render() {
    return (
      <PageContainer>
        <SimpleCard>
          {/* {this.props.createDispatch.message && (
            <CustomAlert
              type={this.props.createDispatch.isSuccess ? "success" : "error"}
              message={this.props.createDispatch.message}
              onClose={this.props.resetMessage}
            />
          )} */}
          <TwccDispatchViewMore
            showAddComponentModal={
              this.props.createDispatch.showTwccDispatchMoreModal
            }
          />

          {this.props.createDispatch.siteReqDetails && (
            <CustomDataTable
              metaData={twccDispatchMetaData(
                (structureID, siteReqId) => {
                  this.props.redirectToDispatchStructure(
                    structureID,
                    siteReqId
                  );
                  this.props.saveRequirementInfo(structureID, siteReqId);
                },
                (structId, siteReqId) =>
                  this.props.handleMore(structId, siteReqId)
              )}
              bodyData={sortDataByDate(
                this.props.createDispatch.siteReqDetails
              )}
            />
          )}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default CreateDispatch;
