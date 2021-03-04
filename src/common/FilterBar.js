import React, { Component } from "react";
import FormRow from "./forms/FormRow";
import IconButton from "./forms/IconButton";
import SimpleRow from "./forms/SimpleRow";

export default class FilterBar extends Component {
  render() {
    return (
      <SimpleRow className="d-flex align-items-right">
        <IconButton
          icon="faFilter"
          type="light"
          gradient
          iconColor="#758283"
          size={15}
        />
      </SimpleRow>
    );
  }
}
