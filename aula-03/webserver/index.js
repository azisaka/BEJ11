const http = require("http") // standard lib

const hostname = "0.0.0.0" // IP
const port = 3000

const callback = (request, response) => {
    if (request.url === '/users') {
        if(request.method === 'GET') {
            response.statusCode = 200 // OK
            response.setHeader('Content-Type', 'application/json')

            const users = [
                {
                    name: 'Leonardo'
                },
                {
                    name: 'Klisman'
                }
            ]
            const json = JSON.stringify(users)
            response.end(json)
        } else if (request.method === 'POST') {
            response.statusCode = 206
            response.setHeader('Content-Type', 'text/plain')
            response.end('Criado!')
        }
    } else {
        console.log(request)

        response.statusCode = 200 // OK
        response.setHeader('Content-Type', 'application/json')

        const json = JSON.stringify({ message: 'Hello, world', aula: 3 })
        response.end(json)
    }
}

const server = http.createServer(callback)

server.listen(port, hostname, () => {
    console.log(`Running on port ${port}`)
})