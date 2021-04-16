import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreScrap from "../../containers/scrap/viewMoreScrap";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import ViewMoretwccVerification from "../../containers/twccVerification/twccVerificationMore";


class ViewtwccVerification extends Component {
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
    let tableData = [{ structureName: "Launching Griders", structureCode: "111", numberOfComponents: "" },
    {  structureName: "Launching Griders", structureCode: "123", numberOfComponents: "" },
    {  structureName: "Trestles", structureCode: "124", numberOfComponents: "" }
    ]
    return (

      <PageContainer>

        <SimpleCard>
          <ViewMoretwccVerification showScrapViewMoreModel={this.props.scrap.showScrapViewMoreModel} />
          <SearchableDropDown
            size="col-md-4"
            label="Site"
            name="Site"
            labelSize="col-sm-2"
            fieldSize="col-sm-9"
            selectOptions={
              "id",
              "name"
            }

            // onChange={(obj) => this.props.handleChangeICCode(obj)}
            value={"site"}
          />
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

export default ViewtwccVerification;
