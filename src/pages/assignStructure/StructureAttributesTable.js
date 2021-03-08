import React, { Component } from "react";
import { Table } from "react-bootstrap";
import FaIcon from "../../common/FaIcon";
import FormRow from "../../common/forms/FormRow";
import IconButton from "../../common/forms/IconButton";
import Popup from "../../common/forms/Popup";

class StructureAttributesTable extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorType: "",
    };
  }
  renderTableHeaders = () => {
    return this.props.metaData.map((header) => <th>{header}</th>);
  };

  isNumbers = (value) => {
    const regex = /^\d+$/;
    return regex.test(value) ? true : false;
  };

  isAlphabets = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? true : false;
  };

  handleOnChange = (e, attribute) => {
    if (e.target.value !== "") {
      if (attribute.typeOfInput.id === "numeric") {
        if (this.isNumbers(e.target.value)) {
          this.props.onChange(e, attribute.id);
        } else {
          this.setState({ error: true, errorType: "numeric" });
        }
      } else if (attribute.typeOfInput.id === "alphabetic") {
        if (this.isAlphabets(e.target.value)) {
          this.props.onChange(e, attribute.id);
        } else {
          this.setState({ error: true, errorType: "alphabetic" });
        }
      } else {
        this.props.onChange(e, attribute.id);
      }
    } else {
      this.props.onChange(e, attribute.id);
    }
  };

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
                <td>{attribute.value}</td>
                <td>
                  <IconButton iconName="faEdit" onClick={() => {}} />
                </td>
              </tr>
            ))}
          </tbody>
          {this.state.error && (
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
          )}
        </Table>
      </>
    );
  }
}

export default StructureAttributesTable;
