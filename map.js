const nums = [1,2,3,4,5]

let resultado = nums.map(function(valor){
    return valor * 2
})

console.log(resultado)

/*exemplo do uso do map - desconto dos produtos*/
const produtos = [
    {nome: "banana", preco: 3},
    {nome: "berinjela", preco: 2},
    {nome: "laranja", preco: 4}
]

/*calculando 10% de desconto para os produtos*/
const produtosDesconto = produtos.map(function(produto){
    return {
        nome: produto.nome,
        preco: produto.preco - (produto.preco * 0.10)
    }
})
console.log(produtos)
console.log(produtosDesconto)

/*filter - filtra os valores*/
let numeros = [8,4,7,6,20]
let pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

/*filtrando os numeros maiores que 20 */
let numbers = [10,20,80,6,9,7]
let maior = numbers.filter(n=> n > 20)
console.log(maior)

/*includes()*/
let cores = ['rosa','vermelho']
console.log(cores.includes('verde'))

/*some() - existe algum impar */
let valores = [2,58,100,56,2,6,8]
let temImpar = valores.some(n=>n % 2 !== 0)
console.log(temImpar)//flase

// every() -
let todosPares = valores.every(n=>n % 2 !== 0)
console.log(todosPares) //true

/*verifique se alguem reprovou com o some()
e verifique se todos passaram com o every()
se for menor que 5 reprovado - maior ou igual a 5 aprovado */

let alunos = [
    {nome: 'ana', nota: 8},
    {nome: 'joao', nota: 5},
    {nome: 'carlos', nota: 7}
];

let reprovado = alunos.some(a => a.nota < 5)
console.log(reprovado)

let passaram = alunos.every(a => a.nota >= 5)
console.log(passaram)
