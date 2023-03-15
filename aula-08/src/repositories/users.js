const database = require("../database")
const { mongoose } = require("../mongo")

const cuid = require("@paralleldrive/cuid2")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cryptedPassword: String,
})

const model = mongoose.model('usuarios', userSchema)

const create = async (input) => {
    const user = new model({ ...input, cryptedPassword: "secret" })
    
    const result = await user.save()

    const id = result._id
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