import React, { Component } from "react";
import { businessUnitBodyData, businessUnitMetaData } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/DataTable";
import Col6 from "../../common/forms/Col6";

import AddBusinessUnit from "../../containers/businessUnit/addBusinessUnit";
import EditBusinessUnit from "../../containers/businessUnit/editBusinessUnit";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SearchableDropdown from "../../common/forms/SearchableDropdown";

class ViewBusinessUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showBusinessUnitDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    console.log(this.props.businessUnitList());
    this.props.businessUnitList();
  }
  // filteredItems = (data) => {
  //   return (
  //     data &&
  //     data.filter(
  //       (item) =>
  //         item.name &&
  //         item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
  //     )
  //   );
  // };

  render() {
    return (
      <PageContainer>
        <SimpleCard>
          {/* {this.props.businessUnit.isBusinessUnitMsg && (
          <CustomAlert
            variant="success"
            message={this.props.businessUnit.message}
          />
        )} */}
          <AddBusinessUnit
            showAddBusinessUnitModal={
              this.props.businessUnit.showAddBusinessUnitModal
            }
          />
          <EditBusinessUnit
            showEditBusinessUnitModal={
              this.props.businessUnit.showEditBusinessUnitModal
            }
          />
          {this.props.businessUnit.businessUnitTypeList && (
            <CustomDataTable
              metaData={businessUnitMetaData(
                (id) =>
                  this.setState({
                    activeId: id,
                    showBusinessUnitDeleteModal: true,
                  }),
                (id) => this.props.handleEdit(id)
              )}
              bodyData={businessUnitBodyData(
                this.props.businessUnit.businessUnitTypeList
              )}
              // bodyData={[
              //   { businessUnit: "sample", icName: "HCIC" },
              //   { businessUnit: "sample two", icName: "HCIC" },
              // ]}
              showButton={true}
              btnText="Add Business Unit"
              onClick={this.props.showAddBusinessUnitModal}
            />
          )}
          {/* <ConfirmModal
            showModal={this.state.showBusinessUnitDeleteModal}
            handleClose={() =>
              this.setState({
                showBusinessUnitDeleteModal: false,
                activeId: null,
              })
            }
            title="Delete Business Unit"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({
                showBusinessUnitDeleteModal: false,
                activeId: null,
              });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this User?
            </h6>
          </ConfirmModal> */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewBusinessUnit;
