import React, { useContext, useEffect, useState } from "react";
import StockHistoryChart from "./StockHistoryChart";
import RevenueChart from "./RevenueChart";
import EPSChart from "./EPSChart";
import CashAndDebtChart from "./CashAndDebtChart";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import UserContext from "../store/user-context";
import AddToWatchlistModal from "./AddToWatchlistModal/AddToWatchlistModal";
import InfoButton from "./InfoButton/InfoButton";

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

const keyStatsInto =
  "1) Assets: Assets are resources owned by a company or individual that have monetary value and can be used to generate income. Examples of assets include cash, investments, property, and equipment. 2) Liabilities: Liabilities are obligations owed by a company or individual, such as loans, unpaid bills, or taxes. Liabilities represent a company's or individual's debts or financial obligations. 3) EPS: EPS stands for Earnings per Share, which is the portion of a company's profit that is allocated to each outstanding share of common stock. EPS is an important metric for investors, as it helps to evaluate a company's profitability on a per-share basis.";

function TickerOverview(props) {
  const userCTX = useContext(UserContext);
  const watchlists = userCTX.watchlists;

  const symbol = props.symbol;
  const [stockPriceResponseData, setStockPriceResponseData] =
    useState(undefined);
  const [financialsResponseData, setFinancialsResponseData] =
    useState(undefined);

  const [companyName, setCompanyName] = useState("");
  const [closePrice, setClosePrice] = useState("");
  const [keyStats, setKeyStats] = useState(undefined);

  const [modalOpen, setModalOpen] = useState(false);

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
    <Box
      paddingTop={props.paddingTop}
      paddingLeft={props.paddingLeft}
      paddingRight="2em"
    >
      <AddToWatchlistModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        symbol={props.symbol}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontWeight: "500" }}>
          {companyName}&nbsp;&nbsp;- {symbol} &nbsp;&nbsp;-{" "}
          <span style={{ fontFamily: "courier" }}>{closePrice}$</span>
        </h1>
        <Button
          style={{ marginRight: "1em" }}
          onClick={() => setModalOpen(true)}
        >
          Add to Watchlist
        </Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {keyStats && (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h2>Key Stats - FY{keyStats && keyStats.fiscalYear}</h2>
              <InfoButton text={keyStatsInto} />
            </div>
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
