import React, { Component } from "react";
import Col6 from "./Col6";
class PasswordInput extends Component {
	render() {
		return (
			<Col6 size={this.props.size}>
				<div className="form-group row">
					{this.props.label && (
						<label
							className={`${
								this.props.labelSize ? this.props.labelSize : "col-sm-3"
							} col-form-label`}
						>
							{this.props.label}
						</label>
					)}
					<div
						className={`${
							this.props.fieldSize ? this.props.fieldSize : "col-sm-9"
						}`}
					>
						<input
							type="password"
							name={this.props.name}
							id={this.props.id}
							value={this.props.value}
							className="form-control"
							onChange={(e) => this.props.onChange(e)}
						/>
					</div>
				</div>
			</Col6>
		);
	}
}

export default PasswordInput;
