//criar arrays no js
let names = ["fulano","cilano","beltrano"]

console.log(names)
//tamanho
console.log(`tamanho do array: ${names.length}`)
//indice
console.log(`ìndice ${names[0]}`)

for(let contador=0;contador < names.length; contador++){
    let mensagem = `boas vindas ${names[contador]}`
    console.log(mensagem)
}

const cores = ['amarelo','vermelho','rosa']

cores.forEach((cores) =>{
    console.log(cores)
})

//addiciona elemento no final do array
cores.push('azul')
console.log(cores)

//remove elemento do array
cores.pop()
console.log(cores)

//remove o primeiro elemento
cores.shift()
console.log(cores)

cores.unshift("roxo")
console.log(cores)

//remove na posicao desejada "vermelho" (indice 1)
cores.splice(1, 1)
console.log(cores)
