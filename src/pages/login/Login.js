import React, { Component } from "react";
import Button from "../../common/forms/Button";
import LoginCard from "../../common/cards/LoginCard";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import { InputGroup, InputGroupAddon, Input, Form } from "reactstrap";
import Spinner from "../../common/Spinner";

export default class Login extends Component {
  constructor(){
    super()
    this.userNameRef = React.createRef();
  }
  componentDidMount() {
    this.props.checkAuthStatus();
    this.userNameRef.current.focus();
  }
  render() {
    return (
      <>
        <div className="blur-bg-images" />
        <div className="auth-wrapper">
          <div className="auth-content container">
            <SimpleRow className="align-items-center">
              <Col6 size="col-md-4 offset-md-9">
                <LoginCard className="shadow-lg rounded">
                  <SimpleRow>
                    <Col6 size="col-md-12">
                      <Form>
                        <InputGroup className="mt-3 mb-3">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <i className="feather icon-user" />
                            </span>
                          </InputGroupAddon>
                          <Input
                            innerRef={this.userNameRef}
                            type="email"
                            placeholder="Username"
                            onChange={(e) =>
                              this.props.handleUsernameChange(e.target)
                            }
                            value={this.props.auth.username}
                          />
                        </InputGroup>
                        <InputGroup className="">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <i className="feather icon-lock" />
                            </span>
                          </InputGroupAddon>
                          <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                              this.props.handlePasswordChange(e.target)
                            }
                            value={this.props.auth.password}
                          />
                        </InputGroup>
                        {this.props.auth.isLoginError && (
                          <p className="text-danger">
                            {this.props.auth.loginMessage}
                          </p>
                        )}
                        {this.props.auth.isLoginLoading && <Spinner /> }
                        <Button
                          onClick={(e) => this.props.authenticateUser(e)}
                          className="w-100 shadow-sm mt-5 mb-3"
                          btnText={<h6 className="text-light mb-0">Sign In</h6>}
                          type="primary"
                          gradient
                          disabled={this.props.auth.isLoginLoading ? true : false}
                        />
                      </Form>
                      <div className="mb-2 mt-3 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            Keep me signed in
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <a
                          href="#"
                          className="auth-link"
                          onClick={this.redirectToForgot}
                        >
                          Forgot password?
                        </a>
                      </div>
                    </Col6>
                  </SimpleRow>
                </LoginCard>
              </Col6>
            </SimpleRow>
          </div>
        </div>
      </>
    );
  }
}
