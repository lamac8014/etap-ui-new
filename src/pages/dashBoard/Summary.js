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
import { Bar,HorizontalBar} from "react-chartjs-2";
class Summary extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        const data = {
            labels: [
                'Total Comp',
                'Total Comp Assigned',
            ],
            datasets: [{
                label: 'Dataset',
                data: [50, 100],
                backgroundColor: [
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
                hoverOffset: 4
            }]
        };
        const data2 = {
            labels: [
                'Total Comp Scanned',
                'Total Comp yet to Scan',
            ],
            datasets: [{
                label: 'Dataset 2',
                data: [10, 50],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 3
            }]
        };
        const data3 = {
            labels: [
                'Total Comp',
                'Total Comp yet to Scan',
            ],
            datasets: [{
                label: 'Dataset 3',
                data: [100, 20],
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                ],
                hoverOffset: 3
            }]
        };
        const data4 = {
            labels: [
                'To show Total Surplus',
                'Total Scrapped',
            ],
            datasets: [{
                label: 'Dataset 4',
                data: [50, 90],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 3
            }]
        };
        const dataHorBar = {
            labels: ["Project_1","Project_2","Project_3","Project_4","Project_5"],
            datasets: [
                {
                  label: 'Components Scanned',
                  backgroundColor: '#2E5984',
                  borderColor: '#91BAD6',
                  borderWidth:1,
                  hoverBackgroundColor: 'rgba(188, 210, 232)',
                  hoverBorderColor: 'rgba(188, 210, 232)',
                  data: [500,2000,4000,6000,3000,7000]
                },
                {
                  label: 'Components yet to scan',
                  backgroundColor: '#73A5C6',
                  borderColor: '#91BAD6',
                  borderWidth:1,
                  hoverBackgroundColor: 'rgba(188, 210, 232)',
                  hoverBorderColor: 'rgba(188, 210, 232)',
                  data: [1000,2500,4500,6200,3600,7000]
                }
              ]
        };
        return (
            <PageContainer>
                <SimpleRow>
                    <SearchableDropDown
                        size="col-md-4"
                        labelSize="col-sm-3"
                        fieldSize="col-sm-9"
                        placeholder="BU"
                        // label="BU"
                        // name=""
                        // id=""
                        selectOptions={[
                            { value: "1", label: "one" },
                            { value: "2", label: "two" },
                        ]}
                    />
                    <SearchableDropDown
                        size="col-md-4"
                        labelSize="col-md-3 pr-0"
                        fieldSize="col-md-9 "
                        // label="Project"
                        placeholder="Project"
                        // name=""
                        // id=""
                        selectOptions={[
                            { value: "1", label: "one" },
                            { value: "2", label: "two" },
                        ]}
                    />
                    <DateInput
                        size="col-md-4"
                        labelSize="col-md-3 pr-0"
                        fieldSize="col-md-9 "
                        placeholder="Month"
                    // label="Month"
                    // name=""
                    // id=""
                    />
                </SimpleRow>

                <Card>
                    <SimpleRow>
                        <Col6>
                            <PieChartCard
                                // isLoading={this.props.assignStructure.pieChartLoading}
                                height={150}
                                responsive={true}
                                data={data}
                                title="Total Component Vs Total Component Assigned "

                            />
                        </Col6>
                        <Col6>
                            <PieChartCard
                                // isLoading={this.props.assignStructure.pieChartLoading}
                                height={150}
                                responsive={true}
                                data={data2}
                                title="Total Component Scanned Vs Total Component yet to Scan"

                            />
                        </Col6>
                    </SimpleRow>
                {/* </Card>
                <Card> */}
                <br/>
                    <SimpleRow>
                        <Col6>
                            <PieChartCard
                                // isLoading={this.props.assignStructure.pieChartLoading}
                                height={150}
                                responsive={true}
                                data={data3}
                                title=" Total components Vs Tot Components yet to be scanned "

                            />
                        </Col6>
                        <Col6>
                            <PieChartCard
                                // isLoading={this.props.assignStructure.pieChartLoading}
                                height={150}
                                responsive={true}
                                data={data4}
                                title="To show Total Surplus and Total Scrapped "
                            />
                        </Col6>
                    </SimpleRow>
                </Card>
                <Card>
                     <HorizontalBar 
                     data={dataHorBar}
                    //  width={100}
                     height={90}
                    />
                </Card>
            </PageContainer >
        );

    }

}
export default Summary;