const irpf = require('./irpf')

describe('when salary is R$ 2112', () => {
    test('returns R$ 0', () => {
        const result = irpf(2112)

        expect(result).toBe(0)
    })
})

describe('when salary is R$ 2112.01', () => {
    test('returns R$ 0', () => {
        const result = irpf(2112.01)

        expect(result).toBe(0)
    })
})

describe('when salary is R$ 2500', () => {
    test('returns R$ 12.22', () => {
        const result = irpf(2500.0)

        expect(result).toBe(44.83) 
    })
})

describe('when salary is R$ 5000', () => {
    test('returns R$ 12.22', () => {
        const result = irpf(5000.0)

        expect(result).toBe(164.1) 
    })
})