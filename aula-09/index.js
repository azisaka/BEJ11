const callbackA = (callback) => {
    setTimeout(() => {
        console.log("callback A")
    }, 3000)

    callback()
    console.log("fim do callback A")
}

const callbackB = (callback) => {
    setTimeout(() => {
        console.log("callback B")
    }, 1000)

    callback()
    console.log("fim do callback B")
}

const callbackC = () => {
    console.log("fim do callback C")
}


// Callback hell
const main = () => {
    callbackA(() => {
        callbackB(() => {
            callbackC()
        })
    })
}

main()