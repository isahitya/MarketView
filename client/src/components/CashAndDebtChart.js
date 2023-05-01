import React, { useEffect, useState } from "react";
import { PureComponent } from "react";

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
        cash: element.financials.balance_sheet.assets.value, //Total assets
        debt: element.financials.balance_sheet.liabilities.value, //Total Liabilities
        year: element.fiscal_year,
      };
    })
    .reverse();
  return filteredData;
}

const cashAndDebtInfo =
  "Cash and Debt: Cash refers to a company's available funds that can be used for operating expenses, investments, or paying off debt. Debt refers to the amount of money a company owes to lenders, typically in the form of loans or bonds. A company's cash and debt levels can provide insight into its financial health and ability to manage its obligations. A company with high cash reserves and low debt levels may be more attractive to investors, as it has the ability to invest in growth opportunities or weather financial challenges. ";

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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>Cash and Debt</h1>
        <InfoButton text={cashAndDebtInfo} />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cash" fill="#52d163" />
          <Bar dataKey="debt" fill="#ed6e47" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CashAndDebtChart;
