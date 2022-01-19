import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { fabApproveMetaData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
import ConfirmModal from "../../common/forms/ConfirmModal";
import ViewMoreModal from "./ViewMoreModal"
class FabricationCostApproval extends Component {
    constructor() {
        super();
    }
    componentDidMount = () => {
        this.props.getFabricationCostApprovalData();
    }
    render() {
        return (
            <PageContainer>
                <ViewMoreModal {...this.props}/>
                <SimpleCard>
                    {this.props.fabCostApprove.showApproveModal && (
                        <ConfirmModal
                            closeAction={() =>
                                this.props.closeApproveRejectModal()
                            }
                            title="Approve Structure"
                            deleteAction={() => {
                                this.props.approveStructure()
                            }}
                            frontText="Are you sure you want to Approve the Structure?"
                            confirmText="Structure Approved"
                            cancelText="Cancelled!"
                        />
                    )}
                    {/* )} */}
                    {/* {this.props.requirement.requirementsList && ( */}
                    {this.props.fabCostApprove.showRejectModal && (
                        <ConfirmModal
                            closeAction={() =>
                                this.props.closeApproveRejectModal()
                            }
                            title="Reject Structure"
                            deleteAction={() => {
                                this.props.approveStructure()
                            }}
                            frontText="Are you sure you want to Reject the Structure?"
                            confirmText="Structure Rejected"
                            cancelText="Cancelled!"
                        />
                    )}
                    <CustomDataTable
                        metaData={fabApproveMetaData(
                            (id) => { this.props.openViewMoreModal(id) },
                            (id) => { this.props.showApproveModal(id) },
                            (id) => { this.props.showRejectModal(id) }
                        )}
                        bodyData={this.props.fabCostApprove.fabCostApproveData}
                        // bodyData={[
                        //     {
                        //         id: 1,
                        //         structureName: "praveen",
                        //         structureCode: "STR00001",
                        //         dcNumber: "DA000002",
                        //         status: "APPROVED",
                        //     },
                        //     {
                        //         id: 2,
                        //         structureName: "praveen",
                        //         structureCode: "STR00001",
                        //         dcNumber: "DA000002",
                        //         status: "APPROVED",
                        //     },
                        //     {
                        //         id: 3,
                        //         structureName: "praveen",
                        //         structureCode: "STR00001",
                        //         dcNumber: "DA000002",
                        //         status: "APPROVED",
                        //     }
                        // ]}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default FabricationCostApproval;