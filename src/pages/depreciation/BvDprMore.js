import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listBvDprMoreData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
class BvDprMore extends Component {
    componentDidMount() {
        let cost = window.atob(this.props.match.params.cost)
        let name = window.atob(this.props.match.params.strname)
        let code = window.atob(this.props.match.params.strcode)
        let date = window.atob(this.props.match.params.date)
        this.props.onPageLoad(cost, date, name, code)
    }
    render() {
        return (
            <PageContainer>
                <SimpleCard title={`${this.props.bvDpr.params.strName} : ${this.props.bvDpr.params.strCode}`}>
                    <CustomDataTable
                        metaData={listBvDprMoreData()}
                        bodyData={this.props.bvDpr.hiringCost}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default BvDprMore;