import React, { Component } from "react";
import { componentMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import ModifyComponentsModal from "./ModifyComponentsModal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import FaIcon from "../../common/FaIcon";

class ViewAssignComponent extends Component {
	componentDidMount() {
		let dispStructId = window.atob(this.props.match.params.dispStructId);
		let dispReqId = window.atob(this.props.match.params.dispReqId);
		let projStrId = window.atob(this.props.match.params.projStrId);
		let structName = window.atob(this.props.match.params.structName);
		let structCode = window.atob(this.props.match.params.structCode);
		let projectName = window.atob(this.props.match.params.project);
		let dcNumber = window.atob(this.props.match.params.dcNumber);

		this.props.getComponentData(
			dispStructId,
			dispReqId,
			projStrId,
			structName,
			structCode,
			projectName,
			dcNumber
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
							value={this.props.cmpc.projectName}
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
							value={this.props.cmpc.structName}
						/>
						<TextInput
							size="col-md-4"
							labelSize="col-md-3 pr-0"
							fieldSize="col-md-9 "
							label="Struct. Code"
							name="structureCode"
							id="structureCode"
							value={this.props.cmpc.structCode}
							placeholder="Auto Fetch"
							disabled
						/>
					</SimpleRow>
					{/* <SimpleRow>
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
					</SimpleRow> */}
					<ModifyComponentsModal {...this.props} />
					{/* {this.props.assignStructure.assignComponentList.components && ( */}
					<CustomDataTable
						metaData={componentMetaData((id) => this.props.handleEdit(id))}
						bodyData={this.props.cmpc.componentData}
					/>

					{/* } */}
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ViewAssignComponent;
