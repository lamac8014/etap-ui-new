import React, { Component } from "react";
import DateInput from "../../common/forms/DateInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import { Pie } from "react-chartjs-2";
import Card from "../../common/cards/SimpleCard";
import PieChartCard from "../../common/cards/PieChartCard";
// import BarChart from "../../commom/cards/BarChartCard";
import { Bar, HorizontalBar } from "react-chartjs-2";
class Summary extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getDashBoardDetails()
    }
    render() {
        const dataHorBar = {
            labels: ["Project_1", "Project_2", "Project_3", "Project_4", "Project_5"],
            datasets: [
                {
                    label: 'Components Scanned',
                    backgroundColor: '#2E5984',
                    borderColor: '#91BAD6',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(188, 210, 232)',
                    hoverBorderColor: 'rgba(188, 210, 232)',
                    data: [500, 2000, 4000, 6000, 3000, 7000]
                },
                {
                    label: 'Components yet to scan',
                    backgroundColor: '#73A5C6',
                    borderColor: '#91BAD6',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(188, 210, 232)',
                    hoverBorderColor: 'rgba(188, 210, 232)',
                    data: [1000, 2500, 4500, 6200, 3600, 7000]
                }
            ]
        };
        return (
            <PageContainer>
                <Card>
                    <Card>
                        <HorizontalBar
                            data={dataHorBar}
                            //  width={100}
                            height={90}
                        />
                    </Card>
                    <SimpleRow>
                        <Col6>
                            <PieChartCard
                                isLoading={this.props.dashboard.isLoading}
                                height={150}
                                responsive={true}
                                data={{
                                    labels: [
                                        'Total Comp',
                                        'Total Comp Assigned',
                                    ],
                                    datasets: [{
                                        label: 'Dataset',
                                        data: this.props.dashboard.dashBoardDetails.totalComp !== 0 && this.props.dashboard.dashBoardDetails.assignComp !== 0 ? [this.props.dashboard.dashBoardDetails.totalComp, this.props.dashboard.dashBoardDetails.assignComp] : [],
                                        backgroundColor: [
                                            'rgb(255, 205, 86)',
                                            'rgb(255, 99, 132)',
                                            'rgb(54, 162, 235)',
                                        ],
                                        hoverOffset: 4
                                    }]
                                }}
                                title="Total Component Vs Total Component Assigned "

                            />
                        </Col6>
                        <Col6>
                            <PieChartCard
                                isLoading={this.props.dashboard.isLoading}
                                height={150}
                                responsive={true}
                                data={{
                                    labels: [
                                        'Total Comp Scanned',
                                        'Total Comp yet to Scan',
                                    ],
                                    datasets: [{
                                        label: 'Dataset 2',
                                        data: this.props.dashboard.dashBoardDetails.scanned !== 0 && this.props.dashboard.dashBoardDetails.yetToscan !== 0 ? [this.props.dashboard.dashBoardDetails.scanned, this.props.dashboard.dashBoardDetails.yetToscan] : [],
                                        backgroundColor: [
                                            'rgb(255, 99, 132)',
                                            'rgb(54, 162, 235)',
                                            'rgb(255, 205, 86)'
                                        ],
                                        hoverOffset: 3
                                    }]
                                }}
                                title="Total Component Scanned Vs Total Component yet to Scan"

                            />
                        </Col6>
                    </SimpleRow>
                    {/* </Card>
                <Card> */}
                    <br />
                    <SimpleRow>
                        <Col6>
                            <PieChartCard
                                isLoading={this.props.dashboard.isLoading}
                                height={150}
                                responsive={true}
                                data={{
                                    labels: [
                                        'Total Comp',
                                        'Total Comp yet to Scan',
                                    ],
                                    datasets: [{
                                        label: 'Dataset 3',
                                        data: this.props.dashboard.dashBoardDetails.totalComp !== 0 && this.props.dashboard.dashBoardDetails.yetToscan !== 0 ? [this.props.dashboard.dashBoardDetails.totalComp, this.props.dashboard.dashBoardDetails.yetToscan] : [],
                                        backgroundColor: [
                                            'rgb(54, 162, 235)',
                                            'rgb(255, 205, 86)',
                                            'rgb(255, 99, 132)',
                                        ],
                                        hoverOffset: 3
                                    }]
                                }}
                                title=" Total components Vs Tot Components yet to be scanned "

                            />
                        </Col6>
                        <Col6>
                            <PieChartCard
                                isLoading={this.props.dashboard.isLoading}
                                height={150}
                                responsive={true}
                                data={{
                                    labels: [
                                        'Total Surplus',
                                        'Total Scrapped',
                                    ],
                                    datasets: [{
                                        label: 'Dataset 4',
                                        data: this.props.dashboard.dashBoardDetails.surpls !== 0 && this.props.dashboard.dashBoardDetails.scrap !== 0 ? [this.props.dashboard.dashBoardDetails.surpls, this.props.dashboard.dashBoardDetails.scrap] : [],
                                        backgroundColor: [
                                            'rgb(255, 99, 132)',
                                            'rgb(54, 162, 235)',
                                            'rgb(255, 205, 86)'
                                        ],
                                        hoverOffset: 3
                                    }]
                                }}
                                title="Total Surplus Vs Total Scrapped "
                            />
                        </Col6>
                    </SimpleRow>
                </Card>

            </PageContainer >
        );

    }

}
export default Summary;