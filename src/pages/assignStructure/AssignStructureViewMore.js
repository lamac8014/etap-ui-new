import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import FormContainer from "../../common/forms/FormContainer";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import DataTable from "../../common/DataTable";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import AddAttributes from "./AddAttributes";
// import AssignStructureViewMore from "../../containers/assignStructure/assignStructureViewMore";
import StructAttriTable from "./StructureAttributesTable";
class AddStructure extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Modal
				title={`View Structure - Details`}
				showModal={this.props.showAddComponentModal}
				handleClose={this.props.closeAssignStructureViewMoreModal}
				size="xl"
				isShowFooter={false}
			>
				{console.log("isLoading", this.props.isLoading)}
				{this.props.isLoading && <Loader />}

				<SimpleRow>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Structure ID"
						name="structureId"
						id="structureId"
						// onChange={e =>
						//   this.props.handleChangeStructureName(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.structureId
						}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Structure Name"
						name="strcutureName"
						id="strcutureName"
						// onChange={e =>
						//   this.props.handleChangeStructureFamily(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.strcutureName
						}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Structure Family"
						name="structureFamily"
						id="structureFamily"
						// onChange={e =>
						//   this.props.handleChangeStructureName(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore
								.strcutureTypeName
						}
					/>
				</SimpleRow>
				<SimpleRow>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Total Weight"
						name="totalWeight"
						id="totalWeight"
						// onChange={e =>
						//   this.props.handleChangeStructureFamily(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.totalWeight
						}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Structure Status"
						name="structureStatus"
						id="structureStatus"
						// onChange={e =>
						//   this.props.handleChangeStructureName(e.target.value)
						// }
						value={this.props.assignStructure.assignStructureViewMore.status}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Current Status"
						name="currentStatus"
						id="currentStatus"
						// onChange={e =>
						//   this.props.handleChangeStructureFamily(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.currentStatus
						}
					/>
				</SimpleRow>

				<SimpleRow>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Project Name"
						name="projectName"
						id="projectName"
						// onChange={e =>
						//   this.props.handleChangeStructureName(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.projectName
						}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Project Id"
						name="projectId"
						id="projectId"
						// onChange={e =>
						//   this.props.handleChangeStructureFamily(e.target.value)
						// }
						value={this.props.assignStructure.assignStructureViewMore.projectId}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="No.Of Component"
						name="componentsCount"
						id="componentsCount"
						// onChange={e =>
						//   this.props.handleChangeStructureName(e.target.value)
						// }
						value={
							this.props.assignStructure.assignStructureViewMore.componentsCount
						}
					/>
				</SimpleRow>
				<SimpleRow>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8 "
						labelSize="col-sm-4"
						label="Drawing Number"
						name="drawingNo"
						id="drawingNo"
						// onChange={e =>
						//   this.props.handleChangeStructureFamily(e.target.value)
						// }
						value={this.props.assignStructure.assignStructureViewMore.drawingNo}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8 "
						labelSize="col-sm-4"
						label="BU Name"
						name="buName"
						id="buName"
						value={this.props.assignStructure.assignStructureViewMore.buName}
					/>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8 "
						labelSize="col-sm-4"
						label="IC Name"
						name="icName"
						id="icName"
						value={this.props.assignStructure.assignStructureViewMore.icName}
					/>
				</SimpleRow>

				<SimpleRow>
					<TextInput
						disabled
						size="col-md-4"
						fieldSize="col-md-8"
						labelSize="col-sm-4"
						label="Estimated Weight"
						name="estimatedWeight"
						id="estimatedWeight"
						value={
							this.props.assignStructure.assignStructureViewMore.estimatedWeight
						}
					/>
				</SimpleRow>
				<h4>Structure Attributes :</h4>
				<table className="table my-3">
					<thead className="thead-light">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Attributes</th>
							<th scope="col">UOM</th>
							<th scope="col">value</th>
						</tr>
					</thead>
					<tbody>
						{this.props.assignStructure.assignStructureViewMore.structureAttributes &&
							JSON.parse(
								this.props.assignStructure.assignStructureViewMore.structureAttributes
							).map((item, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>{item.name}</td>
									<td>{item.uom}</td>
									<td>{item.value}</td>
								</tr>
							))}
					</tbody>
				</table>

				{/* <label>Structure Attributes</label>
				<div className="form-group row location-row">
					 {this.props.assignStructure.assignStructureViewMoreAttributes.map(
						(e, i) => {
							return (
								<AddAttributes
									onNameChange={(e) =>
										this.props.onNameChange(e.target.value, i)
									}
									onTypeOfInputChange={(e) =>
										this.props.onTypeOfInputChange(e.target.value, i)
									}
									onUoMChange={(e) => this.props.onUoMChange(e.target.value, i)}
									index={i}
									nameValue={
										this.props.assignStructure
											.assignStructureViewMoreAttributes[i].name
									}
									typeOfInputValue={
										this.props.assignStructure
											.assignStructureViewMoreAttributes[i].typeOfInput
									}
									uomValue={
										this.props.assignStructure
											.assignStructureViewMoreAttributes[i].uom
									}
								/>
							);
						}
					)} 
				</div> */}
			</Modal>
		);
	}
}

export default AddStructure;
