import React, { Component } from "react";
import { Link } from "react-router-dom";
import FaIcon from "../FaIcon";

class Footer extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.year = date.getFullYear();
  }
  render() {
    return (
      <div className="footer-fab">
        <div className="b-bg">
          <FaIcon iconname="faQuestion" />
        </div>
        <div className="fab-hover">
          <ul className="list-unstyled">
            <li>
              <Link
                to="#"
                data-text="UI Kit"
                target="_blank"
                className="btn btn-icon btn-rounded btn-info m-0"
              >
                <i className="feather icon-layers"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                data-text="UI Kit"
                target="_blank"
                className="btn btn-icon btn-rounded btn-primary m-0"
              >
                <i className="feather icon feather icon-book"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                data-text="By Now"
                target="_blank"
                className="btn btn-icon btn-rounded btn-success btn-envato m-0 p-0"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
