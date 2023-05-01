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

import InfoButton from "./InfoButton/InfoButton";

function filterResponseArray(responseArray) {
  console.log(responseArray);
  const filteredData = responseArray.results
    .map((element) => {
      return {
        eps: element.financials.income_statement.diluted_earnings_per_share
          ?.value,
        year: element.fiscal_year,
      };
    })
    .reverse();
  return filteredData;
}

const earningPerShareInfo =
  "Earnings Per Share (EPS): Earnings per share (EPS) is the portion of a company's profit that is allocated to each outstanding share of common stock. EPS is calculated by dividing the company's net income by the total number of outstanding shares. Investors use EPS to evaluate a company's profitability on a per-share basis. Higher EPS is generally considered a positive sign, as it indicates that a company is generating more profit for its shareholders.";

function EPSChart(params) {
  const symbol = params.symbol;
  const data = params.data;
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const filteredData = filterResponseArray(data);
    setChartData(filteredData);
  }, [data, symbol]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>Earning Per Share</h1>
        <InfoButton text={earningPerShareInfo} />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="eps" fill="#2cb9f5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EPSChart;
