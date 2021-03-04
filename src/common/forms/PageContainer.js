import React, { Component } from "react";
import FormRow from "./FormRow";
class PageContainer extends Component {
  render() {
    return <FormRow>{this.props.children}</FormRow>;
  }
}

export default PageContainer;
