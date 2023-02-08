const foo = () => {
    console.log('Foo')
}

const main = () => {
    const callback = foo

    setTimeout(callback, 5000)
    console.log('Bar')
}

main()