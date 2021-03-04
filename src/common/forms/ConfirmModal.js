// import external modules
import React, { Component } from "react";
import { Button } from "reactstrap";
import swal from "sweetalert";

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.sowlOptions = this.sowlOptions.bind(this);
  }
  buttonRef = React.createRef();

  componentDidMount() {
    this.buttonRef.current.click();
  }

  sowlOptions() {
    swal({
      title: `${this.props.title}`,
      text: `${this.props.frontText}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.props.deleteAction();
        swal(`${this.props.confirmText}`, {
          icon: "success",
        });
      } else {
        swal(`${this.props.cancelText}`, {
          icon: "error",
        });
      }
      this.props.closeAction();
    });
  }

  render() {
    return (
      <Button
        innerRef={this.buttonRef}
        onClick={this.sowlOptions}
        color="primary"
        style={{ display: "none" }}
      >
        Success or Cancel
      </Button>
    );
  }
}

export default ConfirmModal;
