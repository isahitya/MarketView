import React, { useEffect, useState } from "react";
import InfoButton from "./InfoButton/InfoButton";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function filterResponseArray(responseArray) {
  const filteredData = responseArray.map((eachDay) => {
    return {
      price: isNaN(eachDay.high) ? undefined : eachDay.high,
      priceDate: eachDay.priceDate,
    };
  });
  return filteredData;
}

const stockPriceInfo =
  "Stock Price: The stock price is the current market value of a company's shares of stock. It is determined by the supply and demand of buyers and sellers in the stock market. Investors can use stock prices to track the performance of individual stocks or the stock market as a whole. Fluctuations in stock prices can reflect changes in a company's financial performance, market conditions, or other factors.";

function StockHistoryChart(params) {
  const symbol = params.symbol;
  const apiData = params.data;

  const [chartData, setChartData] = useState(undefined);

  useEffect(() => {
    const filteredData = filterResponseArray(apiData);
    setChartData(filteredData.reverse());
  }, [apiData, symbol]);

  if (chartData !== undefined) {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h1>Stock Price</h1>
          <InfoButton text={stockPriceInfo} />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="priceDate" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#649e4f"
              fill="#91e075"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <h1>Loading stock history chart...</h1>;
  }
}

export default StockHistoryChart;
