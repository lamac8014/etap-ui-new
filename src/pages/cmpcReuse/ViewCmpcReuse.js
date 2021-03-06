import React, { Component } from "react";

import { listUsersMetaData } from "./utils";
import DataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreCmpcReuse from "../../containers/cmpcReuse/viewMoreCmpcReuse";
import Radio from "../../common/forms/Radio";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import ButtonRow from "../../common/forms/ButtonRow";
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
    let tableData = [
      {
        dcNo: "",
        structureName: "Launching Griders",
        structureCode: "111",
        numberOfComponents: "",
        ReqBy: "",
        Qty: "",
      },
      {
        dcNo: "",
        structureName: "Launching Griders",
        structureCode: "123",
        numberOfComponents: "",
        ReqBy: "",
        Qty: "",
      },
      {
        dcNo: "",
        structureName: "Trestles",
        structureCode: "124",
        numberOfComponents: "",
        ReqBy: "",
        Qty: "",
      },
    ];
    return (
      <PageContainer>
        <ViewMoreCmpcReuse
          showCmpcViewMoreModel={this.props.cmpcReuse.showCmpcViewMoreModel}
        />
        <SimpleCard>
          {/* {this.props.users.scrapList && ( */}
          <DataTable
            metaData={listUsersMetaData((id) => this.props.handleViewMore(id))}
            bodyData={tableData}
          />
          {/* )} */}
          <SimpleRow className="d-flex justify-content-center">
            <Col6 size="col-md-3">
              <Radio
                color="success"
                label="With Modification"
                id="1"
                value="withMod"
                name="cmpcRadio"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col6>

            <Col6 size="col-md-3">
              <Radio
                color="success"
                label="Without Modification"
                id="2"
                value="withoutMod"
                name="cmpcRadio"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col6>

            <Col6 size="col-md-3">
              <Radio
                color="success"
                label="Reject"
                id="3"
                value="reject"
                name="cmpcRadio"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col6>
          </SimpleRow>
          <ButtonRow>
            <Button btnText="Save" onClick={() => {}} gradient type="success" />
            <Button
              btnText="Discard"
              onClick={() => {}}
              gradient
              type="danger"
            />
          </ButtonRow>
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewCmpcReuse;
