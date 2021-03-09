import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";

class TwccDispatchViewMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title={`TWCC Dispatch - Details`}
        showModal={this.props.showAddComponentModal}
        handleClose={this.props.closeTwccDispatchViewMoreModal}
        size="lg"
        isShowFooter={false}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.isLoading && <Loader />}

        <FormRow>
          <TextInput disabled
            size="col-md-3"
            fieldSize="col-md-12"
            label="Quantity"
            name="quantity"
            id="quantity"
          // onChange={e =>
          //   this.props.handleChangeStructureName(e.target.value)
          // }
          //value={this.props.assignStructure.assignStructureViewMore.structureId}
          />
        </FormRow>
        <h4>Structure Attributes :</h4>
        <FormRow>
          <TextInput disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="strcutureName"
            id="strcutureName"
          // onChange={e =>
          //   this.props.handleChangeStructureFamily(e.target.value)
          // }
          //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
          />
          <TextInput disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="structureFamily"
            id="structureFamily"
          // onChange={e =>
          //   this.props.handleChangeStructureName(e.target.value)
          // }
          //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
          <TextInput disabled
            size="col-md-3"
            fieldSize="col-md-12"
            name="structureFamily"
            id="structureFamily"
          // onChange={e =>
          //   this.props.handleChangeStructureName(e.target.value)
          // }
          //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
          />
        </FormRow>


      </Modal>
    );
  }
}

export default TwccDispatchViewMore;
