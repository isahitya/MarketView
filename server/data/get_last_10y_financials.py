import requests
import json

# Define the symbols to retrieve financial data for
#aapl,fb,msft,amzn,tsla,nvda,goog,meta,amd,jpm,unh
symbols = ["AAPL", "FB", "MSFT", "AMZN", "TSLA", "NVDA", "GOOG", "META", "AMD", "JPM", "UNH"]

# Define the API endpoint and parameters
endpoint = "https://api.polygon.io/vX/reference/financials"
params = {
    "timeframe": "annual",
    "limit": "10",
    "apiKey": "icNNjhfIlZtn_29RnVPKJ4VkljK5O7iS"
}

# Create an empty dictionary to store the financial data
financial_data = {}

# Loop through the symbols and retrieve financial data for each one
for symbol in symbols:
    # Make the API request
    params["ticker"] = symbol.upper() # Convert symbol to uppercase
    response = requests.get(endpoint, params=params)
    
    # Store the response in the dictionary
    financial_data[symbol.upper()] = response.json()

# Write the financial data to a file, prettified
with open("last_10y_financials.json", "w") as file:
    json.dump(financial_data, file, indent=4)
