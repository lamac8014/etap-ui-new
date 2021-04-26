import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
import IconButton from "../../common/forms/IconButton";
import { transformDropDownData } from "../../utils/dataTransformer";
import Col6 from "../../common/forms/Col6";
import TextInput from "../../common/forms/TextInput";

class BUList extends Component {
	render() {
		return (
			<Col6 size="col-md-4">
				<TextInput
					size="col-md-12"
					fieldSize="col-md-10 px-0"
					placeholder="BU Name"
					name={this.props.index}
					id={this.props.index}
					onChange={(e) => this.props.onBUNameChange(e, this.props.index)}
					value={this.props.buName}
					readonly
					iconSize="col-md-2 d-flex justify-content-center"
					iconname="faTimesCircle"
					onClick={() => this.props.onBUNameRemove(this.props.index)}
					// rightIcon={
					//   <IconButton
					//     className="px-0"
					//     iconName="faTimesCircle"
					//     index={this.props.index}
					//     onClick={() => this.props.onBUNameRemove(this.props.index)}
					//   />
					// }
				/>
			</Col6>
		);
	}
}

{
	/* <>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="BU Name"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onBUNameChange(e, this.props.index)}
            value={this.props.buName}
            readonly
          />
        </div>
        <div className="col-sm-1">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onBUNameRemove(this.props.index)}
          />
        </div>
      </> */
}

export default BUList;
