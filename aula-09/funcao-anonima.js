console.log(() => {
    return "Hello, Zisa"
})

const zisa = () => {
    return "Hello, Zisa"
}

console.log(zisa)

const now = () => new Date()

console.log(now())

setTimeout(() => {
    console.log(now())

    setTimeout(() => {
        console.log(now())
    }, 1000)
}, 1000)