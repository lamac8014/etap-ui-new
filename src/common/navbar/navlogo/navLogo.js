import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Path from "../../../configure";
import { LOGO } from "../../../assets/images";

class NavLogo extends Component {
  render() {
    return (
      <div className="navbar-brand header-logo">
        <Link to={Path.defaultPath} className="b-brand">
          {/* <div className="b-bg">F</div>
          <span className="b-title">Folder Structure</span> */}
          <div>
            <img src={LOGO} alt="" />
          </div>
        </Link>
        <Link
          to="#"
          onClick={() => this.props.collapseMenu()}
          className={classnames("mobile-menu", {
            on: this.props.meunCol,
          })}
        >
          <span></span>
        </Link>
      </div>
    );
  }
}

export default NavLogo;
