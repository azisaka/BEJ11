const express = require("express")

const router = express.Router()

const createUser = require("../services/create_user")
const readUsers = require("../services/read_users")
const readUser = require("../services/read_user")
const updateUser = require("../services/update_user")
const destroyUser = require("../services/destroy_user")

router.post("/", async (request, response) => {
    const input = request.body
    const { name, email } = input

    const result = await createUser(name, email)

    response.json(result)
})

router.get("/", (request, response) => {
    const result = readUsers()

    response.json(result)
})

router.get("/:id", (request, response) => {
    const result = readUser(request.params.id)

    if (result) {
        response.json(result)
    } else {
        response.status(404)
        response.json({ error: "not found" })
    }
})

router.put("/:id", (request, response) => {
    const { email, name } = request.body

    result = updateUser(request.params.id, { email, name })

    response.json(result)
})

router.delete("/:id", (request, response) => {
    const { id } = request.params

    result = destroyUser(id)

    response.json(result)
})

module.exports = router