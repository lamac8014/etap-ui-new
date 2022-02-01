import React, { Component } from "react";
import { componentMetaData, getComponentTableData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import { CSVReader } from "react-papaparse";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";


class TwccModificationComponents extends Component {
  constructor() {
    super();
    this.downloadBtnRef = React.createRef();
  }
  componentDidMount() {
    let dispStructId = window.atob(this.props.match.params.dispStructId);
    let structName = window.atob(this.props.match.params.structName);
    let structCode = window.atob(this.props.match.params.structCode);
    let projectName = window.atob(this.props.match.params.project);

    this.props.getComponentData(
      dispStructId,
      structName,
      structCode,
      projectName,
    );
  }

  render() {
    return (
      // <ContentLoader>
      <PageContainer>
        <SimpleCard>
          {/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
          <SimpleRow>
            <TextInput
              size="col-md-4"
              label="Project"
              name="projectName"
              id="projectName"
              labelSize="col-sm-3"
              fieldSize="col-sm-9"
              disabled
              // onChange={(obj) =>
              //   this.props.handleChangeComponentProjectName(obj)
              // }
              value={this.props.twcc.projectName}
            />
            <TextInput
              size="col-md-4"
              labelSize="col-md-3 pr-0"
              fieldSize="col-md-9 "
              label="Structure"
              name="structureName"
              id="structureName"
              disabled
              // onChange={(obj) =>
              //   this.props.handleChangeComponentStructureName(obj)
              // }
              value={this.props.twcc.structName}
            />
            <TextInput
              size="col-md-4"
              labelSize="col-md-3 pr-0"
              fieldSize="col-md-9 "
              label="Struct. Code"
              name="structureCode"
              id="structureCode"
              value={this.props.twcc.structCode}
              placeholder="Auto Fetch"
              disabled
            />
          </SimpleRow>
          <hr />
          <FormRow>
            <CustomDataTable
              metaData={componentMetaData()}
              bodyData={getComponentTableData(this.props.twcc)}
              // bodyData={(this.props.cmpc.uploadData)}
            />
          </FormRow>
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default TwccModificationComponents;
