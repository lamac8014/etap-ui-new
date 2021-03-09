import React, { Component } from "react";
import CustomAlert from "../../common/forms/customAlert";
import { listStructureMetaData, transformStructureList } from "./utils";
import CustomDataTable from "../../common/DataTable";

import AddStructure from "../../containers/structure/addStructure";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewStructure extends Component {
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
    this.props.structureList();
    this.props.structureFamilyList();
  }



  filteredItems = (data) => {

    if (data) {
      console.log(data);
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
          {/* {this.props.structure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.structure.message}
            />
          )} */}
          <AddStructure
            showAddComponentModal={this.props.structure.showAddStructureModal}
          />
          <CustomDataTable
            metaData={listStructureMetaData(
              (id) => this.props.handleDelete(id),
              (id) => this.props.handleEdit(id)
            )}
            bodyData={transformStructureList(
              this.filteredItems(this.props.structure.structureList),
              this.props.structure.structureFamilyList
            )}
            showButton={true}
            btnText="Create New Structure"
            onClick={this.props.showAddStructureModal}

          />
        </SimpleCard>
      </PageContainer>



    );
  }
}

export default ViewStructure;
