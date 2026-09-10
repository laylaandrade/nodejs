const readline = require('readline')


const rl = readline.createInterface({
input: process.stdin,
outoud: process.stdout
})


console.log("Olá, Mundo")
rl.question("Qual e o seu nome? \n", async nome=>{
 console.log(`Ola, ${nome}`)
 rl.close()
})

console.log("Ola node")