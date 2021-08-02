import React, { Component } from "react";
import Col6 from "./Col6";
import Select from "react-select";

const customStyles = {
  input: () => ({
    width: 500,
    //background: 'white',
    height: 38,
    radius: 40,
    display: "flex",
    alignItems: "center",
    //borderRadius: 3,
  }),
};
class SearchableDropdown extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div className="form-group row">
          {this.props.label && (
            <label
              className={`${
                this.props.labelSize ? this.props.labelSize : "col-sm-3"
              } col-form-label`}
            >
              {this.props.label}
            </label>
          )}
          <div
            className={`${
              this.props.fieldSize ? this.props.fieldSize : "col-sm-9"
            }`}
          >
            <Select
              styles={customStyles}
              className={this.props.className}
              onChange={(e) => this.props.onChange(e)}
              placeholder={this.props.placeholder}
              value={this.props.value}
              options={this.props.selectOptions}
              isSearchable={true}
              isMulti={this.props.isMulti}
              isDisabled={this.props.isDisabled}
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default SearchableDropdown;
