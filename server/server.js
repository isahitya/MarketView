const express = require("express")
const app = express()

const {Client} = require("@apperate/iexjs")
const client = new Client({api_token:"pk_451507ecb91b41b1a945850cff6f0b97"})


app.get("/api", (req,res) => {
    res.json({"users": ["User 1", "User 2"]})
})

app.get("/api/stock", async (req, res) => {
    const data = await client.quote({symbol: "AAPL"});
    console.log(data)    
    res.json(data)
})



const port = 5555
app.listen(port, () => {console.log("Server started on port:" + port)})


