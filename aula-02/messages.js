const hello = (name) => {
    console.log(name)
}

module.exports.hello = hello

module.exports.helloWithMessage = (name) => {
    hello(`Name is ${name}`)
}
