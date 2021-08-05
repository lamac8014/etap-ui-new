import React, { Component } from "react";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listFabCostData } from "./utils";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
// import FabCostModal from "./FabCostModal";
import FabCostModal from "../../containers/fabCostPage/fabCostModal";
class FabCost extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    this.props.fabricationStructure();
  };
  render() {
    return (
      <PageContainer>
        <FabCostModal showFabEditModal={this.props.fabCost.showFabEditModal} />
        <SimpleCard>
          <CustomDataTable
            metaData={listFabCostData(
              (id) => this.props.handleAddCost(id),
              (
                projectStructureId,
                dispatchNo,
                structureName,
                structureCode
              ) => {
                this.props.redirectToFabCostMoreDetails(
                  projectStructureId,
                  dispatchNo,
                  structureName,
                  structureCode
                );
              }
            )}
            bodyData={this.props.fabCost.fabricationCost}
          />
        </SimpleCard>
      </PageContainer>
    );
  }
}
export default FabCost;