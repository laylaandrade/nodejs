const os = require('os')


console.log("Processador: ", os.cpus())
console.log("Qtde memoria livre: ", os.freemem())
console.log("Diretorio do usuario: ", os.homedir())
console.log("Familia do S.O.: ", os.type())
console.log(Process.env)