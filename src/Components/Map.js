import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tab from "./Tab";
import Header from "./Header";
import OppTableTemplate from "./OppTableTemplate";
import { useNavigate } from "react-router-dom";

//Map function that acts a router

function Map() {
  const navigate = useNavigate();

  const HongKong = "HK";

  return (
    <div className="Map">
      <h1>Welcome to the Map!</h1>

      <Link to="/Opportunities/HongKong" state="HK" key={HongKong}>
        Hong Kong
      </Link>
    </div>
  );
}

export default Map;
