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
                title={`Surplus - Details`}
                showModal={this.props.showSurplusViewMoreModel}
                handleClose={this.props.closeSurplusViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}

                <FormRow>
                    <TextInput disabled
                        size="col-md-4"
                        label="Vendor"
                        fieldSize="col-md-12"
                        name="vendor"
                        id="vendor"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-4"
                        label="Scrap Rate"
                        fieldSize="col-md-12"
                        name="scrapRate"
                        id="scrapRate"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                   
                </FormRow>


            </Modal>
        );
    }
}

export default ViewSurplusMore;
