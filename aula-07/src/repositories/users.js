const database = require("../database")
const cuid = require("@paralleldrive/cuid2")

const create = (input) => {
    const id = cuid.createId()
    database[id] = input

    console.log(database)

    return { ...input, id }
}

module.exports = { create }