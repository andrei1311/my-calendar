import * as React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fire";
import RegisterImg from "../../assets/img/register.jpg";

const Register = ({ setAuthState, setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function switchLogin() {
    setAuthState("login");
  }

  const handleRegister = () => {
    if (email !== null && password !== null) {
      createUserWithEmailAndPassword(auth, email, password)
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
    <div className="maincontainer h-100">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image p-0">
            <img src={RegisterImg} alt="login" />
          </div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Create an account</h3>
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
                      <div className="d-grid gap-2 mt-2">
                        <button
                          onClick={handleRegister}
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                      </div>

                      <div className="text-center d-flex justify-content-between mt-4">
                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                          Already have an account?{" "}
                          <span className="ml-1 text-lg cursor-pointer">
                            {" "}
                            <a
                              onClick={switchLogin}
                              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >
                              Login
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

export default Register;
