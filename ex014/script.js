 //length

 var array = [1,2,3,4,5,6,7,8,9,10]

 console.log(array.length) //qual o tamanho do array

 //push

 array.push(11) //adiciona algo no final do array
 array.push('Qualquer coisa')
 console.log(array)

 //pop 

 array.pop() //remove do final do array
 console.log(array)

 //unshift

 array.unshift(0) //adiciona algo no inicio do array
 array.unshift('teste')

 console.log(array)

 //shift

 array.shift() //remove algo do inicio do array

 //acessar o ultimo elemento do array

 array[array.length - 1]

 //verificar se é um array

 Array.isArray(array) //true

//  -----------------------------------------------------------  //

var arr = [1,2,3,4,5]

//splice

arr.splice(2,0,999) //indice, deleção, numero a adicionar

arr.splice(4,1) //[1,2,999,3,5]

//indexOf

arr.indexOf(5) //indica qual o indice do parametro passado

//join

var frase = ['O', 'rato', 'roeu', 'a', 'roupa']

frase.join(' ') //transforma o array numa string  //em seu parametro passamos o separador

//reverse

frase.reverse() //inverte a ordem dos elementos