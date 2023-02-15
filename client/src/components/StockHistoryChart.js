import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

function StockHistoryChart(params) {
  //send request to API
  const symbol = params.symbol;
  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetch("/api/chart/" + symbol)
      .then((response) => response.json())
      .then((responseArray) => {
        const filteredData = filterResponseArray(responseArray);
        setChartData(filteredData);
      });
  });

  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
    { name: "Jun", value: 239 },
    { name: "Jul", value: 349 },
    { name: "Aug", value: 478 },
    { name: "Sep", value: 398 },
    { name: "Oct", value: 500 },
    { name: "Nov", value: 289 },
    { name: "Dec", value: 379 },
  ];

  return (
    //show chart
    <div>
      <h1>{symbol}</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="priceDate" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockHistoryChart;
