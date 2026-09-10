import express from 'express';

const app = express()
const PORT = 3000

app.get("/", (req, res) => {

    const { nome, endereco } = req.query

    if (!nome) {
        res.send(`
         <h1>informe seu nome</h1> 
         <form method="GET">
          <label for="nome">nome:</label>
          <input type="text" name="nome" placeholder="digiteaqui..." required /><br>
          <label for="endereco">endereco:</label>
          <input type="text" name="endereco" id="indereco" placeholder="digiteaqui"/>
          <input type="submit" value="enviar">
         </form>
    `)
    } else {
        res.send(`<h1>usuario: ${nome} </h1><br>
    <h1>Endereco: ${endereco}</h1>
    `)
    }
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
