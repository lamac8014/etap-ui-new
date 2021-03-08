import React, { Component } from "react";
import FormContainer from "../../common/forms/FormContainer";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listAssignedStructureMetaData, transformAssignedStructureList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/DataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AssignStructureViewMore from "../../containers/assignStructure/assignStructureViewMore";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
class ViewAssignStructure extends Component {
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
    this.props.assignStructureList();
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
    return (
        <PageContainer>
          <SimpleCard>
          {this.props.assignStructure.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.assignStructure.message}
          />
        )}
        <AssignStructureViewMore showAddComponentModal={this.props.assignStructure.showAssignStructureMoreModal} />
        
          {this.props.assignStructure.assignStructureList && (
            <CustomDataTable
              metaData={listAssignedStructureMetaData(
                (structureID, projectID) => { this.props.handleComponentCheck(structureID, projectID) },
                (id) => this.props.handleMore(id),
              )}
              // bodyData={transformAssignedStructureList(
              //   this.filteredItems(this.props.assignStructure.assignStructureList)
              // )}
              bodyData={[{
                structureName:"Sample Structure",
                structureCode:"Sample code",
                componentsCount:"5",
                totalWeight:"100",
                drawingNumber:"9",
                currentStatus:"success",
                id:"1"
              }]}
              progressPending={this.props.assignStructure.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.assignStructure.assignStructureList &&
                this.filteredItems(this.props.assignStructure.assignStructureList).length
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
  
          </SimpleCard>
        </PageContainer>
     
    );
  }
}

export default ViewAssignStructure;
