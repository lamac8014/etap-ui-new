import React, { Component } from "react";
import { Table } from "react-bootstrap";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";
import IconButton from "../../common/forms/IconButton";
import AddAttributeValueModal from "./AddAttributeValueModal";
// import Popup from "../../common/forms/Popup";

class StructureAttributesTable extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorType: "",
      currentAttr: {},
    };
  }
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  render() {
    return (
      <>
        <AddAttributeValueModal
          {...this.props}
          // showModal={this.props.scr.showAttributeValueModal}
          // handleClose={() => {
          //   this.props.showAttributeValueModal(false);
          // }}
          // currentAttr={this.state.currentAttr}
          // handleValueChange={this.props.onChange}
        />
        <FormRow>
          <h4 className="card-title mr-auto ml-3 mb-4">{this.props.title}</h4>
        </FormRow>
        <Table bordered striped size="sm">
          <thead>
            <tr>
              <th>
                <strong>Description</strong>
              </th>
              <th>
                <strong>UoM</strong>
              </th>
              <th>
                <strong>Value</strong>
              </th>
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((attribute) => (
              <tr key={attribute.id}>
                <td>{attribute.name}</td>
                <td>{attribute.uom}</td>
                <td>{attribute.value ? attribute.value : 0}</td>
                <td>
                  <IconButton
                    iconname="faEdit"
                    onClick={() => {
                      this.props.setCurrentAttribute(
                        JSON.parse(JSON.stringify(attribute))
                      );
                      this.props.showAttributeValueModal(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {/* {this.state.error && (
            <Popup
              type="error"
              message="Type Of Input is Incorrect"
              onClose={() => {
                this.setState({
                  error: false,
                  errorType: "",
                });
              }}
            />
          )} */}
        </Table>
      </>
    );
  }
}

export default StructureAttributesTable;
