import React from "react";

const UserContext = React.createContext({
  name: "Jignesh Singh Kumar Solanki",
  watchlists: [
    { name: "Big Tech", symbols: ["AAPL", "MSFT", "META", "AMZN"] },
    { name: "Radar", symbols: ["TSLA", "GOOG"] },
  ],
});

export default UserContext;
