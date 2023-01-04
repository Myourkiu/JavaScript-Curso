//toUpperCase e toLowerCase

var frase = 'Ola, isso é um teste'

console.log(frase.toLowerCase()) //frase em caixa baixa
console.log(frase.toUpperCase()) //frase em caixa alta

//trim 

var nome = '           Pedro         '

var nomeTrim = nome.trim()
console.log(nomeTrim) //sai o nome sem espaços

//split

console.log(frase.split(' ')) //transforma em array, usando como referencia o separador espaço

var tags = 'PHP, JavaScript, HTML, CSS'

console.log(tags.split(', ')) //transforma em array usando como referencia os separadores espaço e virgula

//lastIndexOf

var fraseDois = 'teste teste teste'

console.log(fraseDois.lastIndexOf('teste'))