const repository = require("../repositories/users")

const destroyUser = (id) => {
    const result = repository.destroy(id)

    return result
}

module.exports = destroyUser