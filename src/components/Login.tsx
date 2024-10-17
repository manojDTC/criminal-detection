import React from "react";
import unifynow from "../assets/unifynow.png";
import digitalwp from "../assets/digitalwp.png";

const Login = () => {
  return (
    <div className="vi-login">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6">
          <div className="registration-form">
            <div className="unify-logo">
              <img src={unifynow} alt="unifynow-logo" className="img-fluid" />
            </div>

            <div id="signin">
              <div>
                <form action="" className="d-flex gap-3 flex-column login-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      name="pswd"
                    />
                    <div className="remember-pw">
                      <div>
                        <input
                          type="checkbox"
                          id="rememberPw"
                          name="rememberPw"
                          style={{ width: "auto", marginRight: "5px" }}
                        />
                        <label
                          htmlFor="rememberPw"
                          className="form-label"
                          style={{ fontSize: "14px" }}
                        >
                          Remeber Password
                        </label>
                      </div>
                      <a
                        href="./forgotPassword.html"
                        className="forgot-password"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="login-btn">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>

                <div className="signin-up">
                  <p>
                    Do not have an Account?{" "}
                    <a href="./SignUP.html">Create One</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="login-right">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={digitalwp} alt="productlogos" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
