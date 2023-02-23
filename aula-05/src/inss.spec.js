const inss = require('./inss')

describe('when salary is R$ 1000', () => {
    test('returns R$ 75.0 (7.5%)', () => {
        const result = inss(1000)
    
        expect(result).toBe(75.0) // matcher
    })
})

describe('when salary is R$ 1302', () => {
    test('returns R$ 97.65 (7.5%)', () => {
        const result = inss(1302.0)
    
        expect(result).toBe(97.65) // matcher
    })
})

describe('when salary is R$ 1302.01', () => {
    test('returns R$ 117.18 (9%)', () => {
        const result = inss(1302.01)
    
        expect(result).toBe(117.18) // matcher
    })
})

describe('when salary is R$ 2571,30', () => {
    test('returns R$ 308.55 (12%)', () => {
        const result = inss(2571.30)
    
        expect(result).toBe(308.56) // matcher
    })
})

describe('when salary is R$ 3856.94', () => {
    test('returns R$ 462.83 (12%)', () => {
        const result = inss(3856.94)

        expect(result).toBe(462.83)
    })
})

describe('when salary is R$ 3856.95', () => {
    test('returns R$ 539.97 (14%)', () => {
        const result = inss(3856.95)

        expect(result).toBe(539.97)
    })
})

describe('when salary is R$ 7507.50', () => {
    test('returns R$ 1051.04 (14%)', () => {
        const result = inss(7507.50)

        expect(result).toBe(1051.04)
    })
})