import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home bg-blue-600">
      <Navbar />
      <h1 className="text-2xl">This is Home</h1>
      <button className="logout-btn ">LogOut</button>
    </div>
  );
};

export default Home;
