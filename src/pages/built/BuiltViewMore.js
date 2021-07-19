import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import AssignStructureViewMore from "../../containers/assignStructure/assignStructureViewMore";
class BuiltViewMore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Built Attributes - Details`}
                showModal={this.props.showBuiltViewMoreModal}
                handleClose={this.props.closeBuiltViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}


                <h4>Structure Attributes :</h4>
                <SimpleRow>
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        label="Structure Name"
						name="strcutureName"
						id="strcutureName"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //  value={this.props.assignStructure.assignStructureViewMore.structrueName}
                        //  value={
						//  	this.props.assignStructure.assignStructureViewMore.strcutureName
						//  }
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        label="Structure Family"
						name="structureFamily"
						id="structureFamily"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        // value={
						// 	this.props.assignStructure.assignStructureViewMore
						// 		.strcutureTypeName
						// }
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-3"
                        fieldSize="col-md-12"
                        label="Structure Status"
						name="structureStatus"
						id="structureStatus"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        // value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        //  value={this.props.assignStructure.assignStructureViewMore.status}
                        placeholder="Auto Fetch"
                    />
                </SimpleRow>


            </Modal>
        );
    }
}

export default BuiltViewMore;
