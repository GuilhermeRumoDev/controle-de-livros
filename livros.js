// Desafio de treino: controle de livros

let livros = [
    { nome: "Coraline", autor: "Guilherme", paginas: 320 },
    { nome: "Harry potter", autor: "Thayanne", paginas: 400 }
]
// adicionarLivro(titulo, autor, paginas) push

function adicionarLivro(titulo, autor, paginas) {
    livros.push({
        nome: titulo,
        autor: autor,
        paginas: paginas
    })
}

console.log("Adicionar livros:")
adicionarLivro("O elemento", "Anthonny", 15)
console.log(livros)
console.log()

// Lista livros usando for sem parametro

function listaLivros() {
    for (let i = 0; i < livros.length; i++) {
        console.log(livros[i])
    }
}

console.log("Lista livros:")
listaLivros()
console.log()

// Buscar um livro pelo titulo for e if tituloBuscado

function buscarLivro(tituloBuscado) {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].nome === tituloBuscado) {
            return livros[i]
        }
    }
    return null
}

console.log("Buscar livro:")
console.log(buscarLivro("Coraline"))
console.log()

// Calcular a média de páginas for sem parametro

function calcularMediaPaginas() {
    let soma = 0;
    for (let i = 0; i < livros.length; i++) {
        soma += livros[i].paginas
    }
    return soma / livros.length
}

console.log("Calcular media de paginas:")
console.log(calcularMediaPaginas())
console.log()

// Atualizar as páginas de um livro variavel e if tituloBuscado, novasPaginas

function atualizarPaginas(tituloBuscado, novasPaginas) {
    let tituloEncontrado = buscarLivro(tituloBuscado)
    if (tituloEncontrado !== null) {
        tituloEncontrado.paginas = novasPaginas
        return novasPaginas
    } else {
        return "Livro não encontrado"
    }

}

console.log("Atualizar paginas:")
atualizarPaginas("Coraline", 700)
console.log(buscarLivro("Coraline"))
console.log()

// Remover um livro for e if tituloBuscado

function removerLivro(tituloBuscado) {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].nome === tituloBuscado) {
            livros.splice(i, 1)
            return "Sucesso"
        }
    }
    return null
}

console.log("Remover livro:")
removerLivro("O elemento")
console.log(livros)
console.log()

// Contar os livros sem parametro

function contarLivros() {
    return livros.length
}

console.log("Contar livros:")
console.log(contarLivros())

console.log("Atualização media de paginas:")
console.log(calcularMediaPaginas().toFixed(2))
