// Functions

/*
function hello() {
    console.log("hello")
}

console.log(hello())
*/

/*
function soma(x, y) {
    return x + y;
}

console.log(soma(1, 2))
console.log(soma("a", "b"))
console.log(soma("a", 1))
console.log(soma(1, undefined))
console.log(soma(1, null))
console.log(soma(1))
*/

/*
function hello(name) {
    console.log(`Name: ${name}`)
}

function createUser(firstName, lastName, callback) {
    let name = `${firstName} ${lastName}`

    callback(name);
}

function toLow(qualquerCoisa) {
    console.log(String(qualquerCoisa).toLowerCase())
}

createUser("Bruno", "Azisaka", hello)
createUser("Bruno", "Azisaka", toLow)
*/

/*
const hello = function(name) {
    console.log(name);
}
*/

const hello = (name) => { // arrow function
    console.log(name)
}

hello("Zisa")