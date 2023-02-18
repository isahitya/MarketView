import React, { useEffect, useState } from "react";
import { PureComponent } from "react";
//TODO: Make sure EPS is correct
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
        eps: element.financials.income_statement.diluted_earnings_per_share
          .value,
        year: element.fiscal_year,
      };
    })
    .reverse();
  return filteredData;
}

function EPSChart(params) {
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
      <h1>Earning Per Share:</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="eps" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EPSChart;
