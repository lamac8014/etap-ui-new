import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import TableFilter from "../../common/TableFilter";
import Loader from "../../common/Loader";
import { twccDispatchMetaData } from "./utils";
import CustomDataTable from "../../common/CustomDataTable";
import Popup from "../../common/forms/Popup";
import TwccDispatchViewMore from "../../container/createDispatch/twccDispatchViewMore";

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
          if (item[key] && item[key].toString().toLowerCase().includes(this.state.filterText.toLowerCase())) {
            return true;
          }
        }
      })
    }
  };

  

  render() {
    // let dataBind=[{mrNo:"123",structureName:"arun",projectId:"321",projectId:"456",status:"Done"}];
    return (
      <>
        <ContentLoader>
          {this.props.createDispatch.isLoading && <Loader />}
          {this.props.createDispatch.message && (
            <Popup
              type={this.props.createDispatch.isSuccess ? "success" : "error"}
              message={this.props.createDispatch.message}
              onClose={this.props.resetMessage}
            />
          )}
          <TwccDispatchViewMore showAddComponentModal={this.props.createDispatch.showTwccDispatchMoreModal} />
          <FormContainer formTitle={"Dispatch"}>
            {this.props.createDispatch.siteReqDetails && (
              <CustomDataTable
                metaData={twccDispatchMetaData(
                  (structureID, projectID) => { this.props.redirectToDispatchStructure(structureID, projectID) },
                  //this.props.redirectToDispatchStructure,
                  (id) => this.props.handleMore(id),
                )}
                bodyData={this.filteredItems(
                  this.props.createDispatch.siteReqDetails.reverse()
                )}
                progressPending={this.props.createDispatch.isLoading}
                pagination={true}
                paginationTotalRows={
                  this.props.createDispatch.siteReqDetails &&
                  this.props.createDispatch.siteReqDetails.length
                }
                paginationPerPage={5}
                noHeader={true}
                subHeader
                subHeaderComponent={
                  <TableFilter
                    placeholder="Search By Structure"
                    size="mr-auto col-md-6"
                    onFilter={(e) => {
                      e.target.value === "" &&
                        this.setState({
                          resetPaginationToggle: !this.state
                            .resetPaginationToggle,
                        });
                      this.setState({ filterText: e.target.value });
                    }}
                    filterText={this.state.filterText}
                  />
                }
              />
            )}
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default CreateDispatch;
