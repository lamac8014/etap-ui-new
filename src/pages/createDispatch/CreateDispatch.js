import React, { Component } from "react";
import { twccDispatchMetaData } from "./utils";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/DataTable";
import TwccDispatchViewMore from "../../containers/createDispatch/twccDispatchViewMore";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

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

  filteredItems = (data) => {
    if (data) {
      return data.filter((item) => {
        for (let key in item) {
          if (
            item[key] &&
            item[key]
              .toString()
              .toLowerCase()
              .includes(this.state.filterText.toLowerCase())
          ) {
            return true;
          }
        }
      });
    }
  };

  render() {
    let dataBind = [
      {
        mrNo: "123",
        structureName: "arun",
        requiredBy: "321",
        raisedBy: "456",
        status: "Done",
      },
    ];
    return (
      <PageContainer>
        <SimpleCard>
          {this.props.createDispatch.message && (
            <CustomAlert
              type={this.props.createDispatch.isSuccess ? "success" : "error"}
              message={this.props.createDispatch.message}
              onClose={this.props.resetMessage}
            />
          )}
          <TwccDispatchViewMore
            showAddComponentModal={
              this.props.createDispatch.showTwccDispatchMoreModal
            }
          />

          {this.props.createDispatch.siteReqDetails && (
            <CustomDataTable
              metaData={twccDispatchMetaData(
                (structureID, projectID) => {
                  this.props.redirectToDispatchStructure(
                    structureID,
                    projectID
                  );
                },
                //this.props.redirectToDispatchStructure,
                (id) => this.props.handleMore(id)
              )}
              bodyData={this.props.createDispatch.siteReqDetails}
              // bodyData={dataBind}
            />
          )}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default CreateDispatch;
