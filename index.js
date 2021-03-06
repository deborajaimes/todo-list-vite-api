//iniciando API em NODE --mensagem

//importar o express
let express = require('express')

let api = express() //inicializa a aplicação (api) com express
api.use(express.json()) //autoriza requisições com o body em JSON

api.get("/", function (req, res) {
    res.json({ mensagem: "Olá mundo JSON" })
})

api.post("/", function (req, res) {
    console.log(req.body)
    res.json({ mensagem:`A mensagem recebida foi: ${req.body.mensagem}`})
})

api.listen(3000, function () {
    console.log("API rodando na porta 3000")
}) //liga o servidor na porta 3000
