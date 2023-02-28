const http = require("http")

const hostname = "0.0.0.0"
const port = 5000

const callback = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.end(`{"url": "${request.url}"}`)
}

const server = http.createServer(callback)

server.listen(port, hostname, () => {
    console.log("Backend is up and running")
})