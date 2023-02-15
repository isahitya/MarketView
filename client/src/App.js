import React, { useEffect, useState } from "react";
import StockHistoryChart from "./components/StockHistoryChart";

function App() {
  return (
    <div>
      <StockHistoryChart symbol="AAPL" />
    </div>
  );
}

export default App;
