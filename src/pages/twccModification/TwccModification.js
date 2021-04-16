import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoretwccModification from "../../containers/twccModification/twccModificationmore";

class ViewtwccModification extends Component {
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
    //this.props.scrapList();
  }


  render() {
    let tableData = [{ daNo: "1", structureName: "Launching Griders", structureCode: "111", numberOfComponents: "" },
    { daNo: "2", structureName: "Launching Griders", structureCode: "123", numberOfComponents: "" },
    { daNo: "3", structureName: "Trestles", structureCode: "124", numberOfComponents: "" }
    ]
    return (

      <PageContainer>

        <SimpleCard>
          <ViewMoretwccModification showScrapViewMoreModel={this.props.scrap.showScrapViewMoreModel} />

          {/* {this.props.users.scrapList && ( */}
          <DataTable
            metaData={listUsersMetaData(
              // (id) => this.setState({ activeId: id, showDeleteModal: true }),
              (id) => this.props.handleViewMore(id),
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

export default ViewtwccModification;
