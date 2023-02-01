const express = require("express")
const app = express()

app.get("/", function(request, response) {
    response.send("OK")
})

app.get("/lists/:id", function(request, response) {
    response.send(`Lista #${request.params.id}`)
})

app.listen(3000)