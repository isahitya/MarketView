import React, { useEffect, useState } from "react";
import { PureComponent } from "react";

import { AreaChart, Area } from "recharts";

import InfoButton from "./InfoButton/InfoButton";

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

const revenueChartInfo =
  "Revenue: Revenue is the total amount of money a company generates from its business operations. This includes sales of products or services, interest income, and any other sources of income. Revenue is an important metric for investors because it provides insight into a company's ability to generate income. Companies with high revenue may be more attractive to investors because they have a strong customer base and a proven track record of success.";

function RevenueChart(params) {
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
        <h1>Revenue</h1>
        <InfoButton text={revenueChartInfo} />
      </div>
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
