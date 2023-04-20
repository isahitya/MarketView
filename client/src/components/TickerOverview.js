import React, { useEffect, useState } from "react";
import StockHistoryChart from "./StockHistoryChart";
import RevenueChart from "./RevenueChart";
import EPSChart from "./EPSChart";
import CashAndDebtChart from "./CashAndDebtChart";
import Box from "@mui/material/Box";

function formatBigNumber(marketCap) {
  if (marketCap >= 1000000000) {
    return (marketCap / 1000000000).toFixed(1) + "B";
  } else if (marketCap >= 1000000) {
    return (marketCap / 1000000).toFixed(1) + "M";
  } else if (marketCap >= 1000) {
    return (marketCap / 1000).toFixed(1) + "K";
  } else {
    return marketCap.toFixed(0);
  }
}

function TickerOverview(props) {
  const symbol = props.symbol;
  const [stockPriceResponseData, setStockPriceResponseData] =
    useState(undefined);
  const [financialsResponseData, setFinancialsResponseData] =
    useState(undefined);

  const [companyName, setCompanyName] = useState("");
  const [closePrice, setClosePrice] = useState("");
  const [keyStats, setKeyStats] = useState(undefined);

  useEffect(() => {
    fetch("https://market-view.onrender.com/api/chart/" + symbol).then(
      async (response) => {
        const responseObject = await response.json();
        setStockPriceResponseData(responseObject);
        setClosePrice(responseObject[0].close);
      }
    );
  }, [symbol]);

  useEffect(() => {
    fetch("https://market-view.onrender.com/api/financials/" + symbol).then(
      async (response) => {
        const responseObject = await response.json();
        setFinancialsResponseData(responseObject);
        setCompanyName(responseObject.results[0].company_name);
        setKeyStats({
          fiscalYear: responseObject.results[0].fiscal_year,
          assets:
            responseObject.results[0].financials.balance_sheet.assets.value,
          liabilities:
            responseObject.results[0].financials.balance_sheet.liabilities
              .value,
          eps: responseObject.results[0].financials.income_statement
            .diluted_earnings_per_share.value,
        });
      }
    );
  }, [symbol]);

  return (
    <Box paddingTop={props.paddingTop} paddingLeft={props.paddingLeft}>
      <h1>
        {companyName}&nbsp;&nbsp;- {symbol} &nbsp;&nbsp;- {closePrice}
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {keyStats && (
          <>
            <h2>Key Stats - FY{keyStats && keyStats.fiscalYear}</h2>
            <div>Assets: {formatBigNumber(keyStats.assets)}</div>
            <div>Liabilities: {formatBigNumber(keyStats.liabilities)}</div>
            <div>EPS: {keyStats.eps}</div>
          </>
        )}
      </div>
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
    </Box>
  );
}

export default TickerOverview;
