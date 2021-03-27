import React, { Component } from "react";
import { componentMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ModifyComponentsModal from "./ModifyComponentsModal";

class ViewAssignComponent extends Component {
  componentDidMount() {
    // let structId = window.atob(this.props.match.params.structId);
    // let projectId = window.atob(this.props.match.params.projectId);
    // this.props.assignComponentList(structId, projectId);
  }

  render() {
    return (
      // <ContentLoader>
      <PageContainer>
        <SimpleCard title="Launching Girders : STR0001">
          {/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
          <ModifyComponentsModal {...this.props} />
          {/* {this.props.assignStructure.assignComponentList.components && ( */}
          <CustomDataTable
            metaData={componentMetaData((id) => this.props.handleEdit(id))}
            bodyData={
              [
                {
                  componentNo: "1",
                  component: "sample",
                  componentID: "3",
                  componentType: "sample family",
                  drawingNumber: "2",
                  group: "G",
                  length: "25",
                  breadth: "25",
                  height: "25",
                  thickness: "25",
                  weight: "25",
                  type: "T2",
                  tag: "Sample",
                },
                {
                  componentNo: "1",
                  component: "sample",
                  componentID: "3",
                  componentType: "sample family",
                  drawingNumber: "2",
                  group: "G",
                  length: "25",
                  breadth: "25",
                  height: "25",
                  thickness: "25",
                  weight: "25",
                  type: "T2",
                  tag: "Sample",
                },
              ]
              //   transformAssignedComponentList(
              //     this.props.assignStructure.assignComponentList.components
              //   )
            }
          />

          {/* } */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewAssignComponent;
