import React, { Component } from "react";

class TextArea extends Component {
	render() {
		return (
			<div className={this.props.size}>
				<div className="form-group">
					<label className={this.props.labelSize}>{this.props.label}</label>
					<textarea
						cols="90"
						rows="5"
						className={`${this.props.fieldSize} form-control`}
						placeholder={this.props.placeholder}
						onChange={(e) => this.props.onChange(e)}
						value={this.props.value}
					></textarea>
				</div>
			</div>
		);
	}
}

export default TextArea;
