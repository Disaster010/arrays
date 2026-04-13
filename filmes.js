let filmes = ["300","Oppenheimer","Duna","Devorador de Estrelas","Interestelar"]

function atualizarLista(){
    let ul = document.getElementById("lista")
    ul.innerHTML = ""

    filmes.forEach((filme) =>{
        let li = document.createElement("li")
        li.innerHTML = `${filme}`
        ul.appendChild(li)
    })
}
//push - adicionar
function adicionarFilme(){
    let input = document.getElementById("filmeInput")
    /*se o input não estiver vazio */
    if(input.value !== ""){
        /*adicionar o filme */
        filmes.push(input.value)
        /*limpando o campo do input*/
        input.value = ""
        atualizarLista()
    }
}
/*pop */
function removerUltimo(){
    filmes.pop()
    atualizarLista()
}
/*unshift */
function adicionarInicio(){
    filmes.unshift("Vingadores")
    atualizarLista() 
}
/*shift */
function removerInicio(){
    filmes.shift()
    atualizarLista() 
}
/*splice */
function removerPosicao(){
    filmes.splice(1,0)
    atualizarLista()
}
function adicionarPosicao(){
    filmes.splice(1,0,"Bananas Assasinas")
    atualizarLista()
}
//inicializar
atualizarLista()



