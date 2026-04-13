const nums = [1,2,3,4,5]

let resultado = nums.map(function(valor){
    return valor * 2
})

console.log(resultado)

const produtos = [
    {nome: "banana", preco: 3},
    {nome: "berinjela", preco: 2},
    {nome: "laranja", preco: 4}
]
const produtosDesconto = produtos.map(function(produto){
    return {
        nome: produto.nome,
        preco: produto.preco - (produto.preco * 0.10)
    }
})
console.log(produtos)
console.log(produtosDesconto)