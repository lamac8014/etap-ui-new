import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreCmpcReuse from "../../containers/cmpcReuse/viewMoreCmpcReuse";
import Radio from "../../common/forms/Radio";
import Button from "../../common/forms/Button";

class ViewCmpcReuse extends Component {
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
    //this.props.cmpcList();
  }


  render() {
    let tableData = [{ dcNo: "", structureName: "Launching Griders", structureCode: "111", numberOfComponents: "", ReqBy: "", Qty: "" },
                     { dcNo: "", structureName: "Launching Griders", structureCode: "123", numberOfComponents: "", ReqBy: "", Qty: "" },
                     { dcNo: "", structureName: "Trestles", structureCode: "124", numberOfComponents: "", ReqBy: "", Qty: "" }
                    ]
    return (

      <PageContainer>
        <ViewMoreCmpcReuse showCmpcViewMoreModel={this.props.cmpcReuse.showCmpcViewMoreModel} />

        <SimpleCard>

          {/* {this.props.users.scrapList && ( */}
          <DataTable
            metaData={listUsersMetaData(
              (id) => this.props.handleViewMore(id),
            )}
            bodyData={tableData}
          />
          {/* )} */}
          <Radio 
          label="With Modification"
          color="success"
          
          />
          <Radio 
          label="Without Modification"
          
          />
          <Radio 
          label="Reject"
          
          />
         

        </SimpleCard>
        <Button
          btnText="Submit"
          className="center-block"
          outlineColor="success"

        />
        <Button
          btnText="Discard"
          className=""
          outlineColor="danger"
        />
      </PageContainer>
    );
  }
}

export default ViewCmpcReuse;
