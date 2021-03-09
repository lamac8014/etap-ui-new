import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";

class ViewMoreCmpcReuse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Scrap - Details`}
                showModal={this.props.showCmpcViewMoreModel}
                handleClose={this.props.closeCmpcViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}

                <p>Structure Attributes</p>
                <SimpleRow>
                <Col6 size="col-md-12">
                    <TextInput disabled
                        size="col-md-4"
                        fieldSize="col-md-12"
                        name="attr1"
                        id="attr1"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-4"
                        fieldSize="col-md-12"
                        name="attr2"
                        id="attr2"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-4"
                        fieldSize="col-md-12"
                        name="attr3"
                        id="attr3"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    </Col6>

                </SimpleRow>
                <SimpleRow>
                <Col6 size="col-md-12">
                    <TextInput
                        size="col-md-4"
                        fieldSize="col-md-12"
                        name="quantity"
                        id="quantity"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    </Col6>

                </SimpleRow>


            </Modal>
        );
    }
}

export default ViewMoreCmpcReuse;
