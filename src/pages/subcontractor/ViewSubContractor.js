import React, { Component } from 'react';
import CustomAlert from "../../common/forms/customAlert";
import Loader from '../../common/Loader';
import { _subContractorBodyData, _subContractorData, listVendorMetaData, transformVendorList } from './utils';
import ConfirmModal from '../../common/forms/ConfirmModal';
import CustomDataTable from "../../common/DataTable"; 
import AddSubContractor from './AddSubContractor';
import PageContainer from '../../common/forms/PageContainer';
import SimpleCard from '../../common/cards/SimpleCard';

class ViewSubContractor extends Component {
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
        this.props.vendorList();
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
        const subprop = this.props.addSubContractor;
        return (
            <>
                <PageContainer>
                    <SimpleCard>
                        {this.props.vendor.isVendorMsg && (
                            <CustomAlert
                                variant="success"
                                message={this.props.vendor.message}
                            />
                        )}
                        <AddSubContractor {...this.props} />
                        
                            {this.props.vendor.vendorList && (
                                <CustomDataTable
                                    metaData={listVendorMetaData(
                                        (id) => this.setState({ activeId: id, showDeleteModal: true }),
                                        (id) => this.props.handleEdit(id),
                                    )}
                                    bodyData={this.filteredItems(this.props.vendor.vendorList)}
                                    showButton={true}
                                    btnText="Add Vendor"
                                    onClick={this.props.showAddVendorModal}

                                />
                            )}
                            {/* <ConfirmModal
                                showModal={this.state.showDeleteModal}
                                handleClose={() =>
                                    this.setState({ showDeleteModal: false, activeId: null })
                                }
                                title="Delete Vendor"
                                handleConfirm={() => {
                                    this.props.handleConfirmDelete(this.state.activeId);
                                    this.setState({ showDeleteModal: false, activeId: null });
                                }}
                            >
                                <h6 className="text-danger">
                                    Are you sure you want to delete this Project?
                                </h6>
                            </ConfirmModal> */}
                   
                    </SimpleCard>
                </PageContainer>

            </>
        );
    }
}

export default ViewSubContractor;
