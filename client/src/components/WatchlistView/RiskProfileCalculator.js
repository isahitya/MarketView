// Hypothetical data for stocks
// const watchlist = [
//   {
//     name: "StockA",
//     stock_price: 100,
//     eps: 5,
//     beta: 1.2,
//     stock_returns: [0.01, -0.005, 0.02, 0.015, -0.01],
//   },
//   {
//     name: "StockB",
//     stock_price: 200,
//     eps: 10,
//     beta: 0.9,
//     stock_returns: [0.005, 0.015, -0.01, 0.02, -0.005],
//   },
//   {
//     name: "StockC",
//     stock_price: 150,
//     eps: 7,
//     beta: 1.1,
//     stock_returns: [-0.01, 0.02, 0.015, -0.005, 0.01],
//   },
// ];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, precision = 2) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

function generateRandomStockData(numberOfStocks) {
  const stockNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const watchlist = [];

  for (let i = 0; i < numberOfStocks; i++) {
    const stock_price = getRandomInt(80, 250);
    const eps = getRandomFloat(2, 15);
    const beta = getRandomFloat(0.8, 1.2);
    const stock_returns = Array.from({ length: 5 }, () =>
      getRandomFloat(-0.015, 0.015)
    );

    watchlist.push({
      name: `Stock${stockNames[i]}`,
      stock_price,
      eps,
      beta,
      stock_returns,
    });
  }

  return watchlist;
}

// Standard deviation and risk profile functions remain the same

// Function to calculate the standard deviation
function standardDeviation(arr) {
  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b) / n;
  const variance =
    arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (n - 1);
  return Math.sqrt(variance);
}

// Function to calculate the risk profile for a watchlist
export default function calculateRiskProfile(num) {
  const watchlist = generateRandomStockData(num);
  const totalStocks = watchlist.length;
  let totalPeRatio = 0;
  let totalBeta = 0;
  let totalSharpeRatio = 0;
  const riskFreeRate = 0.02 / 252; // Assuming daily returns and 252 trading days

  for (const stock of watchlist) {
    // Calculate P/E ratio
    const peRatio = stock.stock_price / stock.eps;
    totalPeRatio += peRatio;

    // Calculate beta
    totalBeta += stock.beta;

    // Calculate Sharpe ratio
    const avgStockReturn =
      stock.stock_returns.reduce((a, b) => a + b) / stock.stock_returns.length;
    const stdDev = standardDeviation(stock.stock_returns);
    const sharpeRatio = (avgStockReturn - riskFreeRate) / stdDev;
    totalSharpeRatio += sharpeRatio;
  }

  const averagePeRatio = totalPeRatio / totalStocks;
  const averageBeta = totalBeta / totalStocks;
  const averageSharpeRatio = totalSharpeRatio / totalStocks;

  return {
    averagePeRatio,
    averageBeta,
    averageSharpeRatio,
  };
}
