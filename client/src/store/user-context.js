import React from "react";

const UserContext = React.createContext({
  name: "Jignesh Singh Kumar Solanki",
  watchlists: [
    { name: "Big Tech", symbols: ["AAPL", "MSFT", "META", "AMZN"] },
    { name: "Radar", symbols: ["TSLA", "GOOG"] },
  ],
  addToWatchlist: function (symbolName, watchlistName) {
    const watchlist = this.watchlists.find((wl) => wl.name === watchlistName);
    if (watchlist) {
      const symbols = watchlist.symbols;
      if (!symbols.includes(symbolName)) {
        symbols.push(symbolName);
        console.log(`Added ${symbolName} to ${watchlistName} watchlist`);
      } else {
        console.log(`${symbolName} is already in ${watchlistName} watchlist`);
      }
    } else {
      console.log(`Watchlist ${watchlistName} not found`);
    }
  },
});

export default UserContext;
