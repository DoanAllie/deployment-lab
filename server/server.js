const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(express.json())
app.use(cors())

çapp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Vibing on port ${port}`)
})