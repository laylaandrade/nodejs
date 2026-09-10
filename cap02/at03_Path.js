const path = require('path')

let arquivo = './at03_Path.js'

console.log("Extensao: ", path.extname(arquivo))
console.log("Nome Completo: ", path.basename(arquivo))
console.log("unidade base: ", path.dirname(arquivo))
console.log("Caminho absoluto: ", path.resolve(arquivo ))
