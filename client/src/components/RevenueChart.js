import React, { useEffect, useState } from "react";
import { PureComponent } from "react";

import { AreaChart, Area } from "recharts";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function filterResponseArray(responseArray) {
  console.log(responseArray);
  const filteredData = responseArray.results
    .map((element) => {
      return {
        revenue: element.financials.income_statement.revenues.value,
        year: element.fiscal_year,
      };
    })
    .reverse();
  return filteredData;
}

function RevenueChart(params) {
  const symbol = params.symbol;
  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetch("/api/financials/" + symbol)
      .then((response) => response.json())
      .then((responseArray) => {
        const filteredData = filterResponseArray(responseArray);
        setChartData(filteredData);
      });
  }, []);

  return (
    <div>
      <h1>Revenue:</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
