import * as React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fire";

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
    <div className="container">
      <h2>Register Page</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

      <button onClick={handleRegister}>SignUp</button>
      <h3>
        Already have an Account <span onClick={switchLogin}>Login</span>{" "}
      </h3>
    </div>
  );
};

export default Register;
