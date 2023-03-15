const callbackA = (valid) => {
    return new Promise((resolve, reject) => {
        if(valid === false) {
            reject(new Error("Ops!"))
        } else {
            setTimeout(() => {
                console.log("callback A")
                resolve("Resolve A")
            }, 3000)

            console.log("fim do callback A")
        }
    })
}

const callbackB = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("callback B")
        resolve("Resolve B")
    }, 1000)

    console.log("fim do callback B")
})

const callbackC = () => {
    console.log("fim do callback C")

    return "FIM"
}

const main = async () => {
    
    const result = callbackA(true)
        .then((data) => {
            console.log(data)
            return callbackB
        })
        .then((data) => {
            console.log(data)
            return callbackC()
        })
        .catch((error) => {
            console.error(error.message)
        })

    console.log(result)

}

main()