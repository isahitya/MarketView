import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import WatchlistDashboard from "./components/WatchlistDashboard/WatchlistDashboard";
import WatchlistView from "./components/WatchlistView/WatchlistView";
import NewsDashboard from "./components/NewsDashboard/NewsDashboard";
import TickerOverview from "./components/TickerOverview";
import UserContext from "./store/user-context";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
  const [view, setView] = useState("HOME");
  const [selectedWatchlist, setSelectedWatchlist] = useState("");
  const watchlistSelectHandler = (watchlist) => {
    console.log("Changing view to watchlist");
    setSelectedWatchlist(watchlist);
    setView("WATCHLIST");
  };
  return (
    <Box>
      <NavBar></NavBar>
      {/* <TickerOverview symbol="AAPL" />; */}
      {view == "HOME" && (
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "5em" }}
        >
          <div className="dashboard" style={{ flex: 1, width: "30%" }}>
            <WatchlistDashboard onWatchlistSelect={watchlistSelectHandler} />
          </div>
          <div className="dashboard" style={{ flex: 1, width: "30%" }}>
            <NewsDashboard />
          </div>
        </div>
      )}
      {view == "WATCHLIST" && <WatchlistView watchlist={selectedWatchlist} />}
    </Box>
  );
}

export default App;
