const http = require("http")
const url = require("url")

const calculoInss = require("./calculos/inss")
const calculoIrpf = require("./calculos/irpf")

const currency = require("currency.js")

const hostname = "0.0.0.0"
const port = 5000

const money = (value) => {
    return currency(value, { symbol: 'R$', decimal: ',', separator: '.', precision: 2 }).format()
}

const callback = (request, response) => {
    const query = url.parse(request.url, true).query
    const salary = Number.parseFloat(query.salary)

    const inss = calculoInss(salary)
    
    let netSalary = salary - inss

    const irpf = calculoIrpf(netSalary)

    netSalary = netSalary - irpf

    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

    const data = { 
        salary: money(salary), 
        inss: money(inss), 
        irpf: money(irpf), 
        netSalary: money(netSalary) 
    }

    response.end(JSON.stringify(data))
}

const server = http.createServer(callback)

server.listen(port, hostname, () => {
    console.log("Backend is up and running")
})