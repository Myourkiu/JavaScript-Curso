//criar elemento

var element = document.createElement('div')
element.id = 'created-div'

//inserindo o elemento
var container = document.querySelector('#container')
container.appendChild(element)

//insertBefore

var element2 = document.createElement('div')
element2.id = 'div-before'

var createdDivAcess = document.querySelector('#container #created-div')

container.insertBefore(element2, createdDivAcess) 
//parametros = elemento a ser adicionado, elemento de referencia