import React, { useEffect, useState } from "react";
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
  console.log(responseArray);
  const filteredData = responseArray.map((eachDay) => {
    return {
      price: isNaN(eachDay.high) ? undefined : eachDay.high,
      priceDate: eachDay.priceDate,
    };
  });
  return filteredData;
}

function StockHistoryChart(params) {
  const symbol = params.symbol;

  const [chartData, setChartData] = useState(undefined);

  useEffect(() => {
    fetch("/api/chart/" + symbol)
      .then((response) => response.json())
      .then((responseArray) => {
        const filteredData = filterResponseArray(responseArray);
        setChartData(filteredData);
      });
  }, []);

  if (chartData !== undefined) {
    return (
      <div>
        <h1>Stock Price:</h1>
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
