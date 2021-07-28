import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

class ViewMoreModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				title="Attribute Details"
				showModal={this.props.siteDispatch.showViewMore}
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
							<th scope="col">Attributes</th>
							<th scope="col">UOM</th>
							<th scope="col">value</th>
						</tr>
					</thead>
					<tbody>
						{this.props.siteDispatch.currentStructure
							.structureAttributesValue &&
							JSON.parse(
								this.props.siteDispatch.currentStructure
									.structureAttributesValue
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
				{/* <SimpleRow>
          <TextInput
            disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="strcutureName"
            id="strcutureName"
            // onChange={e =>
            //   this.props.handleChangeStructureFamily(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
          />
          <TextInput
            disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="structureFamily"
            id="structureFamily"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
          <TextInput
            disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="structureFamily"
            id="structureFamily"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
        </SimpleRow> */}
			</Modal>
		);
	}
}

export default ViewMoreModal;
