import React, { Component } from "react";
import CustomDataTable from "../../common/DataTable";
import { listBuiltDetailsMetaData } from "./utils";
import Loader from "../../common/Loader";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomAlert from "../../common/forms/customAlert";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";

class BuiltMoreDetails extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    let id = window.atob(this.props.match.params.projectStrId);
    let strName = window.atob(this.props.match.params.strName);
    let dcNo = window.atob(this.props.match.params.dcNo);
    let strCode = window.atob(this.props.match.params.strCode);
    this.props.onPageLoad(id, dcNo, strName, strCode);
  };

  render() {
    return (
      <PageContainer>
        {/* <SimpleCard title={`${this.props.built.structrueName} : ${this.props.built.strcutureCode}`}>  */}
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
          <SimpleRow>
            <TextInput
              size="col-md-4"
              label="DC No"
              labelSize="col-md-3"
              fieldSize="col-md-9"
              name="dispatchNo"
              id="dispatchNo"
              value={this.props.built.dcNo}
              disabled
            />

            <TextInput
              size="col-md-4"
              label="Structure Code"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="structCode"
              id="structCode"
              value={this.props.built.structCode}
              disabled
            />
            <TextInput
              size="col-md-4"
              label="Structure Name"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="structrueName"
              id="structrueName"
              value={this.props.built.structName}
              disabled
            />
          </SimpleRow>
          {/* <SearchableDropDown
              size="col-md-4"
              label="Actual WBS"
              labelSize="col-md-3"
              fieldSize="col-md-9"
              name="actualWbs"
              id="actualWbs"
              selectOptions={[
                { value: "1", label: "wbs one" },
                { value: "2", label: "wbs two" },
              ]}
              onChange={() => {}}
              // onChange={e =>
              //   this.props.handleChangeStructureFamily(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
              placeholder="Select WBS"
            />

            <DateInput
              size="col-md-4"
              label="Expected Rel. Date"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="dcNo"
              id="dcNo"
              onChange={() => {}}
              // onChange={e =>
              //   this.props.handleChangeStructureName(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
              placeholder="Auto Fetch"
            />
            <TextInput
              size="col-md-4"
              label="Fabrication Year"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              name="fabricationYear"
              id="fabricationYear"
              // onChange={e =>
              //   this.props.handleChangeStructureFamily(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
              onChange={() => {}}
            />
          </SimpleRow>

          <SimpleRow>
            <SearchableDropDown
              size="col-md-4"
              label="Reusability"
              labelSize="col-md-3"
              fieldSize="col-md-9"
              name="reusability"
              id="reusability"
              onChange={() => {}}
              // onChange={e =>
              //   this.props.handleChangeStructureFamily(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
              selectOptions={[
                { value: "1", label: "Yes" },
                { value: "2", label: "No" },
              ]}
              placeholder="Select Reusability"
            />

            <InputGroupButton
              label="Upload Image"
              size="col-md-4"
              labelSize="col-md-4 pr-0"
              fieldSize="col-md-8"
              onChange={() => {}}
              value=""
              btnText={<FaIcon iconname="faFileImage" />}
              onClick={() => this.imageRef.current.click()}
              disabled
            />
            <InputGroupButton
              label="Upload File"
              size="col-md-4"
              labelSize="col-md-4"
              fieldSize="col-md-8"
              onChange={() => {}}
              value=""
              btnText={<FaIcon iconname="faFileUpload" />}
              onClick={() => this.fileRef.current.click()}
              disabled
            />
          </SimpleRow>
          <SimpleRow>
            <TextInput
              size="col-md-4"
              label="Actual Weight"
              labelSize="col-md-3 pr-0"
              fieldSize="col-md-9"
              name="weight"
              id="weight"
              // onChange={e =>
              //   this.props.handleChangeStructureName(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
              onChange={() => {}}
            />
            <div style={{ display: "none" }}>
              <FileInput innerRef={this.fileRef} onChange={() => {}} />
              <ImageInput innerRef={this.imageRef} onChange={() => {}} />
            </div>
          </SimpleRow>
          <SimpleRow>
            <TextArea
              size="col-md-6"
              label="Remarks"
              name="remarks"
              id="remarks"
              // onChange={e =>
              //   this.props.handleChangeStructureName(e.target.value)
              // }
              //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
              onChange={() => {}}
            /> */}
          <CustomDataTable
            metaData={listBuiltDetailsMetaData()}
            bodyData={this.props.built.componentsList}
          />
          {/* )} */}
          <ButtonRow>
            <Button btnText="Save" gradient type="success" />
            <Button btnText="Discard" gradient type="danger" />
          </ButtonRow>
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default BuiltMoreDetails;
