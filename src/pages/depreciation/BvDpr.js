import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listBvDprData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
import ViewMoreBvDprModal from "./ViewMoreBvDprModal";
class BvDpr extends Component {

    componentDidMount() {
        this.props.onPageLoad()
    }   
    render() {
        return (
            <PageContainer>
                <ViewMoreBvDprModal {...this.props}/>
                <SimpleCard>
                    <CustomDataTable
                        metaData={listBvDprData(
                            (cost,date, name, code) => this.props.redirectToFabCostMoreDetails(cost, date, name, code),
                            (strCode) => {this.props.openViewMoreModal(strCode)}
                        )}
                        bodyData={this.props.bvDpr.fabricationCostList}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default BvDpr;