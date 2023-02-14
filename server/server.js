const express = require("express")
const app = express()

app.get("/api", (req,res) => {
    res.json({"users": ["User 1", "User 2"]})
})

const port = 5555
app.listen(port, () => {console.log("Server started on port:" + port)})


