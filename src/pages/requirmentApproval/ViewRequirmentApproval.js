import React, { Component } from "react";
import CustomAlert from "../../common/forms/customAlert";
import { listBuiltTypeMetaData, listBuiltDetailsMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import ConfirmModal from "../../common/forms/ConfirmModal";
import SimpleCard from "../../common/cards/SimpleCard";
import ViewMoreRequirmentApproval from '../../containers/requirmentApproval/viewMoreRequirmentApproval';

class ViewRequirmentApproval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
            showDeleteModal: false,
            filterText: "",
            resetPaginationToggle: false,
        };
    }
    componentDidMount() {
        this.props.requirmentApprovalList();
    }


    filteredItems = (data) => {

        if (data) {
            return data.filter((item) => {
                for (let key in item) {
                    if (item[key] && item[key].toString().toLowerCase().includes(this.state.filterText.toLowerCase())) {
                        return true;
                    }
                }
            })
        }
    };


    render() {
        return (
            <PageContainer>
                {/* <ConfirmModal
                    showModal={this.state.showApproveModal}
                    handleClose={() => {
                        this.setState({ showApproveModal: false, activeId: null })
                    }

                    }
                    title="Approve Requirement"
                    handleConfirm={() => {
                        this.props.handleApprove(this.state.activeId);
                        this.setState({ showApproveModal: false, activeId: null });
                    }}
                >
                    <h6 className="text-danger">
                        Are you sure you want to Approve this request?
            </h6>
                </ConfirmModal>

                <ConfirmModal
                    showModal={this.state.showDeleteModal}
                    handleClose={() => {
                        this.setState({ showDeleteModal: false, activeId: null })
                    }
                    }
                    title="Reject Requirement"
                    handleConfirm={() => {
                        this.props.handleReject(this.state.activeId);
                        this.setState({ showDeleteModal: false, activeId: null });
                    }}
                >
                    <h6 className="text-danger">
                        Are you sure you want to Reject this request?
            </h6>
                </ConfirmModal> */}
                <SimpleCard>
                    {this.props.requirmentApproval.isAddComponentMsg && (
                        <CustomAlert
                            variant="success"
                            message={this.props.requirmentApproval.message}
                        />
                    )}

                    <ViewMoreRequirmentApproval showRequirmentViewMoreModal={this.props.requirmentApproval.showRequirmentViewMoreModal} />


                    {/* {this.props.requirmentApproval.requirmentApprovalList && ( */}
                    <CustomDataTable
                        metaData={listBuiltTypeMetaData(

                            (id) => this.props.handleMore(id),
                            (id) => this.props.handleApprove(id),
                            (id) => this.props.handleReject(id),

                        )}
                        // bodyData={this.props.procurement.siteDispatchDetails}
                        // bodyData={this.props.requirmentApproval.requirmentApprovalList}
                        bodyData={[{ mrNo: "123", status: "PARTIALLY APPROVED" }, { mrNo: "123", status: "APPROVED" }, { mrNo: "123", status: "APPROVEL PENDING" }, { mrNo: "123", status: "REJECTED" }]}


                    />
                    {/* )}  */}


                </SimpleCard>
            </PageContainer>

        );
    }
}

export default ViewRequirmentApproval;
