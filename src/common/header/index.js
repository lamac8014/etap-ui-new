import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import windowSize from "react-window-size";
import Path from "../../configure";
import UserProfile from "./component/settings";
import MainSearch from "./component/search";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { LOGO } from "../../assets/images";
import { logout } from "../../utils/auth";

class Header extends Component {
  state = {
    navOpen: true,
  };
  toggle = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  componentDidMount() {
    if (this.props.windowWidth < 992) {
      this.setState({ navOpen: true });
    }
  }
  render() {
    // console.log("props.....", this.props);
    return (
      <header className="navbar pcoded-header navbar-expand-lg navbar-light header-blue">
        <div className="m-header">
          <Link
            to="#"
            style={{ zIndex: 9999 }}
            onClick={() => this.props.collapseMenuRes()}
            className={classnames("mobile-menu", {
              on: this.props.resMenu,
            })}
          >
            <span></span>
          </Link>
          <Link to={Path.defaultPath} className="b-brand">
            <div
              className="b-bg"
              style={{
                background: "transparent",
              }}
            >
              <img src={LOGO} alt="" />
            </div>
            {/* <span className="b-title">
              <img
                src={LOGOTEXT}
                alt=""
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </span> */}
          </Link>
        </div>
        <Link to="#" className="mobile-menu" id="mobile-header">
          <i className="feather icon-more-horizontal"></i>
        </Link>
        <div className="collapse navbar-collapse">
          <Link onClick={this.toggle} className="mob-toggler" to="#"></Link>
          {this.props.windowWidth < 992 ? (
            <React.Fragment>
              {this.props.layout !== "horizontal" ? (
                <ul
                  className="navbar-nav mr-auto"
                  style={{ display: `${!this.state.navOpen ? `none` : ``}` }}
                >
                  <li>
                    <div className="page-header">
                      <div className="page-block">
                        <Row className="align-items-center">
                          <Breadcrumb />
                        </Row>
                      </div>
                    </div>
                  </li>
                </ul>
              ) : null}
              <ul
                className="navbar-nav ml-auto"
                style={{ display: `${this.state.navOpen ? `none` : `block`}` }}
              >
                {/* <li className="nav-item">
                  <MainSearch />
                </li> */}
                <li>
                  <UserProfile />
                </li>
              </ul>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {this.props.layout !== "horizontal" ? (
                <ul className="navbar-nav mr-auto">
                  <li>
                    <div className="page-header">
                      <div className="page-block">
                        <Row className="align-items-center">
                          <Breadcrumb />
                        </Row>
                      </div>
                    </div>
                  </li>
                </ul>
              ) : null}
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <MainSearch />
                </li> */}
                {/* <li>
                  <Link
                    to="#"
                    className="displayChatbox"
                    onClick={() => this.props.openChatBox()}
                  >
                    <i className="icon feather icon-mail"></i>
                  </Link>
                </li> */}
                <li>
                  <UserProfile {...this.props} />
                </li>
              </ul>
            </React.Fragment>
          )}
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  navUpdate: state.Navigation.navUpdate,
});
// const mapDispatchToDispatch = {
//   openChatBox,
// };

export default connect(mapStateToProps, null)(windowSize(Header));
