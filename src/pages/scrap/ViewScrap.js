import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreScrap from "../../containers/scrap/viewMoreScrap";
import AddScrapModal from "./AddScrapModal";

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
    this.props.scrapList();
  }

  render() {
    let tableData = [
      {
        dcNo: "",
        structureName: "Launching Griders",
        structureCode: "111",
        numberOfComponents: "",
      },
      {
        dcNo: "",
        structureName: "Launching Griders",
        structureCode: "123",
        numberOfComponents: "",
      },
      {
        dcNo: "",
        structureName: "Trestles",
        structureCode: "124",
        numberOfComponents: "",
      },
    ];
    return (
      <PageContainer>
        <SimpleCard>
          <ViewMoreScrap
            showScrapViewMoreModel={this.props.scrap.showScrapViewMoreModel}
          />
          <AddScrapModal {...this.props} />
          {/* {this.props.users.scrapList && ( */}
          <DataTable
            metaData={listUsersMetaData(
              // (id) => this.setState({ activeId: id, showDeleteModal: true }),
              (id) => this.props.handleViewMore(id),
              (id) => this.props.handleEdit(id)
            )}
            bodyData={this.props.scrap.scrapData}
          />
          {/* )} */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewScrap;
