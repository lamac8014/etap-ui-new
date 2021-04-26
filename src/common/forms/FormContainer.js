import React, { Component } from "react";

class FormContainer extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-12 grid-margin">
					<div
						className={`card ${
							this.props.className ? this.props.className : ""
						}`}
					>
						<div className="card-body">
							<h4 className="card-title">{this.props.formTitle}</h4>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FormContainer;
