const repository = require("../repositories/users")

const createUser = (name, email) => {
    const input = { name, email }
    const result = repository.create(input)

    return result
}

module.exports = createUser