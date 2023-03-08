const repository = require("../repositories/users")

const readUsers = () => {
    const usersData = repository.all()
    const users = []

    for(let id in usersData) {
        users.push({
            name: usersData[id].name,
            id
        })
    }

    return users
}

module.exports = readUsers