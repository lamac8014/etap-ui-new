import React, { Component } from "react";

import { listUsersMetaData, transformUsersList } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewSurplus extends Component {
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
    //this.props.usersList();
  }


  render() {
      let tableData=[{structureName:"Launching Griders",structureCode:"001",numberOfComponents:""},
                     {structureName:"Trestles",structureCode:"002",numberOfComponents:""},
                     {structureName:"Launching Griders",structureCode:"003",numberOfComponents:""}
                    ]
    return (
      <PageContainer>
        <SimpleCard>
          
          {/* {this.props.users.usersList && ( */}
            <DataTable
              metaData={listUsersMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id)
              )}
              bodyData={tableData}
            />
          {/* )} */}
          
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewSurplus;
