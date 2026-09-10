import express from 'express'

const app = express()

app.get('/',(req, res)=>{res.send('<h1> ola mundo <h2>')})

app.get('/cadastro',(req, res)=>{res.send('<h1>pagina de cadastro<h2>')})

app.get('/sobre',(req, res)=>{res.send('<h1>Pagina sobre...<h2>')})

app.get('/usuario',(req, res)=>{res.send('<h1>Paginha de usuario<h2>')})

app.listen(3000, ()=>{
 console.log("Aplicaçao rodando em http://localhost:3000")
})