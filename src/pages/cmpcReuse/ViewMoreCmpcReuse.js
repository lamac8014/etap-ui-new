import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import InputGroupButton from "../../common/forms/InputGroupButton";
import Loader from "../../common/Loader";
import FaIcon from "../../common/FaIcon";
import Modal from "../../common/Modal";

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
                    <InputGroupButton
                        size="col-md-4"
                        label="Dr.No"
                        labelSize="col-md-3"
                        fieldSize="col-md-9"
                        onChange={() => { }}
                        value="O17078-Q-BR-CM-FB-1713"
                        btnText={<FaIcon iconName="faFileAlt" />}
                        onClick={() => this.fileInputRef.current.click()}
                    />
                </FormRow>


            </Modal>
        );
    }
}

export default ViewMoreCmpcReuse;
