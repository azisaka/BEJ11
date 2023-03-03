const express = require("express")
const app = express()

app.use(express.json())

const createUser = require("./services/create_user")
const readUsers = require("./services/read_users")
const readUser = require("./services/read_user")
const updateUser = require("./services/update_user")

app.get("/", (request, response) => {
    response.json({ test: "OK" })
})

app.post("/users", (request, response) => {
    const input = request.body
    const { name, email } = input

    const result = createUser(name, email)

    response.json(result)
})

app.get("/users", (request, response) => {
    const result = readUsers()

    response.json(result)
})

app.get("/users/:id", (request, response) => {
    const result = readUser(request.params.id)

    if (result) {
        response.json(result)
    } else {
        response.status(404)
        response.json({ error: "not found" })
    }
})

app.put("/users/:id", (request, response) => {
    const { email, name } = request.body

    result = updateUser(request.params.id, { email, name })

    response.json(result)
})

module.exports = app