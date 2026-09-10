const jsonRecebido = `{
 "nome: "maria",
 "curso": "tecnico em informatica",
 "Uc": 13
}`
console.log(jsonRecebido)

console.log(jsonRecebido.nome)

const objTransformado = JSON.parse(jsonRecebido)

console.log(objTransformado)