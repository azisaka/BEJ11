const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const calculoInss = require("./calculos/inss")
const calculoIrpf = require("./calculos/irpf")

const currency = require("currency.js")

const money = (value) => {
    return currency(value, { symbol: 'R$', decimal: ',', separator: '.', precision: 2 }).format()
}

app.get("/", (request, response) => {
    const salary = Number.parseFloat(request.query.salary)

    const inss = calculoInss(salary)
    
    let netSalary = salary - inss

    const irpf = calculoIrpf(netSalary)

    netSalary = netSalary - irpf

    const data = { 
        salary: money(salary), 
        inss: money(inss), 
        irpf: money(irpf), 
        netSalary: money(netSalary) 
    }

    response.json(data)
})

const port = 5000
app.listen(port)