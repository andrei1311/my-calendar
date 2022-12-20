import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Calendar from "../Calendar/Calendar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Calendar />
    </div>
  );
};

export default Home;
