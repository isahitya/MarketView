import React, { useEffect, useState } from "react";
import StockHistoryChart from "./StockHistoryChart";
import RevenueChart from "./RevenueChart";
import EPSChart from "./EPSChart";
import CashAndDebtChart from "./CashAndDebtChart";

function TickerOverview(params) {
  const symbol = params.symbol;
  const [stockPriceResponseData, setStockPriceResponseData] =
    useState(undefined);
  const [financialsResponseData, setFinancialsResponseData] =
    useState(undefined);

  useEffect(() => {
    fetch("/api/chart/" + symbol).then(async (response) => {
      const responseArray = await response.json();
      setStockPriceResponseData(responseArray);
    });
  }, []);

  useEffect(() => {
    fetch("/api/financials/" + symbol).then(async (response) => {
      const responseArray = await response.json();
      setFinancialsResponseData(responseArray);
    });
  }, []);

  return (
    <div>
      <h1>{symbol}</h1>
      {stockPriceResponseData !== undefined ? (
        <StockHistoryChart symbol={symbol} data={stockPriceResponseData} />
      ) : (
        <h1>Loading stock prices data</h1>
      )}
      {financialsResponseData !== undefined ? (
        <RevenueChart symbol={symbol} data={financialsResponseData} />
      ) : (
        <h1>Loading revenue chart</h1>
      )}
      {financialsResponseData !== undefined ? (
        <EPSChart symbol={symbol} data={financialsResponseData} />
      ) : (
        <h1>Loading EPS Chart</h1>
      )}
      {financialsResponseData !== undefined ? (
        <CashAndDebtChart symbol={symbol} data={financialsResponseData} />
      ) : (
        <h1>Loading Cash And Debt Chart</h1>
      )}
    </div>
  );
}

export default TickerOverview;
