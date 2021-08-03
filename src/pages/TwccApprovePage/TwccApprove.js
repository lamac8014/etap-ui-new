import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
 import {listTwccApproveData} from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
class TwccApprove extends Component {
    constructor() {
        super();
    }
    componentDidMount = () => {
    }
    render() {
        return (
            <PageContainer>
                <SimpleCard>
                    <CustomDataTable
                        metaData={listTwccApproveData()}
                        bodyData={[
                            {   
                                inspectionId:"100",
                                structureName: "Trestles",
                                structureCode: "STR000012",
                                site:"abc"
                            },
                        ]}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default TwccApprove;