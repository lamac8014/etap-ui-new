import React, { Component } from "react";
import { FormGroup, Label, Col } from "reactstrap";
import classnames from "classnames";

class Radio extends Component {
	render() {
		return (
			<FormGroup
				className={classnames({
					"d-inline": this.props.inline === true,
				})}
			>
				<div
					className={classnames(`radio d-inline radio-${this.props.color}`, {
						"radio-fill": this.props.fill === true,
					})}
				>
					<input
						type="radio"
						name={this.props.name}
						id={this.props.id}
						value={this.props.value}
						onChange={this.props.onChange}
						checked={this.props.checked}
					/>
					<Label for={this.props.id} className="cr">
						{this.props.label}
					</Label>
				</div>
			</FormGroup>
			// <div className="form-check float-right">
			//   <label className="form-check-label">
			//     <input
			//       type="radio"
			//       className="form-check-input"
			//       value={this.props.value}
			//       checked={this.props.checked}
			//       onChange={this.props.onChange}
			//     />
			//     {this.props.label}
			//     <i className="input-helper"></i>
			//   </label>
			// </div>
		);
	}
}

export default Radio;
