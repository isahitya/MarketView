import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Switch,
  Box,
} from "@mui/material";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

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

const stockData = [
  {
    companyName: "Apple Inc.",
    symbol: "AAPL",
    assets: 350000000000,
    liabilities: 200000000000,
    grossProfit: 130000000000,
    earningsPerShare: 5.1,
  },
  {
    companyName: "Amazon.com, Inc.",
    symbol: "AMZN",
    assets: 300000000000,
    liabilities: 150000000000,
    grossProfit: 180000000000,
    earningsPerShare: 7.2,
  },
  {
    companyName: "Microsoft Corporation",
    symbol: "MSFT",
    assets: 250000000000,
    liabilities: 100000000000,
    grossProfit: 110000000000,
    earningsPerShare: 6.5,
  },
  {
    companyName: "Facebook, Inc.",
    symbol: "FB",
    assets: 100000000000,
    liabilities: 50000000000,
    grossProfit: 50000000000,
    earningsPerShare: 2.8,
  },
  {
    companyName: "Alphabet Inc.",
    symbol: "GOOGL",
    assets: 200000000000,
    liabilities: 75000000000,
    grossProfit: 120000000000,
    earningsPerShare: 8.3,
  },
  {
    companyName: "Tesla, Inc.",
    symbol: "TSLA",
    assets: 50000000000,
    liabilities: 25000000000,
    grossProfit: 10000000000,
    earningsPerShare: 0.7,
  },
  {
    companyName: "Walmart Inc.",
    symbol: "WMT",
    assets: 250000000000,
    liabilities: 150000000000,
    grossProfit: 80000000000,
    earningsPerShare: 4.6,
  },
  {
    companyName: "JPMorgan Chase & Co.",
    symbol: "JPM",
    assets: 3000000000000,
    liabilities: 2800000000000,
    grossProfit: 20000000000,
    earningsPerShare: 10.1,
  },
  {
    companyName: "Procter & Gamble Co.",
    symbol: "PG",
    assets: 150000000000,
    liabilities: 50000000000,
    grossProfit: 55000000000,
    earningsPerShare: 3.7,
  },
  {
    companyName: "Coca-Cola Company",
    symbol: "KO",
    assets: 90000000000,
    liabilities: 50000000000,
    grossProfit: 35000000000,
    earningsPerShare: 2.4,
  },
  {
    companyName: "Berkshire Hathaway Inc.",
    symbol: "BRK.A",
    assets: 800000000000,
    liabilities: 400000000000,
    grossProfit: 100000000000,
    earningsPerShare: 15.6,
  },
  {
    companyName: "Intel Corporation",
    symbol: "INTC",
    assets: 150000000000,
    liabilities: 80000000000,
    grossProfit: 50000000000,
    earningsPerShare: 3.2,
  },
  {
    companyName: "McDonald's Corporation",
    symbol: "MCD",
    assets: 40000000000,
    liabilities: 20000000000,
    grossProfit: 24000000000,
    earningsPerShare: 2.4,
  },
  {
    companyName: "Exxon Mobil Corporation",
    symbol: "XOM",
    assets: 330000000000,
    liabilities: 150000000000,
    grossProfit: 70000000000,
    earningsPerShare: 2.8,
  },
  {
    companyName: "General Electric Company",
    symbol: "GE",
    assets: 250000000000,
    liabilities: 150000000000,
    grossProfit: 40000000000,
    earningsPerShare: 1.3,
  },
  {
    companyName: "Johnson & Johnson",
    symbol: "JNJ",
    assets: 400000000000,
    liabilities: 200000000000,
    grossProfit: 180000000000,
    earningsPerShare: 6.7,
  },
  {
    companyName: "Visa Inc.",
    symbol: "V",
    assets: 90000000000,
    liabilities: 50000000000,
    grossProfit: 23000000000,
    earningsPerShare: 6.2,
  },
  {
    companyName: "Pfizer Inc.",
    symbol: "PFE",
    assets: 220000000000,
    liabilities: 100000000000,
    grossProfit: 55000000000,
    earningsPerShare: 2.5,
  },
  {
    companyName: "Walt Disney Company",
    symbol: "DIS",
    assets: 200000000000,
    liabilities: 100000000000,
    grossProfit: 90000000000,
    earningsPerShare: 5.3,
  },
  {
    companyName: "Verizon Communications Inc.",
    symbol: "VZ",
    assets: 280000000000,
    liabilities: 150000000000,
    grossProfit: 80000000000,
    earningsPerShare: 4.2,
  },

  // more data objects here
];

const indexFunds = [
  {
    fundName: "Vanguard 500 Index Fund",
    symbol: "VFIAX",
    assets: 786.2,
    expenseRatio: 0.04,
    yield: 1.27,
  },
  {
    fundName: "Invesco QQQ Trust",
    symbol: "QQQ",
    assets: 171.8,
    expenseRatio: 0.2,
    yield: 0.4,
  },
  {
    fundName: "iShares Russell 2000 ETF",
    symbol: "IWM",
    assets: 73.2,
    expenseRatio: 0.19,
    yield: 0.9,
  },
  {
    fundName: "iShares MSCI EAFE ETF",
    symbol: "EFA",
    assets: 83.1,
    expenseRatio: 0.32,
    yield: 2.4,
  },
  {
    fundName: "iShares MSCI Emerging Markets ETF",
    symbol: "EEM",
    assets: 50.5,
    expenseRatio: 0.67,
    yield: 1.4,
  },
  {
    fundName: "SPDR Dow Jones Industrial Average ETF Trust",
    symbol: "DIA",
    assets: 34.8,
    expenseRatio: 0.16,
    yield: 1.9,
  },
  {
    fundName: "Vanguard Total Stock Market ETF",
    symbol: "VTI",
    assets: 233.3,
    expenseRatio: 0.03,
    yield: 1.4,
  },
  {
    fundName: "iShares Core S&P Mid-Cap ETF",
    symbol: "IJH",
    assets: 78.4,
    expenseRatio: 0.05,
    yield: 1.2,
  },
  {
    fundName: "iShares MSCI World ETF",
    symbol: "URTH",
    assets: 6.8,
    expenseRatio: 0.24,
    yield: 1.5,
  },
  {
    fundName: "Vanguard FTSE Developed Markets ETF",
    symbol: "VEA",
    assets: 110.9,
    expenseRatio: 0.05,
    yield: 2.7,
  },
];

const StockTable = (props) => {
  const [assetValue, setAssetValue] = useState("");
  const [assetAbove, setAssetAbove] = useState(false);
  const [liabilityValue, setLiabilityValue] = useState("");
  const [liabilityAbove, setLiabilityAbove] = useState(false);
  const [profitValue, setProfitValue] = useState("");
  const [profitAbove, setProfitAbove] = useState(false);
  const [epsValue, setEpsValue] = useState("");
  const [epsAbove, setEpsAbove] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState(["Stocks"]);

  const handleSelectedButtons = (event, newSelectedButtons) => {
    setSelectedButtons([newSelectedButtons[newSelectedButtons.length - 1]]);
  };

  const handleAssetValueChange = (event) => {
    setAssetValue(event.target.value);
  };

  const handleAssetAboveChange = (event) => {
    setAssetAbove(event.target.checked);
  };

  const handleLiabilityValueChange = (event) => {
    setLiabilityValue(event.target.value);
  };

  const handleLiabilityAboveChange = (event) => {
    setLiabilityAbove(event.target.checked);
  };

  const handleProfitValueChange = (event) => {
    setProfitValue(event.target.value);
  };

  const handleProfitAboveChange = (event) => {
    setProfitAbove(event.target.checked);
  };

  const handleEpsValueChange = (event) => {
    setEpsValue(event.target.value);
  };

  const handleEpsAboveChange = (event) => {
    setEpsAbove(event.target.checked);
  };

  const filterData = (data) => {
    return data.filter((item) => {
      let pass = true;
      if (
        assetValue &&
        (assetAbove
          ? item.assets <= assetValue * 1000000000
          : item.assets >= assetValue * 1000000000)
      ) {
        pass = false;
      }
      if (
        liabilityValue &&
        (liabilityAbove
          ? item.liabilities <= liabilityValue * 1000000000
          : item.liabilities >= liabilityValue * 1000000000)
      ) {
        pass = false;
      }
      if (
        profitValue &&
        (profitAbove
          ? item.grossProfit <= profitValue * 1000000000
          : item.grossProfit >= profitValue * 1000000000)
      ) {
        pass = false;
      }
      if (
        epsValue &&
        (epsAbove
          ? item.earningsPerShare <= epsValue
          : item.earningsPerShare >= epsValue)
      ) {
        pass = false;
      }
      return pass;
    });
  };

  const filteredData = filterData(stockData);

  return (
    <>
      <h1>Advanced Search</h1>
      <ToggleButtonGroup
        value={selectedButtons}
        onChange={handleSelectedButtons}
        aria-label="button group"
      >
        <ToggleButton value="Stocks" aria-label="stocks button">
          Stocks
        </ToggleButton>
        <ToggleButton value="Index Funds" aria-label="index funds button">
          Index Funds
        </ToggleButton>
        <ToggleButton value="Bonds" aria-label="bonds button">
          Bonds
        </ToggleButton>
      </ToggleButtonGroup>
      <Box display="flex">
        <Box
          border={1}
          padding={2}
          marginBottom={2}
          width="20em"
          margin="0em"
          marginRight="0.5em"
        >
          <TextField
            label="Assets"
            type="number"
            value={assetValue}
            onChange={handleAssetValueChange}
            style={{ marginRight: "16px" }}
          />
          <Switch
            checked={assetAbove}
            onChange={handleAssetAboveChange}
            inputProps={{ "aria-label": "filter assets above" }}
          />
          <span>{assetAbove ? "Above" : "Below"}</span>
        </Box>
        <Box
          border={1}
          padding={2}
          marginBottom={2}
          width="20em"
          margin="0em"
          marginRight="0.5em"
        >
          <TextField
            label="Liabilities"
            type="number"
            value={liabilityValue}
            onChange={handleLiabilityValueChange}
            style={{ marginRight: "16px" }}
          />
          <Switch
            checked={liabilityAbove}
            onChange={handleLiabilityAboveChange}
            inputProps={{ "aria-label": "filter liabilities above" }}
          />
          <span>{liabilityAbove ? "Above" : "Below"}</span>
        </Box>
        <Box
          border={1}
          padding={2}
          marginBottom={2}
          width="20em"
          margin="0em"
          marginRight="0.4em"
        >
          <TextField
            label="Gross Profit"
            type="number"
            value={profitValue}
            onChange={handleProfitValueChange}
            style={{ marginRight: "16px" }}
          />
          <Switch
            checked={profitAbove}
            onChange={handleProfitAboveChange}
            inputProps={{ "aria-label": "filter gross profit above" }}
          />
          <span>{profitAbove ? "Above" : "Below"}</span>
        </Box>
        <Box border={1} padding={2} marginBottom={2} width="20em" margin="0em">
          <TextField
            label="Earnings Per Share"
            type="number"
            value={epsValue}
            onChange={handleEpsValueChange}
            style={{ marginRight: "16px" }}
          />
          <Switch
            checked={epsAbove}
            onChange={handleEpsAboveChange}
            inputProps={{ "aria-label": "filter earnings per share above" }}
          />
          <span>{epsAbove ? "Above" : "Below"}</span>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "800" }}>Company Name</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Symbol</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Assets</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Liabilities</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Gross Profit</TableCell>
              {selectedButtons.includes("Stocks") && (
                <TableCell style={{ fontWeight: "800" }}>
                  Earnings Per Share
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedButtons.includes("Stocks") &&
              filteredData.map((item) => (
                <TableRow
                  key={item.symbol}
                  style={{ cursor: "pointer" }}
                  onClick={() => props.onSearchTableRowClicked(item.symbol)}
                >
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.symbol}</TableCell>
                  <TableCell>{formatBigNumber(item.assets)}</TableCell>
                  <TableCell>{formatBigNumber(item.liabilities)}</TableCell>
                  <TableCell>{formatBigNumber(item.grossProfit)}</TableCell>
                  <TableCell>{item.earningsPerShare}</TableCell>
                </TableRow>
              ))}
            {selectedButtons.includes("Index Funds") &&
              indexFunds.map((item) => (
                <TableRow key={item.symbol} style={{ cursor: "pointer" }}>
                  <TableCell>{item.fundName}</TableCell>
                  <TableCell>{item.symbol}</TableCell>
                  <TableCell>{formatBigNumber(item.assets)}</TableCell>
                  <TableCell>{formatBigNumber(item.expenseRatio)}</TableCell>
                  <TableCell>{formatBigNumber(item.yield)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StockTable;
