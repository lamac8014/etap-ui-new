import React, { Fragment, Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../../utils/auth";
// import avatar from "../../../assets/images/user/avatar-1.jpg";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentDidMount = () => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails && this.setState({
      name: `${userDetails.firstName} ${userDetails.lastName}`,
    });
  };

  render() {
    return (
      <Fragment>
        <UncontrolledDropdown className="drp-user">
          <DropdownToggle tag="a" href="#" className="dropdown-toggle">
            <i className="icon feather icon-settings"></i>
          </DropdownToggle>
          <DropdownMenu right className="profile-notification">
            <div className="pro-head">
              {/* <img src={avatar} className="img-radius" alt="User-Profile" /> */}
              <span>{this.state.name}</span>
              <Link
                to="#"
                className="dud-logout"
                title="Logout"
                onClick={() => {
                  logout()
                  this.props.history.push("/");
                }}
              >
                <i className="feather icon-log-out" />
              </Link>
            </div>
            <ul className="pro-body">
              {/* <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-settings" /> Settings
            </Link>
          </li> */}
              <li>
                <Link to="#" className="dropdown-item">
                  <i className="feather icon-user" /> Profile
                </Link>
              </li>
              {/* <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-mail" /> My Messages
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-lock" /> Lock Screen
            </Link>
          </li> */}
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}

export default withRouter(UserProfile);
