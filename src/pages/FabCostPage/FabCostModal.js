import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import InputGroupButton from "../../common/forms/InputGroupButton";
import NumberInput from "../../common/forms/NumberInput";
import Modal from "../../common/Modal";

class FabCostModal extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {};
  render() {
    return (
      <Modal
        title="Add Fabrication Cost"
        showModal={this.props.showFabEditModal}
        handleClose={this.props.closeFabEditModal}
        handleSave={this.props.addComponentCost}
        size="md"
        isShowFooter={true}
        disableSave={this.props.fabCost.cost ? false : true}
      >
        <FormRow>
          <NumberInput
            label="Fabrication Cost"
            size="col-md-12 "
            labelSize="col-md-4"
            fieldSize="col-md-8"
            value={this.props.fabCost.cost}
            onChange={(e) => this.props.handleChangeFabcost(e.target.value)}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default FabCostModal;
