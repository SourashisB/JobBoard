import React from "react";
import OppTableTemplate from "./OppTableTemplate";
import RecentPlacementTableTemplate from "./RecentPlacementTableTemplate";
import "../CSS/Tab.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

const Tab = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <Header></Header>
      <div class="tab">
        <Link to="/Opportunities">
          <button>Job Opp</button>
        </Link>
        <Link to="/RecentPlacements">
          <button>Checkout Recent Placement</button>
        </Link>
        <Link to="/">
          <button>Map</button>
        </Link>
      </div>
      <div class="tabcontent">
        {{ display } ? <OppTableTemplate /> : <RecentPlacementTableTemplate />}
      </div>
    </>
  );
};
export default Tab;
