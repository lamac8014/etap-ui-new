import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listWBSMetaDataView, transformWBSListView } from "./utils";
import Button from "../../common/forms/Button";
import CreateComponent from "../../container/component/addComponent";
import CustomDataTable from "../../common/CustomDataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

class ViewWBS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.wbsList();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.wbs.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.wbs.message}
          />
        )}
        
        <FormContainer formTitle={"Component Type List"}>
          {this.props.wbs.wbsList && (
            <CustomDataTable
              metaData={listWBSMetaDataView(
              )}
              bodyData={transformWBSListView(
                this.props.wbs.wbsList
              )}
              progressPending={this.props.wbs.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.wbs.wbsList &&
                this.props.wbs.wbsList.length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By ID"
                    fieldSize="float-left col-sm-10"
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
                </>
              }
            />
          )}
          
            
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewWBS;
