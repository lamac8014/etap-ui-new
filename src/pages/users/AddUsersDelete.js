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

class AddUsers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const subprop = this.props.addusers;
    return (
      <>
        <ContentLoader>
          <FormContainer formTitle={'Add Users'}>
            <FormRow>
              <Button
                btnText="Edit User Status"
                onClick={this.props.editUserStatus}
                btnType="primary"

              />
            </FormRow>

            <FormRow>
              <TextInput
                label="First Name"
                name="firstName"
                id="firstName"
                onChange={e =>
                  this.props.handleChangeFirstName(e.target.value)
                }
              // value={subprop.firstName}
              />
              <TextInput
                label="Last Name"
                name="lastName"
                id="lastName"
                onChange={e =>
                  this.props.handleChangeLastName(e.target.value)
                }
              // value={subprop.lastName}
              />
            </FormRow>
            <FormRow>
              <TextInput
                label="E-mail"
                name="email"
                id="email"
                onChange={e =>
                  this.props.handleChangeEmail(e.target.value)
                }
              // value={subprop.email}
              />
              <TextInput
                label="PS.No"
                name="psNo"
                id="psNo"
                onChange={e =>
                  this.props.handleChangePsNo(e.target.value)
                }
              // value={subprop.psNo}

              />
            </FormRow>
            <FormRow>
              <SimpleDropDown
                label="Project"
                name="project"
                onChange={e => this.props.handleChangeProject(e.target.value)}
              // value={subprop.project}
              />
            </FormRow>
            <FormRow>
              <TextInput
                size="col-md-4"
                label="BU"
                name="businessUnit"
                id="businessUnit"
                onChange={e =>
                  this.props.handleChangeBusinessUnit(e.target.value)
                }
                // value={subprop.businessUnit}
                placeholder="Auto Fetch"

              />
              <TextInput
                size="col-md-4"
                label="Segment"
                name="segment"
                id="segment"
                onChange={e =>
                  this.props.handleChangeSegment(e.target.value)
                }
                // value={subprop.segment}
                placeholder="Auto Fetch"
              />
              <TextInput
                size="col-md-4"
                label="IC"
                name="independentCompany"
                id="independentCompany"
                onChange={e =>
                  this.props.handleIndependentCompany(e.target.value)
                }
                // value={subprop.independentCompany}
                placeholder="Auto Fetch"
              />
            </FormRow>

            <FormRow>
              <SimpleDropDown
                label="Role"
                name="role"
                onChange={e => this.props.handleChangeRole(e.target.value)}
              // value={subprop.role}
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

export default AddUsers;
