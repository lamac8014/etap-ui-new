import React, { Component } from "react";
// import CustomAlert from "../../common/forms/customAlert";
import { listProjectMetaData, transformProjectList } from "./utils";
import AddProjModal from "./AddProject";
import CustomDataTable from "../../common/DataTable";
// import TableFilter from "../../common/TableFilter";
// import Loader from "../../common/Loader";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewProject extends Component {
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
    this.props.projectList();
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
    return (
      <PageContainer>
        <SimpleCard>
          {/* {this.props.proj.isLoading && <Loader />} */}
          {/* {this.props.proj.isProjMsg && (
            <CustomAlert variant="success" message={this.props.proj.message} />
          )} */}
          {/* <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Delete Project"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this Project?
            </h6>
          </ConfirmModal> */}
          <AddProjModal {...this.props} />
          {/* {this.props.proj.projectList && ( */}
          <CustomDataTable
            metaData={listProjectMetaData(
              (id) => this.setState({ activeId: id, showDeleteModal: true }),
              (id) => this.props.handleEdit(id)
            )}
            bodyData={transformProjectList(this.props.proj.projectList)}
            showButton={true}
            btnText="Create New Project"
            onClick={this.props.showAddProjModal}
          />
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewProject;
