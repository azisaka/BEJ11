const database = require("../database")
const cuid = require("@paralleldrive/cuid2")

const create = (input) => {
    const id = cuid.createId()
    database[id] = input

    console.log(database)

    return { ...input, id }
}

const all = () => {
    return database
}

const find = (id) => {
    return database[id]
}

const update = (id, input) => {
    const data = { ...database[id] }

    for(let key in input) {
        const value = input[key]

        if (value || value !== "") {
            data[key] = value
        }
    }

    database[id] = data

    return { ...database[id], id }
}

const destroy = (id) => {
    delete database[id]

    return true
}

module.exports = { create, all, find, update, destroy }