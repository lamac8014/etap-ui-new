import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import InputGroupButton from "../../common/forms/InputGroupButton";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";

class FabCostModal extends Component {
    constructor() {
        super();
    }
    componentDidMount = () => {
    };
    render() {
        return (
            <Modal
                title="Add Fabrication Cost"
                showModal={this.props.showFabEditModal}
                handleClose={this.props.closeFabEditModal}
                size="md"
                isShowFooter={true}
            >
                <FormRow>
                    <TextInput
                        label="Fabrication Cost"
                        size="col-md-12 "
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                    // value={this.props.fabCost.fabCost}
                    // onChange={(e) =>
                    //     this.props.handleChangeFabricationCost(e.target.value)
                    // }
                    />
                </FormRow>
            </Modal>
        );
    }
}

export default FabCostModal;
