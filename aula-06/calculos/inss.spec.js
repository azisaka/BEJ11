const inss = require('./inss')

describe('when salary is 1302', () => {
    test('returns R$97.65 (7.5%)', () => {
        const result = inss(1302)

        expect(result).toBe(97.65) //matcher
    })
})

describe('when salary is 2400', () => {
    test('returns R$216 (9%)', () => {
        const result = inss(2400)

        expect(result).toBe(216) //matcher
    })
})

describe('when salary is 3850', () => {
    test('returns R$462 (12%)', () => {
        const result = inss(3850)

        expect(result).toBe(462) //matcher
    })
})

describe('when salary is 7000', () => {
    test('returns R$980 (14%)', () => {
        const result = inss(7000)

        expect(result).toBe(980) //matcher
    })
})

describe('when salary is 9000', () => {
    test('returns R$1051.04 (teto)', () => {
        const result = inss(9000)

        expect(result).toBe(1051.04) //matcher
    })
})
