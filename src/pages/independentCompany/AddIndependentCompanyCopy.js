import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';
import Loader from '../../common/Loader';

class AddIndependentCompany extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.independentCompany();
    }
    render() {
        const subprop = this.props.icbu;
        return (
            <>
                <ContentLoader>
                    <FormContainer formTitle={'Add Independent Company'}>
                        <FormRow>
                            <TextInput
                                
                                label="Independent Company"
                                name="independentCompany"
                                id="independentCompany"
                                onChange={e =>
                                    this.props.handleChangeIndependentCompany(e.target.value)
                                }
                                value={subprop.independentCompany}
                            />
                            <TextInput

                                label="Business Unit"
                                name="businessUnit"
                                id="businessUnit"
                                onChange={e =>
                                    this.props.handleChangeBusinessUnit(e.target.value)
                                }
                                value={subprop.businessUnit}
                            />

                        </FormRow>


                        <Button
                            btnText="SAVE"
                            onClick={this.props.saveUsersData}
                            btnType="primary"
                        />
                        <Button
                            btnText="DISCARD"
                            btnType="cancel"
                            onClick={this.props.resetUsersData}
                        />
                    </FormContainer>
                </ContentLoader>
            </>
        );
    }
}

export default AddIndependentCompany;
