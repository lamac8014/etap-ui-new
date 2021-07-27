import React, { Component } from "react";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listTableData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
import TextInput from "../../common/forms/TextInput";
class FabCostMore extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getFabricationCost();
    }
    render() {
        return (
            <PageContainer>
                <SimpleCard title={`Trestles : STR000012`}>
                    <SimpleRow>
                        <TextInput
                            size="col-md-4"
                            label="DC No"
                            labelSize="col-md-3"
                            fieldSize="col-md-9"
                            name="dispatchNo"
                            id="dispatchNo"
                        />

                        <TextInput
                            size="col-md-4"
                            label="Structure Code"
                            labelSize="col-md-4 pr-0"
                            fieldSize="col-md-8"
                            name="structCode"
                            id="structCode"
                        />
                        <TextInput
                            size="col-md-4"
                            label="Structure Name"
                            labelSize="col-md-4 pr-0"
                            fieldSize="col-md-8"
                            name="structrueName"
                            id="structrueName"
                        />
                    </SimpleRow>
                    <CustomDataTable
                        metaData={listTableData()}
                        bodyData={this.props.fabCost.fabricationComponentCost}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default FabCostMore;