import React, { Component } from "react";
import { sbgTableMetaData, icbuList } from "./utils";
import CustomDataTable from "../../common/DataTable";
import AddIndependentCompany from "../../containers/independentCompany/independentCompany";
import SimpleCard from "../../common/cards/SimpleCard";
import PageContainer from "../../common/forms/PageContainer";
import AddSbg from "./AddSbg";

class ViewSbg extends Component {
  componentDidMount() {
    // this.props.icbuList();
  }

  render() {
    return (
      <PageContainer>
        <SimpleCard>
          <AddSbg {...this.props} />
          <AddIndependentCompany {...this.props} />
          {this.props.sbg.sbgData && (
            <CustomDataTable
              metaData={sbgTableMetaData((id) => this.props.handleEdit(id))}
              //   bodyData={icbuList(this.props.icbu.icbuList)}
              bodyData={[
                { id: "1", sbgName: "Sample Sbg One" },
                { id: "2", sbgName: "Sample sbg Two" },
              ]}
              showButton={true}
              btnText="Add Strategic Busi. Group"
              onClick={this.props.openSbgmodal}
            />
          )}
          {/* {this.props.icbu.isLoading && <Loader />} */}
          {/* {this.props.icbu.isIcbuMsg && (
          <CustomAlert variant="success" message={this.props.icbu.message} />
        )} */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewSbg;