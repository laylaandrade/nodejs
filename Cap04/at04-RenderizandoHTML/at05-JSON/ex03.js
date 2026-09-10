const bancoDeDadosFicticio = `[
 {"id":1 "nome": "Matrix", "ano":1999},
 {"id":2 "nome": "o seenhor dos aneis", "ano":2001}
 {"id":3 "nome": "Inception", "ano":2010}
]`;
const filmes = JSOn.parse(bancoDeDadosFicticio)
 
const FilmesBuscados = filmes.find(filme => filme.id ==2)

console.log(filmeBuscado)