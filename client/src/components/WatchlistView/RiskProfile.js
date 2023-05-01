import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import InfoButton from "../InfoButton/InfoButton";

const riskProfileInfo =
  "The average P/E ratio compares a stock's price to its earnings. A higher P/E ratio means that investors are paying more for each dollar of earnings the company generates. This could indicate that the stock is overvalued, but it might also suggest that investors expect high growth. A lower P/E ratio can signal that the stock is undervalued or that investors expect slower growth. Beta measures how a stock's price moves compared to the overall market. A beta above 1 means the stock is more volatile, and its price fluctuates more than the market. A beta below 1 suggests that the stock is less volatile and experiences smaller price changes compared to the market. A higher beta implies greater risk, but it also presents the potential for higher returns.     The Sharpe ratio evaluates a stock's return relative to the risk involved. A higher Sharpe ratio indicates that the stock delivers better returns for each unit of risk taken compared to other investments. In simpler terms, a higher Sharpe ratio means that the stock is generating more return for the amount of risk involved, which is usually preferable.";

function RiskProfile({ riskProfile, watchlistName }) {
  const { averagePeRatio, averageBeta, averageSharpeRatio } = riskProfile;

  // Normalize risk values to a scale of 0-100
  const normalizeRiskValue = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  const peRisk = normalizeRiskValue(averagePeRatio, 10, 40);
  const betaRisk = normalizeRiskValue(averageBeta, 0.5, 2);
  const sharpeRisk = normalizeRiskValue(averageSharpeRatio, -2, 2);

  const getColor = (value) => {
    const red = Math.round(255 * (value / 100));
    const green = Math.round(255 * (1 - value / 100));
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <Box maxWidth={500}>
      <Box>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" marginBottom={2}>
            Overall risk profile of {watchlistName}
          </Typography>
          <InfoButton text={riskProfileInfo} />
        </div>
        <Typography variant="h6">
          P/E Ratio: {averagePeRatio.toFixed(2)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={peRisk}
          style={{
            backgroundColor: "#ddd",
            height: "10px",
            width: "100%",
            borderRadius: "5px",
          }}
          sx={{
            "& .MuiLinearProgress-bar": { backgroundColor: getColor(peRisk) },
          }}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Beta: {averageBeta.toFixed(2)}</Typography>
        <LinearProgress
          variant="determinate"
          value={betaRisk}
          style={{
            backgroundColor: "#ddd",
            height: "10px",
            width: "100%",
            borderRadius: "5px",
          }}
          sx={{
            "& .MuiLinearProgress-bar": { backgroundColor: getColor(betaRisk) },
          }}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h6">
          Sharpe Ratio: {averageSharpeRatio.toFixed(2)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={sharpeRisk}
          style={{
            backgroundColor: "#ddd",
            height: "10px",
            width: "100%",
            borderRadius: "5px",
          }}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: getColor(sharpeRisk),
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default RiskProfile;
