import React, { Component } from "react";
import { Row, Col } from "reactstrap";
// import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import {
  listAssignedComponentMetaData,
  transformAssignedComponentList,
} from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/DataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AssignComponentViewMore from "../../containers/assignStructure/assignComponentViewMore";
import FormRow from "../../common/forms/FormRow";
// import PieChart from "../../common/forms/charts/PieChart1"
// import PieChart from "../../common/forms/charts/PieChart"
// import PieChart2 from "../../common/forms/charts/PieChart2"
import TextInput from "../../common/forms/TextInput";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SimpleRow from "../../common/forms/SimpleRow";
import PieChartCard from "../../common/cards/PieChartCard";

class ViewAssignComponent extends Component {
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
    let structId = window.atob(this.props.match.params.structId);
    let projectId = window.atob(this.props.match.params.projectId);
    this.props.assignComponentList(structId, projectId);
  }

  render() {
    return (
      // <ContentLoader>
      <PageContainer>
        <SimpleCard>
          <SimpleRow>
            <Col6>
              <PieChartCard
                // isLoading={this.props.summary.pieLoading1}
                height={250}
                title="Components assigned vs Total Components "
                data={{
                  labels: ["Assigned", "Total"],
                  datasets: [
                    {
                      data: [35, 100],
                      backgroundColor: ["#F15850", "#EDE03E"],
                      hoverBackgroundColor: ["#F15850", "#EDE03E"],
                    },
                  ],
                }}
              />
            </Col6>
            <Col6>
              <PieChartCard
                // isLoading={this.props.summary.pieLoading1}
                height={250}
                title="Scanned Components vs Dispatched Components"
                data={{
                  labels: ["Scanned", "Dispatched"],
                  datasets: [
                    {
                      data: [6, 35],
                      backgroundColor: ["#F15850", "#EDE03E"],
                      hoverBackgroundColor: ["#F15850", "#EDE03E"],
                    },
                  ],
                }}
              />
            </Col6>
          </SimpleRow>
          {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )}
          <AssignComponentViewMore
            showAddComponentModal={
              this.props.assignStructure.showAssignComponentMoreModal
            }
          />
          <FormRow className="mb-5">
            <div className="col-md-6">
              {/* <PieChart/>         
           </div>
          <div className="col-md-6">
          <PieChart2/>          */}
            </div>
          </FormRow>
          {/* <Row>
            <Col
              sm={{ offset: 0 }}
              style={{ marginRight: 155, marginLeft: 15 }}
            >
              BU
            </Col>
            <Col sm={{ offset: 0 }} style={{ marginRight: 155 }}>
              IC
            </Col>
            <Col sm={{ offset: 0 }} style={{ marginRight: 125 }}>
              Project
            </Col>
            <Col sm={{ offset: 0 }} style={{ marginRight: 205 }}>
              Structure
            </Col>
            <Col sm={{ offset: 0 }} style={{ marginRight: 0 }}>
              Structure Id
            </Col>
          </Row> */}

          <SimpleRow className="mt-2 mb-4">
            <Col6 size="col-md-2 ">
              <span>
                <label className="mb-0">BU</label>
                <br />
                <TextInput
                  size="col-md-12 px-0"
                  fieldSize="col-md-12"
                  // labelsize="col-md-4"
                  // label="BU"
                  name="bu"
                  id="bu"
                  value={this.props.assignStructure.assignComponentList.buName}
                  disabled={true}
                />
              </span>
            </Col6>
            <Col6 size="col-md-2 ">
              <span>
                <label className="mb-0">IC</label>
                <br />
                <TextInput
                  size="col-md-12 px-0"
                  fieldSize="col-md-12"
                  // labelSize="col-md-4"
                  // label="IC"
                  name="ic"
                  id="ic"
                  value={this.props.assignStructure.assignComponentList.icName}
                  disabled={true}
                />
              </span>
            </Col6>
            <Col6 size="col-md-2 ">
              <span>
                <label className="mb-0">Project</label>
                <br />
                <TextInput
                  size="col-md-12 px-0"
                  fieldSize="col-md-12"
                  // labelsize="col-md-8"
                  name="Project"
                  // label="Project"
                  id="project"
                  value={
                    this.props.assignStructure.assignComponentList.projectName
                  }
                  disabled={true}
                />
              </span>
            </Col6>
            <Col6 size="col-md-3 ">
              <span>
                <label className="mb-0">Structure</label>
                <br />
                <TextInput
                  size="col-md-12 px-0"
                  // labelSize="col-md-12"
                  fieldSize="col-md-12"
                  // label="Structure"
                  name="Structure"
                  id="structure"
                  value={
                    this.props.assignStructure.assignComponentList.strcutureName
                  }
                  disabled={true}
                />
              </span>
            </Col6>
            <Col6 size="col-md-3 ">
              <span>
                <label className="mb-0">Structure Code</label>
                <br />
                <TextInput
                  size="col-md-12 px-0"
                  fieldSize="col-md-12"
                  // labelSize="col-md-12"
                  // label="Structure id"
                  name="Structure id"
                  id="structure id"
                  value={
                    this.props.assignStructure.assignComponentList.structureCode
                  }
                  disabled={true}
                />
              </span>
            </Col6>
          </SimpleRow>
          {/* <FormRow>
          <TextInput
                size="col-md-3"
                fieldSize="col-md-8"
                name="projectName"
                id="projectName"
                value={this.state.projectName}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
                size="col-md-3"
                fieldSize="col-md-8"
                name="projectName"
                id="projectName"
                value={this.state.projectName}
                placeholder="Auto Fetch"
                disabled={true}
              />
              <TextInput
              size="col-md-3"
              fieldSize="col-md-8"
              name="projectName"
              id="projectName"
              value={this.state.projectName}
              placeholder="Auto Fetch"
              disabled={true}
            />
            <TextInput
            size="col-md-3"
            fieldSize="col-md-8"
            name="projectName"
            id="projectName"
            value={this.state.projectName}
            placeholder="Auto Fetch"
            disabled={true}
          />
          </FormRow> */}
          {/* {this.props.assignStructure.assignComponentList.components && ( */}
          <CustomDataTable
            metaData={listAssignedComponentMetaData(
              (id) => this.setState({ activeId: id, showDeleteModal: true }),
              (id) => this.props.handleMore(id)
            )}
            bodyData={
              // [
              //   {
              //     componentNo: "1",
              //     component: "sample",
              //     componentID: "3",
              //     componentFamily: "sample family",
              //     totalWeight: "100",
              //     drawingNumber: "2",
              //     oM: "sample",
              //     modNo: "2",
              //   },
              // ]
              transformAssignedComponentList(
                this.props.assignStructure.assignComponentList.components
              )
            }
          />

          {/* } */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewAssignComponent;
