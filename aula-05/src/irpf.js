const inss = require('./inss')

const irpf = (salario) => {
    salario = salario - inss(salario)

    if (salario <= 2112) {
        return 0
    }

    let result = 0

    salario = salario - 2112

    if (salario >= 2112.01 && salario <= 2826.65) {
        result = salario * 0.075
    } else if (salario >= 2826.66 && salario <= 3751.05) {
        result = salario * 0.15
    } else if (salario >= 3751.06 && salario <= 4664.68) {
        result = salario * 0.225
    } else {
        result = salario * 0.275
    }

    return Number.parseFloat(result.toFixed(2))
}

module.exports = irpf