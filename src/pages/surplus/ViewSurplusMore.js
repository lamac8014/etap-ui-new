import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";

class ViewSurplusMore extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title="Attribute Details"
				showModal={this.props.surplus.showViewMore}
				handleClose={this.props.closeViewMoreModal}
				size="lg"
				isShowFooter={false}
			>
				{/* {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />} */}
				<h4>Structure Attributes :</h4>
				<table className="table my-3">
					<thead className="thead-light">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Capacity</th>
							<th scope="col">UOM</th>
							<th scope="col">value</th>
						</tr>
					</thead>
					<tbody>
						{this.props.surplus.surplusViewMore.structureAttributesValue &&
							JSON.parse(
								this.props.surplus.surplusViewMore.structureAttributesValue
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
			</Modal>
		);
	}
}

export default ViewSurplusMore;
