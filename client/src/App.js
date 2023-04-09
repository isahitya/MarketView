import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import WatchlistDashboard from "./components/WatchlistDashboard/WatchlistDashboard";
import NewsDashboard from "./components/NewsDashboard/NewsDashboard";
import TickerOverview from "./components/TickerOverview";
import UserContext from "./store/user-context";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <TickerOverview symbol="AAPL" />; */}
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <WatchlistDashboard />
        <NewsDashboard />
      </div>
    </>
  );
}

export default App;
