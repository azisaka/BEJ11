const express = require("express")
const app = express()

app.use(express.json())

const createUser = require("./services/create_user")

app.get("/", (request, response) => {
    response.json({ test: "OK" })
})

app.post("/users", (request, response) => {
    const input = request.body
    const { name, email } = input

    const result = createUser(name, email)

    response.json(result)
})

module.exports = app