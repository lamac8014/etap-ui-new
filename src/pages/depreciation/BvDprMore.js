import React, { Component } from "react";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listBvDprMoreData } from "./utils"
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
class BvDprMore extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        return (
            <PageContainer>
                <SimpleCard title={`Trestles : STR000012`}>
                    <CustomDataTable
                        metaData={listBvDprMoreData(
                        )}
                        bodyData={[
                            {   
                                age:"0",
                                bookValue: "100",
                                currentBkValue:"100",
                            },
                            {   
                                age:"1",
                                bookValue: "100",
                                currentBkValue:"94",
                            },
                            {   
                                age:"2",
                                bookValue: "94.0",
                                currentBkValue:"88.4",
                            },
                            {   
                                age:"3",
                                bookValue: "88.4",
                                currentBkValue:"83.1",
                            },
                            {   
                                age:"4",
                                bookValue: "83.1",
                                currentBkValue:"78.1",
                            },
                            {   
                                age:"5",
                                bookValue: "78.1",
                                currentBkValue:"73.4",
                            },
                        ]}
                    />
                </SimpleCard>
            </PageContainer >
        );

    }

}
export default BvDprMore;