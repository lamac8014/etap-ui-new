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
import { Bar } from "react-chartjs-2";
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
                data: [200, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
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
                data: [100, 50, 90],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 3
            }]
        };
        const barChartdata = {
            labels:['January','February','March','April','May','June'],
            datasets: [{
                label: 'Monthly Program',
                data: [65, 59, 80, 81, 56, 55,50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                ],
                borderWidth: 1
            }]
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
                                title="Total Comp Vs Total Comp Assigned"

                            />
                        </Col6>
                        <Col6>
                            <PieChartCard
                                // isLoading={this.props.assignStructure.pieChartLoading}
                                height={150}
                                responsive={true}
                                data={data2}
                                title="Total Comp Scanned Vs Total Comp yet to Scan"
                            />
                        </Col6>
                    </SimpleRow>
                </Card>
                <Card>
                    <Bar
                        title="Monthly Program"
                        height={100}
                        data={barChartdata}
                    />
                </Card>
            </PageContainer >
        );

    }

}
export default Summary;