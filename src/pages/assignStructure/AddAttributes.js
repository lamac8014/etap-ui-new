import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import { Input } from "reactstrap";
import { Table } from "react-bootstrap";
import FormRow from "../../common/forms/FormRow";

 class AddAttributes extends Component {
	
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
						value={this.props.typeOfInputValue.label}
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
			</>
		);
	}
}

export default AddAttributes;
