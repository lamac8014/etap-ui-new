import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import InputGroupButton from "../../common/forms/InputGroupButton";
import FaIcon from "../../common/FaIcon";
import DateInput from "../../common/forms/DateInput";
import Button from "../../common/forms/Button";

class BuiltMoreEdit extends Component {
    fileInputRef = React.createRef();
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Built Attributes - Details`}
                showModal={this.props.showBuiltEditMoreModal}
                handleClose={this.props.closeBuiltEditMoreModal}
                size="xl"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}

                <SimpleRow>
                    <TextInput disabled
                        size="col-md-4"
                        label="DC.No"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="dcNo"
                        id="dcNo"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-4"
                        label="Strut. Name"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="strcutureName"
                        id="strcutureName"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput disabled
                        size="col-md-4"
                        label="Strut. Code"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="structureCode"
                        id="structureCode"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                </SimpleRow>

                <SimpleRow>
                    <TextInput
                        size="col-md-4"
                        label="Act. Weight"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="weight"
                        id="weight"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    <DateInput
                        size="col-md-4"
                        label="Exp.Rel. Date"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="dcNo"
                        id="dcNo"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput
                        size="col-md-4"
                        label="Remarks"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="remarks"
                        id="remarks"
                        // onChange={e =>
                        //   this.props.handleChangeStructureName(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureTypeName}
                        placeholder="Auto Fetch"
                    />

                </SimpleRow>

                <SimpleRow>
                    <TextInput
                        size="col-md-4"
                        label="Act.WBS"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="actualWbs"
                        id="actualWbs"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput
                        size="col-md-4"
                        label="Fabrication Yr"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="fabricationYear"
                        id="fabricationYear"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                    <TextInput
                        size="col-md-4"
                        label="Reusability"
                        labelSize="col-md-4"
                        fieldSize="col-md-8"
                        name="reusability"
                        id="reusability"
                        // onChange={e =>
                        //   this.props.handleChangeStructureFamily(e.target.value)
                        // }
                        //value={this.props.assignStructure.assignStructureViewMore.strcutureName}
                        placeholder="Auto Fetch"
                    />
                </SimpleRow>

                <SimpleRow>
                    <InputGroupButton
                        size="col-md-4"
                        fieldSize="col-md-9"
                        onChange={() => { }}
                        value="O17078-Q-BR-CM-FB-1713"
                        btnText={<FaIcon iconName="faFileUpload" />}
                        onClick={() => this.fileInputRef.current.click()}
                    />
                    <InputGroupButton
                        size="col-md-4"
                        fieldSize="col-md-9"
                        onChange={() => { }}
                        value="O17078-Q-BR-CM-FB-1713"
                        btnText={<FaIcon iconName="faFileUpload" />}
                        onClick={() => this.fileInputRef.current.click()}
                    />
                </SimpleRow>
                <hr />
                <SimpleRow className="d-flex justify-content-center">
                    <Button
                        btnText="SAVE"
                        onClick={() => { }}
                        btnType="btn-primary mr-3"
                    />
                    <Button
                        btnText="DISCARD"
                        onClick={() => { }}
                        btnType="btn-danger mr-3"
                    />
                </SimpleRow>
            </Modal>
        );
    }
}

export default BuiltMoreEdit;
