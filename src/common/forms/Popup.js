import React, { Component } from "react";
import { ToastContainer, toast, Flip, Slide, Bounce } from "react-toastify";

class Popup extends Component {
  constructor() {
    super();
    this.toastId = React.createRef();
    this.buttonRef = React.createRef();
  }
  componentDidMount() {
    this.buttonRef.current.click();
  }

  notify = (popupType) => {
    switch (popupType) {
      case "success":
        if (!toast.isActive(this.toastId.current)) {
          this.toastId.current = toast.success(this.props.message, {
            onClose: this.props.onClose,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
        break;
      case "error":
        if (!toast.isActive(this.toastId.current)) {
          this.toastId.current = toast.error(this.props.message, {
            onClose: this.props.onClose,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
        break;
      default:
        if (!toast.isActive(this.toastId.current)) {
          this.toastId.current = toast.info(this.props.message, {
            onClose: this.props.onClose,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
        break;
    }
  };

  render() {
    return (
      <div>
        <button
          ref={this.buttonRef}
          onClick={() => this.notify(this.props.type)}
          style={{ display: "none" }}
        >
          Notify
        </button>
        <ToastContainer transition={Slide} hideProgressBar={true} />
      </div>
    );
  }
}

export default Popup;
