import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SimpleRow from "../../common/forms/SimpleRow";

class ViewModal extends Component {
    constructor(props) {
        super(props);
        this.fileRef = React.createRef();
    }
    render() {
        return (
          <Modal
            title="Add"
            showModal={this.props.surplus.showSurplusViewModal}
            handleClose={this.props.closeSurplusViewModal}
            size="md"
            isShowFooter={true}
            gradient
          >
           <SimpleRow>
                <TextInput 
                    size="col-md-10 offset-md-2"
                    fieldSize="col-md-7"
                    label=""
                />
            </SimpleRow>    
        
          </Modal>
        );
    }    
}
export default ViewModal;