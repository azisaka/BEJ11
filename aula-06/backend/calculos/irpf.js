const debug = false;

const fillIRPF = ( ) => {
    let result = []

    //https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica#calculo_mensal_IRPF
    // Minimo, maximo, percentual, dedução
    result.push([0          , 1903.98, 0    , 0         ])
    result.push([1903.99    , 2826.65, 7.5  , 142.80    ])
    result.push([2826.66    , 3751.05, 15   , 354.80    ])
    result.push([3751.06    , 4664.67, 22.5 , 636.13    ])
    result.push([4664.68    , 9999999, 27.5 , 869.36    ])

    if (debug) {
        console.log(`tabela IRPF: ${result}`)
    }

    return result
}

const findIRPF = (table, salary) => {
    let value = 0

    for (let i = 0; i < table.length; i++) {
        const e = table[i];
        
        if (salary >= e[0] && salary <= e[1]) {
            value = (salary * (e[2]/100))-e[3]
            
            if (debug) {
                console.log(`salary is ${salary}`)
                console.log(`index is ${i}`)
                console.log(`element is ${e}`)
                console.log(`result is ${value}`)
            }

            break
        }


    }
    
    return value 
}
const irpf = (salary) => {

    let table = fillIRPF( )
    let result = findIRPF(table, salary)

    result = Number.parseFloat(result.toFixed(2))

    return result
}

module.exports = irpf