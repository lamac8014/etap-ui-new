import React, { Component } from "react";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropdown";

import SimpleRow from "../../common/forms/SimpleRow";

class AddAttributes extends Component {
	render() {
		return (
			<>
				<SimpleRow>
					<div className="col-sm-4">
						<input
							type="text"
							className="form-control"
							placeholder="Name"
							name={this.props.index}
							id={this.props.index}
							onChange={(e) => this.props.onNameChange(e, this.props.index)}
							value={this.props.nameValue}
						/>
					</div>
					{/* <div className="col-sm-3"> */}
					<SearchableDropDown
						size="col-md-3"
						fieldSize="w-100"
						placeholder="TypeOfInput"
						name="typeOfInput"
						selectOptions={[
							{ id: "alphabetic", label: "alphabetic" },
							{ id: "numeric", label: "numeric" },
							{ id: "both", label: "both" },
						]}
						onChange={(obj) =>
							this.props.onTypeOfInputChange(obj, this.props.index)
						}
						value={this.props.typeOfInputValue}
					/>
					 {/* <input
            type="text"
            className="form-control"
            placeholder="TypeOfInput"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.onTypeOfInputChange(e, this.props.index)
            }
            value={this.props.typeOfInputValue}
          />  */}
					{/* </div> */}
					<div className="col-sm-3">
						<input
							type="text"
							className="form-control"
							placeholder="UoM"
							name={this.props.index}
							id={this.props.index}
							onChange={(e) => this.props.onUoMChange(e, this.props.index)}
							value={this.props.uomValue}
						/>
					</div>
					<div className="col-sm-2">
						<IconButton
							iconname="faTimesCircle"
							index={this.props.index}
							onClick={() => this.props.onAttributeRemove(this.props.index)}
						/>
					</div>
				</SimpleRow>
			</>
		);
	}
}

export default AddAttributes;
