import React, { Component } from "react";
import CustomAlert from "../../common/forms/customAlert";
import { listBuiltTypeMetaData, listBuiltDetailsMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import BuiltViewMore from "../../containers/built/builtMore";
import BuiltMoreEdit from "../../containers/built/builtEdit";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewAsBuilt extends Component {
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
        this.props.buildStructure();
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
                <SimpleCard>
                    {this.props.built.isAddComponentMsg && (
                        <CustomAlert
                            variant="success"
                            message={this.props.built.message}
                        />
                    )}
                    <BuiltMoreEdit showBuiltEditMoreModal={this.props.built.showBuiltEditMoreModal} />
                    <BuiltViewMore showBuiltViewMoreModal={this.props.built.showBuiltViewMoreModal} />


                    {/* {this.props.built.builtTypeList && ( */}
                    <CustomDataTable
                        metaData={listBuiltTypeMetaData(
                            (structureName) => { this.props.redirectToBuiltMoreDetails(structureName) },
                            (id) => this.props.handleEdit(id),
                            (id) => this.props.handleMore(id),
                            (id) => this.props.redirectBuiltDetails(id),
                        )}
                        bodyData= {listBuiltDetailsMetaData(this.props.built.buildStructure)}
                        // bodyData={[{ structureName: "Launching Girders", structureCode: "STR 001", dcNo: "16" },
                        //{ structureName: "Tresties", structureCode: "STR 002", dcNo: "17" }]}
                       
                        
                    />
                    {/* )} */}


                </SimpleCard>
            </PageContainer>

        );
    }
}

export default ViewAsBuilt;
