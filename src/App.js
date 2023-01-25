import React from "react";

import TabRec from "./Components/TabRec";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Map from "./Components/Map";
import Tab from "./Components/Tab";
import Map2 from "./Components/Map2";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/Opportunities">Recent Opp and Placements</Link>
          </li>
          <li>
            <Link to="/Map2">Map</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Map2 />}></Route>
          <Route exact path="/Opportunities" element={<Tab />}></Route>
          <Route exact path="/RecentPlacements" element={<TabRec />}></Route>
          <Route exact path="/Opportunities/Leeds" element={<Tab />}></Route>
          <Route exact path="/Opportunities/HK" element={<Tab />}></Route>
          <Route exact path="/Opportunities/Austin" element={<Tab />}></Route>
          <Route
            exact
            path="/Opportunities/Singapore"
            element={<Tab />}
          ></Route>
          <Route exact path="/Opportunities/London" element={<Tab />}></Route>
          <Route exact path="/Opportunities/Germany" element={<Tab />}></Route>
          <Route exact path="/Opportunities/Glasgow" element={<Tab />}></Route>
          <Route exact path="/Opportunities/Toronto" element={<Tab />}></Route>
          <Route exact path="/Opportunities/China" element={<Tab />}></Route>
          <Route exact path="/Opportunities/Poland" element={<Tab />}></Route>
          <Route exact path="/Opportunities/NewYork" element={<Tab />}></Route>
          <Route
            exact
            path="/Opportunities/Arlington"
            element={<Tab />}
          ></Route>
          <Route
            exact
            path="/Opportunities/Australia"
            element={<Tab />}
          ></Route>
          <Route
            exact
            path="/Opportunities/South Africa"
            element={<Tab />}
          ></Route>
          <Route exact path="/Opportunities/Reston" element={<Tab />}></Route>
          <Route
            exact
            path="/Opportunities/Charlotte"
            element={<Tab />}
          ></Route>
          <Route exact path="/Tab/HK" element={<Tab />}></Route>

          <Route exact path="/Map2" element={<Map2 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
