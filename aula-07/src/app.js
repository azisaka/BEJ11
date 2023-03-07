const express = require("express")
const app = express()

app.use(express.json())

const usersController = require("./controllers/users")

app.use("/users", usersController)

app.get("/", (request, response) => {
    response.json({ test: "OK" })
})

module.exports = app