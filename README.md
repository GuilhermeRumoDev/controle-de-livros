# 📚 Controle de Livros

Mini projeto de treino em JavaScript para praticar `arrays`, `objetos`, `funções`, `for` e `if`.

O programa mantém uma lista de livros em memória e oferece funções para adicionar, listar, buscar, atualizar, remover e contar livros, além de calcular a média de páginas.

## Estrutura de um livro

```javascript
{ nome: "Coraline", autor: "Guilherme", paginas: 320 }
```

## Funções

| Função | O que faz |
| --- | --- |
| `adicionarLivro(titulo, autor, paginas)` | Adiciona um novo livro ao final da lista |
| `listaLivros()` | Mostra todos os livros no console |
| `buscarLivro(tituloBuscado)` | Retorna o livro com o título informado, ou `null` se não existir |
| `calcularMediaPaginas()` | Retorna a média de páginas dos livros atuais da lista |
| `atualizarPaginas(tituloBuscado, novasPaginas)` | Altera a quantidade de páginas de um livro |
| `removerLivro(tituloBuscado)` | Remove o livro com o título informado |
| `contarLivros()` | Retorna quantos livros existem na lista |

## Como rodar

Você precisa ter o [Node.js](https://nodejs.org/) instalado.

```bash
node livros.js
```

## Exemplo de saída

```
Adicionar livros:
[
  { nome: 'Coraline', autor: 'Guilherme', paginas: 320 },
  { nome: 'Harry potter', autor: 'Thayanne', paginas: 400 },
  { nome: 'O elemento', autor: 'Anthonny', paginas: 15 }
]

Lista livros:
{ nome: 'Coraline', autor: 'Guilherme', paginas: 320 }
{ nome: 'Harry potter', autor: 'Thayanne', paginas: 400 }
{ nome: 'O elemento', autor: 'Anthonny', paginas: 15 }

Buscar livro:
{ nome: 'Coraline', autor: 'Guilherme', paginas: 320 }

Atualizar paginas:
{ nome: 'Coraline', autor: 'Guilherme', paginas: 700 }

Remover livro:
[
  { nome: 'Coraline', autor: 'Guilherme', paginas: 700 },
  { nome: 'Harry potter', autor: 'Thayanne', paginas: 400 }
]

Calcular media de paginas:
550.00

Contar livros:
2
```

> A média depende do momento em que a função é chamada, pois ela sempre considera os livros que estão na lista naquele instante.

## O que pratiquei

- Criação e manipulação de arrays de objetos
- Laços `for` com índice
- Condicionais com `if`
- `push` e `splice`
- Funções com e sem parâmetros e retorno de valores

## Autor

Feito por **[GuilhermeTIFront](https://github.com/GuilhermeRumoDev)** como desafio de treino. 🚀
