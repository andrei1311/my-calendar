import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fire";

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
    <div className="container">
      <h2>Login Page</h2>

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

      <button onClick={handleLogin}>Login</button>
      <h3>
        Don't have an Account <span onClick={switchRegister}>SignUp</span>{" "}
      </h3>
    </div>
  );
};

export default Login;
