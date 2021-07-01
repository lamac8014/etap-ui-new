import React, { Component } from "react";
import CustomDataTable from "../../common/DataTable";
import { listBuiltDetailsMetaData } from "./utils";
import Loader from "../../common/Loader";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import CustomAlert from "../../common/forms/customAlert";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import DateInput from "../../common/forms/DateInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import FaIcon from "../../common/FaIcon";
import TextArea from "../../common/forms/TextArea";
import FileInput from "../../common/forms/FileInput";
import ImageInput from "../../common/forms/ImageInput";
import SearchableDropDown from "../../common/forms/SearchableDropdown";

class BuiltMoreDetails extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    let id = window.atob(this.props.match.params.siteReqId);
    this.props.onPageLoad(id);
  };

  render() {
    return (
      <PageContainer>
        <SimpleCard title={`TRESTLES : STR000001`}>
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
            <SearchableDropDown
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
            />
          </SimpleRow>
          {/* {this.props.built.builtTypeList && ( */}
          <CustomDataTable
            metaData={listBuiltDetailsMetaData()}
            // bodyData={this.props.procurement.siteDispatchDetails}
            bodyData={[
              {
                component: "LG",
                id: "LG-1",
                drNo: "ABC161",
                attributeOne: "16",
                attributeTwo: "17",
                attributeThree: "18",
                vendor: "Stigmata",
                qrCode: "1620",
              },
              {
                component: "LG",
                id: "LG-2",
                drNo: "ABC162",
                attributeOne: "16",
                attributeTwo: "17",
                attributeThree: "18",
                vendor: "Stigmata",
                qrCode: "1621",
              },
              {
                component: "LG",
                id: "LG-3",
                drNo: "ABC163",
                attributeOne: "16",
                attributeTwo: "17",
                attributeThree: "18",
                vendor: "Stigmata",
                qrCode: "1622",
              },
            ]}
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
