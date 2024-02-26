//Importação do módulo express
const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.end("Página Inicial")
})

app.get("/cadastrar/:produto", function(req,res){
    res.end("Parametro:" + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req,res){
    res.end("Parametro1: " + req.params.produto + "\nParametro2: " +req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req,res){
    res.end("Parametro1: " +req.params.sac + "\nParametro2: " +req.params.produto)
})

//Criando o servidor web com a porta 8081 
app.listen(8081, function(){
    console.log("Servidor está rodando!!")
})