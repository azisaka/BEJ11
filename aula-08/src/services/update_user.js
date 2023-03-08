const repository = require("../repositories/users")

const updateUser = (id, input) => {
    const result = repository.update(id, input)

    return result
}

module.exports = updateUser