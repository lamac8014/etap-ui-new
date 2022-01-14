import React, { Component } from "react";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import PageContainer from "../../common/forms/PageContainer";
import SimpleRow from "../../common/forms/SimpleRow";
import { listTableData } from "./utils";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomDataTable from "../../common/DataTable";
import TextInput from "../../common/forms/TextInput";
class FabCostMore extends Component {
  componentDidMount() {
    let id = window.atob(this.props.match.params.projectStrId);
    let strName = window.atob(this.props.match.params.strName);
    let dcNo = window.atob(this.props.match.params.dcNo);
    let strCode = window.atob(this.props.match.params.strCode);
    this.props.onPageLoad(id, dcNo, strName, strCode);
  }
  componentWillUnmount(){
    this.props.resetPage()
  }
  render() {
    return (
      <PageContainer>
        <SimpleCard>
          <SimpleRow>
            <TextInput
              size="col-md-4"
              label="DC No"
              labelSize="col-md-3"
              fieldSize="col-md-9"
              name="dispatchNo"
              id="dispatchNo"
              value={this.props.fabCost.dcNo}
              disabled
            />

            <TextInput
              size="col-md-4"
              label="Structure Code"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="structCode"
              id="structCode"
              value={this.props.fabCost.structureCode}
              disabled
            />
            <TextInput
              size="col-md-4"
              label="Structure Name"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="structrueName"
              id="structrueName"
              value={this.props.fabCost.structureName}
              disabled
            />
          </SimpleRow>
          <CustomDataTable
            metaData={listTableData()}
            bodyData={this.props.fabCost.componentsList}
          />
        </SimpleCard>
      </PageContainer>
    );
  }
}
export default FabCostMore;
