import React from "react";

const UserContext = React.createContext({
  name: "Jignesh Singh Kumar Solanki",
  allSymbols: [
    "AAPL",
    "FB",
    "MSFT",
    "AMZN",
    "TSLA",
    "NVDA",
    "GOOG",
    "META",
    "AMD",
    "JPM",
    "UNH",
  ],
  watchlists: [
    { name: "Big Tech", symbols: ["AAPL", "MSFT", "META", "AMZN"] },
    { name: "Radar", symbols: ["TSLA", "GOOG"] },
  ],
  addToWatchlist: function (symbolNames, watchlistName) {
    let watchlist = this.watchlists.find((wl) => wl.name === watchlistName);
    if (!watchlist) {
      watchlist = { name: watchlistName, symbols: [] };
      this.watchlists.push(watchlist);
    }
    const symbols = watchlist.symbols;
    symbolNames.forEach((symbolName) => {
      if (!symbols.includes(symbolName)) {
        symbols.push(symbolName);
        console.log(`Added ${symbolName} to ${watchlistName} watchlist`);
      } else {
        console.log(`${symbolName} is already in ${watchlistName} watchlist`);
      }
    });
  },
});

export default UserContext;
