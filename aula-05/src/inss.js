const inss = (salario) => {
    let result = 0

    if (salario <= 1302.0) {
        result = salario * 0.075
    } else if (salario >= 1302.01 && salario <= 2571.29) {
        result = salario * 0.09
    } else if (salario >= 2571.30 && salario <= 3856.94) {
        result = salario * 0.12
    } else if (salario <= 7507.49) {
        result = salario * 0.14
    } else {
        result = 1051.04
    }

    return Number.parseFloat(result.toFixed(2))
}

module.exports = inss