const debug = false;

const fillINSS = ( ) => {
    let result = []

    // https://www.gov.br/inss/pt-br/assuntos/confira-a-nova-tabela-de-contribuicao-para-a-previdencia
    // Minimum, Maximum, percentage 
    result.push([0      , 1302.00, 7.5])
    result.push([1302.01, 2571.29, 9])
    result.push([2571.30, 3856.94, 12])
    result.push([3856.95, 7507.49, 14])

    return result

}

const findINSS = (table, salary) => {
    let value = 0
    let found = false 

    for (let i = 0; i < table.length; i++) {
        const e = table[i];
        
        if ( salary >= e[0] && salary <= e[1] ){
      
            value   = salary * (e[2]/100)
            if (debug) {
                console.log(`salary is ${salary}`)
                console.log(`index is ${i}`)
                console.log(`result is ${value}`)
            }  

            found   = true
            
            break
        }
    }

    //acima do maximo, pega o teto
    if (found == false) {
        value = 1051.04
    }

    return value
}

const inss = (salary) => {
    let table   = fillINSS( )
    let result  = findINSS(table, salary)

    result = Number.parseFloat(result.toFixed(2))

    return result

}

module.exports = inss