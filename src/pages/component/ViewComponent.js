import React, { Component } from "react";
import CustomAlert from "../../common/forms/customAlert";
import { listComponentTypeMetaData, transformComponentList } from "./utils";
import CreateComponent from "../../containers/component/addComponent";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ConfirmModal from "../../common/forms/ConfirmModal";
import { sortDataByDate } from "../../utils/common";

class ViewComponent extends Component {
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
    this.props.componentList();
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
    return (
      <PageContainer>
        <SimpleCard>
          {this.props.component.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.component.message}
            />
          )}
          <CreateComponent
            showAddComponentModal={this.props.component.showAddComponentModal}
          />
          {/* {this.props.component.componentTypeList && ( */}
          <CustomDataTable
            metaData={listComponentTypeMetaData(
              (id) => this.setState({ activeId: id, showDeleteModal: true }),
              (id) => this.props.handleEdit(id)
            )}
            bodyData={sortDataByDate(
              transformComponentList(this.props.component.componentTypeList)
            )}
            // bodyData={[{ id: 1, componentType: "COMP1", status: "Active" }]}
            showButton={true}
            btnText="Add Component Type"
            onClick={this.props.showAddComponentModal}
          />
          {/* )} */}
          {this.state.showDeleteModal && (
            <ConfirmModal
              closeAction={() =>
                this.setState({ showDeleteModal: false, activeId: null })
              }
              title="Delete User"
              deleteAction={() => {
                this.props.handleConfirmDelete(this.state.activeId);
                this.setState({ showDeleteModal: false, activeId: null });
              }}
              frontText="Are you sure you want to delete the component?"
              confirmText="Component Deleted"
              cancelText="Cancelled!"
            />
          )}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewComponent;
