import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Path from "../../../configure";
import { LOGO, LOGOFULL } from "../../../assets/images";

class NavLogo extends Component {
  render() {
    return (
      <div className="navbar-brand header-logo">
        <Link to={Path.defaultPath} className="b-brand">
          {/* <div className="b-bg" style={{ background: "transparent" }}>
            <img src={LOGO} alt="" />
          </div>
          <div className="b-title">
            <img src={LOGOTEXT} alt="" />
          </div> */}
          <img src={LOGOFULL} alt="" />
        </Link>
        {/* <Link
          to="#"
          onClick={() => this.props.collapseMenu()}
          className={classnames("mobile-menu", {
            on: this.props.meunCol,
          })}
        >
          <span></span>
        </Link> */}
      </div>
    );
  }
}

export default NavLogo;
