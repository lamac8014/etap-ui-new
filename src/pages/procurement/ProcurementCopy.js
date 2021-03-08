import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import FileInput from '../../common/forms/FileInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import Radio from '../../common/forms/Radio';
import Loader from '../../common/Loader';
import DataTable from '../../common/DataTable';



import DateInput from '../../common/forms/DateInput';

class Procurement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const subprop = this.props.procurement;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Procurement'}>
                        <FormRow>
                            <SimpleDropDown
                                label="Structure Family"
                                name="structureFamily"
                                id="structureFamily"
                                onChange={e =>
                                    this.props.handleChangeProcurementStructureFamily(e.target.value)
                                }
                            // value={subprop.structureFamily}
                            />
                            <TextInput
                                label="Vendor"
                                name="vendor"
                                id="vendor"
                                onChange={e =>
                                    this.props.handleChangeProcurementVendor(e.target.value)
                                }
                            // value={subprop.vendor}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Structure ID"
                                name="structureId"
                                id="structureId"
                                onChange={e =>
                                    this.props.handleChangeProcurementStructureId(e.target.value)
                                }
                            // value={subprop.structureId}
                            placeholder="Auto Fetch"
                            />
                            <TextInput
                                label="Project"
                                name="project"
                                id="project"
                                onChange={e =>
                                    this.props.handleChangeProcurementProject(e.target.value)
                                }
                            // value={subprop.project}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="No of Components"
                                name="numberOfComponents"
                                id="numberOfComponents"
                                onChange={e =>
                                    this.props.handleChangeProcurementNumberOfComponents(e.target.value)
                                }
                            // value={subprop.numberOfComponents}
                            placeholder="Auto Fetch"
                            />
                            <TextInput
                                label="Fabrication Cost"
                                name="fabricationCost"
                                id="fabricationCost"
                                onChange={e =>
                                    this.props.handleChangeFabricationCost(e.target.value)
                                }
                            // value={subprop.fabricationCost}
                            />

                        </FormRow>
                        <FormRow>
                            <TextInput
                                label="Quantity Requested"
                                name="quantityRequested"
                                id="quantityRequested"
                                onChange={e =>
                                    this.props.handleChangeQuantityRequested(e.target.value)
                                }
                            // value={subprop.quantityRequested}
                            />

                        </FormRow>


                        <br />


                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveSubContractorData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetSubContractorData}
                        />


                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default Procurement;
