import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../fire";

const Home = ({ setUser, setAuthState }) => {
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="home bg-blue-600">
      <h1 className="text-2xl">This is Home</h1>
      <button className="logout-btn " onClick={handleSignOut}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
