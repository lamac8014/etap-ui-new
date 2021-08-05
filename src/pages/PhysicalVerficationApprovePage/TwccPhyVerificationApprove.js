import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listTwccApproveData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
class TwccPhyVerificationApprove extends Component {
    constructor() {
        super();
    }
    componentDidMount = () => {
        this.props.getTwccPhyVerificationApproveData();
    }
    render() {
        return (
            <PageContainer>
                <SimpleCard>
                    <CustomDataTable
                        metaData={listTwccApproveData()}
                        bodyData=
                        {
                            this.props.twccPhyVerificationApprove.phyVerificationApproveStruct
                        }
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default TwccPhyVerificationApprove;