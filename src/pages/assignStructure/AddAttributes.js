import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { Input } from "reactstrap";
import { Table } from "react-bootstrap";
import FormRow from "../../common/forms/FormRow";

 class AddAttributes extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 	  error: false,
	// 	  errorType: "",
	// 	  currentAttr: {},
	// 	};
	//   }
	//   render() {
	// 	return (
	// 	  <>
	// 		<FormRow>
	// 		  <h4 className="card-title mr-auto ml-3 mb-4">{this.props.title}</h4>
	// 		</FormRow>
	// 		<Table bordered striped size="sm">
	// 		  <thead>
	// 			<tr>
	// 			  <th>
	// 				<strong>Description</strong>
	// 			  </th>
	// 			  <th>
	// 				<strong>UoM</strong>
	// 			  </th>
	// 			  <th>
	// 				<strong>Value</strong>
	// 			  </th>
	// 			</tr>
	// 		  </thead>
	// 		  <tbody>
	// 			{this.props.bodyData.map((attribute) => (
	// 			  <tr key={attribute.id}>
	// 				<td>{attribute.name}</td>
	// 				<td>{attribute.uom}</td>
	// 				<td>{attribute.value ? attribute.value : 0}</td>
	// 			  </tr>
	// 			))}
	// 		  </tbody>
	// 		</Table>
	// 	  </>
	// 	);
	//   }
	// }
	
	render() {
		return (
			<>
				<div className="col-sm-4">
					<Input
						type="text"
						className="form-control"
						placeholder="Name"
						name={this.props.index}
						id={this.props.index}
						//onChange={(e) => this.props.onNameChange(e, this.props.index)}
						value={this.props.nameValue}
					/>
				</div>
				<div className="col-sm-3">
					<Input
						type="text"
						className="form-control"
						placeholder="TypeOfInput"
						name={this.props.index}
						id={this.props.index}
						//onChange={(e) =>
						//	this.props.onTypeOfInputChange(e, this.props.index)
						//}
						value={this.props.typeOfInputValue}
					/>
				</div>

				<div className="col-sm-3">
					<Input
						type="text"
						className="form-control"
						placeholder="UoM"
						name={this.props.index}
						id={this.props.index}
						//onChange={(e) => this.props.onUoMChange(e, this.props.index)}
						value={this.props.uomValue}
					/>
				</div>
				{/* <div className="col-sm-2">
					<IconButton
						iconname="faTimesCircle"
						index={this.props.index}
						onClick={() => this.props.onAttributeRemove(this.props.index)}
					/>
				</div> */}
			</>
		);
	}
}

export default AddAttributes;
