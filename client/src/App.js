import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import WatchlistDashboard from "./components/WatchlistDashboard/WatchlistDashboard";
import WatchlistView from "./components/WatchlistView/WatchlistView";
import NewsDashboard from "./components/NewsDashboard/NewsDashboard";
import LoginView from "./components/LoginView/LoginView";
import TickerOverview from "./components/TickerOverview";
import UserContext from "./store/user-context";
import AdvancedSearch from "./components/AdvancedSearch/AdvancedSearch";
import Box from "@mui/material/Box";
import "./App.css";
import SignUpPage from "./components/SignupView/SignupView";

function App() {
  const [view, setView] = useState("SIGNUP");
  const [selectedWatchlist, setSelectedWatchlist] = useState("");
  const [searchedSymbol, setSearchedSymbol] = useState("");

  const watchlistSelectHandler = (watchlist) => {
    console.log("Changing view to watchlist");
    setSelectedWatchlist(watchlist);
    setView("WATCHLIST");
  };

  const signupClickHandler = () => {
    setView("LOGIN");
  };

  const searchResultSelectHandler = (symbol) => {
    console.log("Search Result selected:");
    console.log(symbol);
    setSearchedSymbol(symbol);
    setView("TICKERVIEW");
  };

  const loginSuccessHandler = (email) => {
    console.log("Login successful");
    setView("HOME");
  };

  const homeButtonClickHandler = () => {
    setView("HOME");
  };

  const advancedSearchButtonClickHandler = () => {
    setView("ADVANCEDSEARCH");
  };

  const searchTableRowClickHandler = (symbol) => {
    setSearchedSymbol(symbol);
    setView("TICKERVIEW");
  };

  return (
    <Box>
      {view != "LOGIN" && view != "SIGNUP" && (
        <NavBar
          onHomeButtonClick={homeButtonClickHandler}
          onSearchResultSelect={searchResultSelectHandler}
          onAdvancedSearchButtonClick={advancedSearchButtonClickHandler}
        ></NavBar>
      )}
      {/* <TickerOverview symbol="AAPL" />; */}
      {view == "HOME" && (
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "5em" }}
        >
          <div
            className="dashboard"
            style={{
              flex: 1,
              width: "30%",
              height: "50%",
              border: "1px solid rgba(0, 0, 0, 0.1) !important",
            }}
          >
            <WatchlistDashboard onWatchlistSelect={watchlistSelectHandler} />
          </div>
          <div
            className="dashboard"
            style={{
              flex: 1,
              width: "30%",
              border: "1px solid rgba(0, 0, 0, 0.1) !important",
            }}
          >
            <NewsDashboard />
          </div>
        </div>
      )}
      {view == "WATCHLIST" && <WatchlistView watchlist={selectedWatchlist} />}
      {view == "LOGIN" && <LoginView onLoginSuccess={loginSuccessHandler} />}
      {view == "TICKERVIEW" && (
        <TickerOverview
          symbol={searchedSymbol}
          paddingTop="4em"
          paddingLeft="1em"
        />
      )}
      {view == "ADVANCEDSEARCH" && (
        <div style={{ marginTop: "5em", marginLeft: "1em" }}>
          <AdvancedSearch
            onSearchTableRowClicked={searchTableRowClickHandler}
          />
        </div>
      )}
      {view == "SIGNUP" && (
        <SignUpPage onSignupButtonClick={signupClickHandler} />
      )}
      <div class="disclaimer">
        <p>
          Disclaimer: This website is for informational purposes only and does
          not provide investment advice or recommendations. Given data is
          outdated.
        </p>
      </div>
    </Box>
  );
}

export default App;
