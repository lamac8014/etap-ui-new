import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";
import SimpleRow from "../../common/forms/SimpleRow";

class ViewMoretwccModification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Modal
                title={`DA NO:1`}
                showModal={this.props.showScrapViewMoreModel}
                handleClose={this.props.closeScarpViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}

                <SimpleRow>
                <SearchableDropDown
                    size="col-md-6"
                    label="Site"
                    name="Site"
                    labelSize="col-sm-2"
                    fieldSize="col-sm-9"
                    selectOptions={
                    "id",
                    "name"
                    }
                    // onChange={(obj) => this.props.handleChangeICCode(obj)}
                    value={"site"}
                    />
                      <SearchableDropDown
                        size="col-md-6"
                        label="Vendor"
                        name="Vendor"
                        labelSize="col-sm-2"
                        fieldSize="col-sm-9"
                        selectOptions={
                        "id",
                        "name"
                        }
                        // onChange={(obj) => this.props.handleChangeICCode(obj)}
                        value={"site"}
                    />
                </SimpleRow>
                <br/>
                <ButtonRow position="center">
                    <Button
                        btnText="Save"
                        onClick={this.props.saveAssignStruct}
                        type="primary"
                        gradient
                    />
                     <Button
                        btnText="Discard"
                        onClick={this.props.saveAssignStruct}
                        type="primary"
                        gradient
                    />
                 </ButtonRow>

            </Modal>
        );
    }
}

export default ViewMoretwccModification;
