const filmes = [
    {titulo: "corra", duraçao: 120, genero: "suspense", nota: 10},
    {titulo: "077", duraçao: 130,  genero: "açao", nota: 7},
    {titulo: "panico na floresta", duraçao: 90, genero: "terror", nota: '6'},
    {titulo: "velozes e furiosos", duraçao: 130, genero: "açao", nota: 8},
    {titulo: "kung fu panda", duraçao: 120, genero: "animaçao", nota: 7 },
    {titulo: "shrek", duraçao: 90, genero: "animaçao", nota: 8.5}
]

/*let titulos = filmes.map(function(lista){
    return {
        titulo: lista.titulo
    }
})
console.log(titulos)*/

/*let tempo = filmes.filter(f => f.duraçao > 120).map(function(lista){
    return{
        titulo: lista.titulo
    }
})
console.log(tempo)*/


/*const totalDuracao = filmes.reduce((total, filme) => {
    return total + filme.duraçao;
}, 0);

console.log(totalDuracao)*/

/*const filmeTop = filmes.find(filme => filme.nota > 9);
 
console.log("Filme com nota > 9:", filmeTop);*/

// Array de filmes
 
const temNotaRuim = filmes.some(filme => filme.nota < 5);
 
const todosBons = filmes.every(filme => filme.nota > 6);
 
 
 
console.log("Existe filme com nota < 5?", temNotaRuim);
 
console.log("Todos têm nota > 6?", todosBons);
 
 
 
 
 
const ordenados = [...filmes].sort((a, b) => b.nota - a.nota);
 
console.log("Ordenados por nota:", ordenados);
 
filmes.splice(2, 1, {
 
    titulo: 'need for speed',
 
    duracao: 120, 
 
    genero: 'açao',
 
    nota: 8
 
});
 
 
 
console.log("Lista atualizada:", filmes);