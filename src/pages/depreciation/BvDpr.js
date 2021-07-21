import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listBvDprData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
class BvDpr extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        return (
            <PageContainer>
                <SimpleCard>
                    <CustomDataTable
                        metaData={listBvDprData(
                        )}
                        bodyData={[
                            {   
                                projName:"abc",
                                structureName: "Trestles",
                                structureCode: "STR000012",
                                currentValue:"100"
                            },
                        ]}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default BvDpr;