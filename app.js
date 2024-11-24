const express = require("express")
const path = require("path")

const port = 4000;
const app = express()

app.get("/home", (req, res) => {
    const filePath = path.join(__dirname, "/webContent/html/index.html");
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("File sending error:", err.message)
            res.status(404).json({ error: "Could not load file: " + err.message })
        }
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
    console.log(`Home page: http://localhost:${port}/home`)
})