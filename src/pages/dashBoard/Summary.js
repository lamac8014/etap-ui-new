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
import * as Icons from "react-feather"
import IconInfoCard from "../../common/cards/IconInfoCard";
class Summary extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getDashBoardDetails()
    }
    render() {
        return (
            <PageContainer>
                <SimpleRow className="px-3 mt-3 mb-3">
                    <Col6 size="pr-3" style={{width: "20%"}}>
                    <IconInfoCard 
                            icon={<Icons.Package size={28} strokeWidth="3" color="#FFA169"/>}
                            text="Total Structures"
                            value={this.props.dashboard.dashBoardDetails.totStructure} />
                    </Col6>
                    <Col6 size="pr-3" style={{width: "20%"}}>
                        <IconInfoCard 
                            icon={<Icons.Clipboard size={28} strokeWidth="3" color="#877BFF"/>}
                            text="Total Requirement"
                            value={this.props.dashboard.dashBoardDetails.totRequirement} />
                    </Col6>
                    <Col6 size="pr-3" style={{width: "20% "}}>
                        <IconInfoCard 
                            icon={<Icons.Layers size={28} strokeWidth="3" color="#7BC1FF"/>}
                            text="Fabrication"
                            value={this.props.dashboard.dashBoardDetails.fabrication} />
                    </Col6>
                    <Col6 size="pr-3" style={{width: "20% "}}>
                        <IconInfoCard 
                            icon={<Icons.Users size={28} strokeWidth="3" color="#71C875"/>}
                            text="Outsourcing"
                            value={this.props.dashboard.dashBoardDetails.outsourcing}/>
                    </Col6>
                    <Col6 size="nil" style={{width: "20% "}}>
                        <IconInfoCard 
                            textColor="text-c-red"
                            icon={<Icons.Repeat size={28} strokeWidth="3" color="#F75656"/>}
                            text="Reuse"
                            value={this.props.dashboard.dashBoardDetails.reuse} />
                    </Col6>
                    
                </SimpleRow>
                <Card>
                    {/* <Card>
                        <HorizontalBar
                            data={dataHorBar}
                            //  width={100}
                            height={90}
                        />
                    </Card> */}

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