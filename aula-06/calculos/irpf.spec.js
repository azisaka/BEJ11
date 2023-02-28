const irpf = require("./irpf")
const inss = require("./inss")

describe('when salary is R$1903.98 and minus the INSS is R$1732,62', () =>
    test('returns R$0.00', () => {
        const salary = 1903.98
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(0) //matcher

    })
)

describe('when salary is R$ 2571.29 and minus the INSS is R$2339.88', () =>
    test('returns R$32.69', () => {
        const salary = 2571.29
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(32.69) //matcher

    })
)

describe('when salary is R$3700 and minus the INSS is R$3256', () =>
    test('returns R$133.60', () => {
        const salary = 3700
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(133.60) //matcher

    })
)

describe('when salary is R$4500 and minus the INSS is R$3870', () =>
    test('returns R$234.62', () => {
        const salary = 4500
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(234.62) //matcher

    })
)

describe('when salary is R$ 7000 and minus the INSS is R$6020', () =>
    test('returns R$786.14', () => {
        const salary = 7000
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(786.14) //matcher

    })
)

describe('when salary is R$ 10000 and minus the INSS is R$8948.96', () =>
    test('returns R$1591.60', () => {
        const salary = 10000
        const result = irpf(salary - (inss(salary)) )

        expect(result).toBe(1591.60) //matcher

    })
)