import React from "react";
import FDMlogo from "../Resources/FDMlogo.png";
import "../CSS/Header.css";

const Header = () => (
  <div className="header">
    <img src={FDMlogo} className="FDMlogo"></img>
    <h1 className="headerTitle"> JOB OPPORTUNITY BOARD</h1>
  </div>
);

export default Header;
