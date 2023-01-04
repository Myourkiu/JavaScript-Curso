//length

var nome = 'Pedro'

console.log(nome.length) //sai 5

//indexOf

console.log(nome[2]) //sai d

var frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf("roeu")) //sai 7, que é o indice que começa a palavra

//slice

var roeu = frase.slice(7, 11)

console.log(roeu) //sai a palavra roeu

//replace

var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase) // sai 'O rato teste a roupa do rei de Roma'