import React, { Component } from "react";
import Col6 from "./Col6";

class ImageInput extends Component {
	render() {
		return (
			<Col6 size={this.props.size}>
				<div className="form-group">
					<label>{this.props.label}</label>

					<div className="input-group col-xs-12">
						<input
							ref={this.props.innerRef}
							type="file"
							name="img[]"
							accept="image/*"
							// className="file-upload-default"
							onChange={(e) => this.props.onChange(e)}
							className="form-control"
							style={{ ...this.props.style, padding: 7 }}
						/>
						{/* <span className="input-group-append">
              <button className="file-upload-browse btn btn-primary upload-btn-fix" type="button">
                Upload
              </button>
            </span> */}
					</div>
				</div>
			</Col6>
		);
	}
}

export default ImageInput;
