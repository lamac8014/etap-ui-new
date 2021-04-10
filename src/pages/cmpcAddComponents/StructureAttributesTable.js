import React, { Component } from "react";
import { Table } from "react-bootstrap";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";
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
  render() {
    return (
      <>
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
            </tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((attribute) => (
              <tr key={attribute.id}>
                <td>{attribute.name}</td>
                <td>{attribute.uom}</td>
                <td>{attribute.value ? attribute.value : 0}</td>
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
