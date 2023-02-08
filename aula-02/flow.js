// Flow

/*
let x = 4

if (x > 2) {
    console.log("x > 2")
    console.log("verdadeiro")
} else {
    console.log("falso")
}
*/


// for(let index = 0; index < 10; index = index + 1) {
//     console.log(`index: ${index}`);
// }

/*
for(let index = 0; index < 10; index++) {
    console.log(`index: ${index}`);
}

for(let index = 10; index > 0; index--) {
    console.log(`index: ${index}`);
}
*/
/*
let index = 0

while(index < 10) {
    console.log(`index: ${index}`);

    index = index + 1
}
*/

let people = ["Zisa", "Klisman", "Leonardo", "Luciano"]

/*
for(let index = 0; index < people.length; index++) {
    let person = people[index];

    console.log(person);

    if (person == "Klisman")
        break
}
*/

/*
for(let index = 0; index < people.length; index++) {
    let person = people[index];

    if (person == "Klisman")
        continue

    console.log(person);
}
*/

let opcao = 6

/*
switch(Number(opcao)) {
    case 1:
        console.log("A")
        break

    case 2:
        console.log("B")
        break
    
    case 3:
        console.log("C")
        break

    default: 
        console.log("Opção inválida")
}
*/

/*
if (opcao == 1) {
    console.log("A")
} else if (opcao == 2) {
    console.log("B")
} else if (opcao == 3) {
    console.log("C")
} else {
    console.log("Opção inválida")
}
*/

let opcoes = {
    1: "A",
    2: "B",
    3: "C"
}

console.log(opcoes[opcao] || "Opção inválida")