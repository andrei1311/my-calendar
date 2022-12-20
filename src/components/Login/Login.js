import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fire";
import LoginImg from "../../assets/img/login.jpg";
import "./Login.css";

const Login = ({ setAuthState, setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function switchRegister() {
    setAuthState("register");
  }

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState("home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image p-0 image">
            <img src={LoginImg} alt="login" />
          </div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container form-container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Login</h3>
                    <form>
                      <div className="mb-3">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label className="form-check-label">
                          Remember password
                        </label>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          onClick={handleLogin}
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                      </div>

                      <div className="text-center d-flex justify-content-between mt-4">
                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <span className="ml-1 text-lg cursor-pointer">
                            {" "}
                            <a
                              onClick={switchRegister}
                              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >
                              Register
                            </a>
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
