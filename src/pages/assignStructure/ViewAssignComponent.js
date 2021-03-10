import React, { Component } from "react";
// import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listAssignedComponentMetaData, transformAssignedComponentList } from "./utils";
import Button from "../../common/forms/Button";
import CustomDataTable from "../../common/DataTable";
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AssignComponentViewMore from "../../containers/assignStructure/assignComponentViewMore";
import FormRow from "../../common/forms/FormRow";
// import PieChart from "../../common/forms/charts/PieChart1"
// import PieChart from "../../common/forms/charts/PieChart"
// import PieChart2 from "../../common/forms/charts/PieChart2"
import TextInput from "../../common/forms/TextInput"
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
    this.props.assignComponentList();
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
              data={
                {
                  labels: ["Assigned", "Total"],
                  datasets: [
                    {
                      data: [35,100],
                      backgroundColor: ["#F15850","#EDE03E"],
                      hoverBackgroundColor:["#F15850","#EDE03E"],
                    },
                  ],
                }
              }
              
            />
            </Col6>
            <Col6>
            <PieChartCard
              // isLoading={this.props.summary.pieLoading1}
              height={250}
              title="Scanned Components vs Dispatched Components"
              data={
                {
                  labels: ["Scanned", "Dispatched"],
                  datasets: [
                    {
                      data: [6,35],
                      backgroundColor: ["#F15850","#EDE03E"],
                      hoverBackgroundColor:["#F15850","#EDE03E"],
                    },
                  ],
                }
              }
            />
            </Col6>
          </SimpleRow>
        {this.props.assignStructure.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.assignStructure.message}
          />
        )}
        <AssignComponentViewMore showAddComponentModal={this.props.assignStructure.showAssignComponentMoreModal} />
          <FormRow>
          <div className="col-md-6">
          {/* <PieChart/>         
           </div>
          <div className="col-md-6">
          <PieChart2/>          */}
            </div>
          </FormRow>
          <SimpleRow className="mt-5 mb-4">
          <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelSize="col-md-4"
                // label="IC"
                name="ic"
                id="ic"
                // value={this.state.projectName}
                value="HCIC"
                disabled={true}
              />
            <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelsize="col-md-4"
                // label="BU"
                name="bu"
                id="bu"
                // value={this.state.projectName}
                value="metro"
                disabled={true}
              />
              <TextInput
                size="col-md-2"
                fieldSize="col-md-12"
                // labelsize="col-md-4"
                name="Project"
                // label="Project"
                id="project"
                // value={this.state.projectName}
                value="BMRC RT 02"
                disabled={true}
              />
          <TextInput
                size="col-md-3"
                // labelSize="col-md-4"
                fieldSize="col-md-12"
                // label="Structure"
                name="Structure"
                id="structure"
                // value={this.state.projectName}
                value="Launching girders"
                disabled={true}
              />
              <TextInput
                size="col-md-3"
                fieldSize="col-md-12"
                // labelSize="col-md-4"
                // label="Structure id"
                name="Structure id"
                id="structure id"
                // value={this.state.projectName}
                value="STR000001"
                disabled={true}
              />
              
              
          
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
                (id) => this.props.handleMore(id),
              )}
              bodyData={[{
                componentNo:"1",
                component:"sample",
                componentID:"3",
                componentFamily:"sample family",
                totalWeight:"100",
                drawingNumber:"2",
                oM:"sample",
                modNo:"2",

              }]
              //   transformAssignedComponentList(
              //   this.props.assignStructure.assignComponentList.components
              // )
            }
            />
          )
          {/* } */}
        </SimpleCard>
      </PageContainer>
          );
  }
}

export default ViewAssignComponent;
