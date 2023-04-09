import express from "express";
const app = express();

import { Client } from "@apperate/iexjs";
const client = new Client({ api_token: "sk_e5123f6b82914cff947b483fd5d15dc6" });

import { referenceClient } from "@polygon.io/client-js";
const reference = referenceClient("icNNjhfIlZtn_29RnVPKJ4VkljK5O7iS"); // polygon

app.get("/api", (req, res) => {
  res.json({ users: ["User 1", "User 2"] });
});

app.get("/api/chart/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const data = await client.chart({ symbol: symbol, range: "1y" });
  res.json(data);
});

app.get("/api/financials/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const data = await reference.stockFinancials({
    ticker: symbol,
    timeframe: "annual",
    limit: 10,
    order: "desc",
    // sort: "filling_date",
  });
  res.json(data);
});

const port = 5555;
app.listen(port, () => {
  console.log("Server started on port:" + port);
});
