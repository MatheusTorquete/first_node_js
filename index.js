// Importando o módulo express e inicializando o aplicativo Express.
const express = require("express");
const app = express();

// Rota para a página inicial ("/"): Exibe o arquivo HTML "index.html" localizado na pasta "html".
app.get("/", function(req, res){
    res.sendFile(__dirname+ "/html/index.html");
})

// Rota para a página "Sobre" ("/sobre"): Exibe o arquivo HTML "sobre.html" localizado na pasta "html".
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

// Rota para a página do blog ("/blog"): Exibe o arquivo HTML "blog.html" localizado na pasta "html".
app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
})

// Exemplo de rota com parâmetros
// app.get("/ola/:nome/:idade", function(req, res){
//     res.send(req.params);
// })

// Inicia o servidor na porta 8081 e exibe uma mensagem de confirmação no console.
app.listen(8081, function() {
    console.log("Servidor rodando na porta http://localhost:8081")
});

