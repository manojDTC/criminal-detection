import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import unifynow from "../assets/unifynow.png";
import digitalwp from "../assets/digitalwp.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedEmail = "user@unifynow.ai";
    const hardcodedPassword = "Test@123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Redirect to /dashboard on successful login
      navigate("/dashboard");
    } else {
      // Show toaster message for failed login
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="vi-login">
      <ToastContainer /> {/* Container for toaster notifications */}
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6">
          <div className="registration-form">
            <div className="unify-logo">
              <img src={unifynow} alt="unifynow-logo" className="img-fluid" />
            </div>

            <div id="signin">
              <div>
                <form
                  onSubmit={handleLogin}
                  className="d-flex gap-3 flex-column login-form"
                >
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                          Remember Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="login-btn">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>
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
