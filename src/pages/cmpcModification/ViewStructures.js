import React, { Component } from "react";
// import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { structureMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import FaIcon from "../../common/FaIcon";

class ViewStructures extends Component {
	componentDidMount() {
		this.props.getStructureTableData();
	}
	render() {
		return (
			<PageContainer>
				<SimpleCard>
					{/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
					<SimpleRow>
						<SearchableDropDown
							size="col-md-4"
							label="Project"
							name="projectName"
							id="projectName"
							selectOptions={[
								{ label: "BMRC RT 01", value: "1" },
								{ label: "BMRC RT 02", value: "2" },
							]}
							labelSize="col-sm-3"
							fieldSize="col-sm-9"
							// onChange={(obj) =>
							//   this.props.handleChangeComponentProjectName(obj)
							// }
							// value={this.props.scr.projName}
						/>
						<SearchableDropDown
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9 "
							label="Structure"
							name="structureName"
							id="structureName"
							selectOptions={[
								{ label: "Launching Girders", value: "1" },
								{ label: "Tresles", value: "2" },
							]}
							// onChange={(obj) =>
							//   this.props.handleChangeComponentStructureName(obj)
							// }
							// value={this.props.scr.structName}
						/>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9 "
							label="Struct. Family"
							name="structureName"
							id="structureName"
							// value={this.props.scr.strcutureType}
							// value="LG&Bridge Builders"
							disabled
						/>
					</SimpleRow>
					<SimpleRow>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3"
							fieldSize="col-md-9 "
							label="IC"
							name="ic"
							id="ic"
							// value={this.props.scr.ic}
							// value="BNF IC"
							// placeholder="Auto Fetch"
							disabled
						/>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3 "
							fieldSize="col-md-9 "
							label="BU"
							name="bu"
							id="bu"
							// value={this.props.scr.bu}
							// value="Metro"
							// placeholder="Auto Fetch"
							disabled={true}
						/>

						<TextInput
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9 "
							label="Struct. Code"
							name="structureCode"
							id="structureCode"
							// value={this.props.scr.structureCode}
							placeholder="Auto Fetch"
							disabled
						/>
					</SimpleRow>
					<SimpleRow>
						<TextInput
							label="Component"
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9"
							name="noOfComponents"
							id="noOfComponents"
							// onChange={(e) =>
							//   this.props.handleChangeNoOfComponents(e.target.value)
							// }
							// value={this.props.scr.noOfComponents}
							placeholder="No of Components"
						/>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3"
							fieldSize="col-md-9 "
							label="Est. Weight"
							name="estimatedWeight"
							id="estimatedWeight"
							// onChange={(e) =>
							//   this.props.handleChangeEstimatedWeight(e.target.value)
							// }
							// value={this.props.scr.estimatedWeight}
						/>
						<InputGroupButton
							size="col-md-4"
							label="Dr.No"
							labelSize="col-md-3"
							fieldSize="col-md-9"
							// onChange={(e) => {
							//   this.props.handleChangeComponentDrawingNumber(e.target.value);
							// }}
							// value={this.props.scr.drawingNum}
							btnText={<FaIcon iconname="faFileAlt" />}
							// onClick={() => this.fileInputRef.current.click()}
						/>
					</SimpleRow>

					{/* {this.props.cmpc.structureData && ( */}
					<CustomDataTable
						metaData={structureMetaData((id, name, code) => {
							this.props.redirectToComponentPage(id, name, code);
						})}
						bodyData={this.props.cmpc.structureData}
					/>
					{/* )} */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewStructures;
