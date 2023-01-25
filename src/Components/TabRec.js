import React from "react";
import OppTableTemplate from "./OppTableTemplate";
import RecentPlacementTableTemplate from "./RecentPlacementTableTemplate";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import "../CSS/TabRec.css";

const TabRec = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
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
        {{ display } ? <RecentPlacementTableTemplate /> : <OppTableTemplate />}
      </div>
    </div>
  );
};
export default TabRec;
