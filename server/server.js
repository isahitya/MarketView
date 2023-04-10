import express from "express";
import fs from "fs";
const app = express();

import { chart, Client } from "@apperate/iexjs";
const client = new Client({ api_token: "sk_e5123f6b82914cff947b483fd5d15dc6" });

import { referenceClient } from "@polygon.io/client-js";
const reference = referenceClient("icNNjhfIlZtn_29RnVPKJ4VkljK5O7iS"); // polygon

const chartDataString = fs.readFileSync(
  "./data/last_100d_chart_quote_news.json",
  "utf8"
);
const chartData = JSON.parse(chartDataString);

const financialDataString = fs.readFileSync(
  "./data/last_10y_financials.json",
  "utf8"
);
const financialData = JSON.parse(financialDataString);

app.get("/api", (req, res) => {
  res.json({ users: ["User 1", "User 2"] });
});

app.get("/api/chart/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  //const data = await client.chart({ symbol: symbol, range: "1y" });
  const data = chartData[symbol].chart;
  res.json(data);
});

app.get("/api/financials/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  // const data = await reference.stockFinancials({
  //   ticker: symbol,
  //   timeframe: "annual",
  //   limit: 10,
  //   order: "desc",
  //   // sort: "filling_date",
  // });
  const data = financialData[symbol];
  res.json(data);
});

// const port = 5555;
// app.listen(port, () => {
//   console.log("Server started on port:" + port);
// });

app.listen(process.env.PORT || 3000);
