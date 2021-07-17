const livros = require('./database')
const readline = require ('readline-sync')

//Pegar um input

const entradaInicial = readline.question("Deseja buscar um livro? S/N ")

// Se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente da qtde de páginas

if (entradaInicial.toLocaleUpperCase() === "S") {           
    console.log("Essas são as categorias disponíveis:")
    console.log("Produtividade", " / Historia brasileira", 
    " / Americas", " / Tecnologia", " / Estilo de vida")

    const entradaCategoria = readline.question("Qual categoria voce escolhe? ")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {

    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis: ")
    console.table(livrosOrdenados)
}
