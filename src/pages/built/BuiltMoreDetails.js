import React, { Component } from "react";
import CustomDataTable from "../../common/DataTable";
import { listBuiltDetailsMetaData } from "./utils";
import Loader from "../../common/Loader";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomAlert from "../../common/forms/customAlert";


class BuiltMoreDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        let id = window.atob(this.props.match.params.siteReqId);
        this.props.onPageLoad(id);
    };

    render() {
        return (


            <PageContainer>
                <SimpleCard>
                    {this.props.built.isLoading && <Loader />}
                    {this.props.built.message && (
                        <CustomAlert
                            type={this.props.built.isSuccess ? "success" : "error"}
                            message={this.props.built.message}
                            onClose={this.props.resetMessage}
                        />
                    )}
                    {this.props.built.dispatchError && (
                        <CustomAlert
                            type="error"
                            message={this.props.built.dispatchErrMsg}
                            onClose={() => this.props.setDispatchError(false, "")}
                        />
                    )}

                    {/* {this.props.built.builtTypeList && ( */}
                    <CustomDataTable
                        metaData={listBuiltDetailsMetaData()}
                        // bodyData={this.props.procurement.siteDispatchDetails}
                        bodyData={[{ component: "LG", id: "LG-1", drNo: "ABC161", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1620" },
                        { component: "LG", id: "LG-2", drNo: "ABC162", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1621" },
                        { component: "LG", id: "LG-3", drNo: "ABC163", attributeOne: "16", attributeTwo: "17", attributeThree: "18", vendor: "Stigmata", qr: "1622" }]}


                    />
                    {/* )} */}


                </SimpleCard>
            </PageContainer>


        );
    }
}

export default BuiltMoreDetails;
