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
import Modal from "../../common/Modal";
class ViewMoreModal extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.imageRef = React.createRef();
  }
  componentDidMount = () => {
  };
  render() {
    return (
      <Modal
        title={`As Built Details`}
        showModal={this.props.built.openViewMoreModal}
        handleSave={this.props.addComponent}
        handleClose={this.props.closeViewMoreModal}
        size="xl"
        isShowFooter={true}
      >
        <SimpleRow>
          <TextInput
            label="DC No"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            name="dispatchNo"
            id="dispatchNo"
            onChange={(e) => this.props.handleChangedcNo(e.target.value)}
            value={this.props.built.dispatchNo}
            // value={this.props.built.asBuildStructure.dispatchNo}
            placeholder="Auto fetch"
          />

          <TextInput
            label="Structure Code"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            name="structCode"
            id="structCode"
            onChange={(e) => this.props.handleChangeStructCode(e.target.value)}
            value={this.props.built.structCode}
            // value={this.props.built.asBuildStructure.strcutureCode}
            placeholder="Auto fetch"
          />
          <TextInput
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            label="Structure Name"
            name="structrueName"
            id="structrueName"
            onChange={(e) => this.props.handleChangeStructName(e.target.value)}
            value={this.props.built.asBuildStructure.structrueName}
            placeholder="Auto fetch"
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="Actual WBS"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            name="actualWbs"
            id="actualWbs"
            placeholder="Select WBS"
            onChange={(e) => this.props.handleChangeActualWbs(e.target.value)}
            value={this.props.built.actWbs}
          />

          <DateInput
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            label="Expected Rel. Date"
            name="reldate"
            id="reldate"
            onChange={(e) => this.props.handleChangeRelDate(e.target.value)}
            value={this.props.built.expRelDate}
          />
          <TextInput
            label="Fabrication Year"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            name="fabricationYear"
            id="fabricationYear"
            onChange={(e) => this.props.handleChangeFabYear(e.target.value)}
            value={this.props.built.fabYear}
          />
        </SimpleRow>
        <SimpleRow>
          <SearchableDropDown
            label="Reusability"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            name="reusability"
            id="reusability"
            onChange={(obj) => {this.props.handleChangeReuse(obj)}}
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            value={this.props.built.reUse}
            selectOptions={[
              { value: "1", label: "True" },
              { value: "2", label: "False" },
            ]}
            placeholder="Select Reusability"
          />

          <InputGroupButton
            label="Upload Image"
            // size="col-md-3"
            // labelSize="col-md-4 pr-0"
            // fieldSize="col-md-8"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            onChange={() => { }}
            value=""
            btnText={<FaIcon iconname="faFileImage" />}
            onClick={() => this.imageRef.current.click()}
            disabled
          />
          <InputGroupButton
            label="Upload File"
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            onChange={() => { }}
            value=""
            btnText={<FaIcon iconname="faFileUpload" />}
            onClick={() => this.fileRef.current.click()}
            disabled
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
            label="Weight" 
            name="weight"
            id="weight"
            onChange={(e) => this.props.handleChangeWeight(e.target.value)}
            value={this.props.built.estWeight}
          // onChange={e =>
          //   this.props.handleChangeStructureName(e.target.value)
          // }
          //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
          <div style={{ display: "none" }}>
            <FileInput innerRef={this.fileRef} onChange={() => { }} />
            <ImageInput innerRef={this.imageRef} onChange={() => { }} />
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
            onChange={(e) => this.props.handleChangeRemarks(e.target.value)}
            value={this.props.built.rmark}
          />
        </SimpleRow>
      </Modal>
    )
  }
}

export default ViewMoreModal;