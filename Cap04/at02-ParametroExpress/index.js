import express  from "express";
const app = express()
const PORT = 3000
app.get("/", (req, res)=>{
    res.send('<h1> Pagina Inicial </h1>')
})

app.get(["/bemvindo", "/bemvindo/:nome"], (req, res)=>{
   
const {nome} = req.params
   
if(nome){
 res.send(`<h1> Bem vindo ${nome} </h1>`)
}else{
 res.send(`<h1>Nome indefinido</h1>`)
}

})

app.listen(PORT, ()=>{
    console.log(`Aplicaçao rodando em http://localhost:${PORT}`)
})