import React, { useEffect, useState } from "react";
import StockHistoryChart from "./StockHistoryChart";
import RevenueChart from "./RevenueChart";
import EPSChart from "./EPSChart";

function TickerOverview(params) {
  const symbol = params.symbol;
  const [stockPriceResponseData, setStockPriceResponseData] = useState();

  //   fetch("/api/chart/" + symbol)
  //     .then((response) => response.json())
  //     .then((responseArray) => {
  //       console.log("AALA RE AALA RESPONSE AALA");
  //       setStockPriceResponseData(responseArray);
  //     });

  //   useEffect(() => {
  //     fetch("/api/chart/" + symbol).then((response) => {
  //       const responseArray = response.json();
  //       console.log("Response aaya");
  //       console.log(responseArray);
  //       setStockPriceResponseData(responseArray);
  //     });
  //   }, []);

  return (
    <div>
      <h1>{symbol}</h1>
      <StockHistoryChart symbol={symbol} />
      <RevenueChart symbol={symbol}></RevenueChart>
      <EPSChart symbol={symbol}></EPSChart>
    </div>
  );
}

export default TickerOverview;
