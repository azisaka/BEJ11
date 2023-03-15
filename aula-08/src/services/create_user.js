const repository = require("../repositories/users")

const createUser = async (name, email) => {
    const input = { name, email }

    const result = await repository.create(input)

    console.log(result)
    
    return result
}

module.exports = createUser