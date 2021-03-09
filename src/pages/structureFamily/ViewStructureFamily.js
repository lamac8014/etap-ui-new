import React, { Component } from "react";
import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/DataTable";
import AddStructureFamily from "../../containers/structureFamily/addStructureFamily";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import {
  structureFamilyMetaData,
  
} from "./utils";

class ViewStructureFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showStructureFamilyDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
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
          {this.props.structureFamily.isStructureFamilyMsg && (
            <CustomAlert
              variant="success"
              message={this.props.structureFamily.message}
            />
          )}
          <AddStructureFamily showAddStructureFamilyModal={this.props.structureFamily.showAddStructureFamilyModal} />
          {this.props.structureFamily.structureFamilyTypeList && (
            <CustomDataTable
              metaData={structureFamilyMetaData(
                // (id) => this.setState({ activeId: id, showStructureFamilyDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              // bodyData={structureFamilyBodyData(
              //   this.filteredItems(this.props.structureFamily.structureFamilyTypeList)
              // )}
              bodyData={[
                {
                  structureFamilyType: "Sample Structure",
                  status: "Sample code",
                  
                },
              ]}
            />
          )}

        </SimpleCard>
      </PageContainer>

    );
  }
}

export default ViewStructureFamily;
