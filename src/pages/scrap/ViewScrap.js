import React, { Component } from "react";

import { listUsersMetaData, transformUsersList } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewScrap extends Component {
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
      let tableData=[{dcNo:"",structureName:"Launching Griders",structureCode:"111",numberOfComponents:""},
                     {dcNo:"",structureName:"Launching Griders",structureCode:"123",numberOfComponents:""},
                     {dcNo:"",structureName:"Trestles",structureCode:"124",numberOfComponents:""}
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

export default ViewScrap;
