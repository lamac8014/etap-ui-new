import React, { Component } from "react";
import Button from "../../common/forms/Button";
import { LOGO } from "../../assets/images/index.js";

class Login extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }
  // redirectToDashboard = (e) => {
  //   e.preventDefault();

  //   this.props.history.push("dashboard");
  // };
  redirectToForgot = (e) => {
    e.preventDefault();
    this.props.history.push("forgot");
  };
  render() {
    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="imgg d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src={LOGO} alt="logo" />
                  </div>

                  <form className="pt-3">
                    <div className="form-group">
                      <i className="fa fa-user icon"></i>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        onChange={(e) =>
                          this.props.handleUsernameChange(e.target)
                        }
                        value={this.props.auth.username}
                      />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-key icon"></i>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) =>
                          this.props.handlePasswordChange(e.target)
                        }
                        value={this.props.auth.password}
                      />
                    </div>
                    {this.props.auth.isLoginError && (
                      <p className="text-danger">
                        {this.props.auth.loginMessage}
                      </p>
                    )}
                    <div className="mt-3">
                      <Button
                        onClick={(e) => this.props.authenticateUser(e)}
                        btnType="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        btnText="Sign In"
                      />
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <a
                        href="#"
                        className="auth-link text-black"
                        onClick={this.redirectToForgot}
                      >
                        Forgot password?
                      </a>
                    </div>
                    {/* <div className="mb-2">
                                            <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                                <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                                        </div> */}
                    {/* <div className="text-center mt-4 font-weight-light">
                      Don't have an account?
                      <a href="register.html" className="text-primary">
                        Create
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
