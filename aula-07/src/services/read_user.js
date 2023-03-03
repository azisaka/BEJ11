const repository = require("../repositories/users")

const readUser = (id) => {
    const userData = repository.find(id)

    if (userData) {
        return { ...userData, id }
    }
}

module.exports = readUser