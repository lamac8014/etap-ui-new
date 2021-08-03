import React, { Component } from "react";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listFabCostData ,listTableData} from "./utils"
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
        // this.props.getFabricationCost();
    }
    render() {
        return (
            <PageContainer>
			   <FabCostModal showFabEditModal = {this.props.fabCost.showFabEditModal} />
                <SimpleCard>
                    <CustomDataTable
                        metaData={listFabCostData(
                            (id) => this.props.handleAddCost(id),
                        )}
                        bodyData={this.props.fabCost.fabricationCost}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default FabCost;