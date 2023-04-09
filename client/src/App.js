import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import WatchlistDashboard from "./components/WatchlistDashboard/WatchlistDashboard";
import NewsDashboard from "./components/NewsDashboard/NewsDashboard";
import TickerOverview from "./components/TickerOverview";
import UserContext from "./store/user-context";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <TickerOverview symbol="AAPL" />; */}
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "5em" }}>
        <div className="dashboard" style={{ flex: 1, width: "30%" }}>
          <WatchlistDashboard />
        </div>
        <div className="dashboard" style={{ flex: 1, width: "30%" }}>
          <NewsDashboard />
        </div>
      </div>
    </>
  );
}

export default App;
