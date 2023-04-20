import React, { useEffect, useState } from "react";
import { PureComponent } from "react";

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
        cash: element.financials.balance_sheet.assets.value, //Total assets
        debt: element.financials.balance_sheet.liabilities.value, //Total Liabilities
        year: element.fiscal_year,
      };
    })
    .reverse();
  return filteredData;
}

function CashAndDebtChart(params) {
  const symbol = params.symbol;
  const data = params.data;
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const filteredData = filterResponseArray(data);
    setChartData(filteredData);
  }, [data, symbol]);

  return (
    <div>
      <h1>Cash and Debt:</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cash" fill="#8884d8" />
          <Bar dataKey="debt" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CashAndDebtChart;
