var el = document.createElement('h3')
el.classList = 'h3-class'

var text = document.createTextNode('Esse é o texto')

el.appendChild(text)

//selecionar o elemento que deseja trocar, no caso, vai ser o h1

var title = document.querySelector('#title')

//selecionar o pai do el

var elPai = title.parentNode

//trocar os elementos

elPai.replaceChild(el, title) //elemento a ser adicionado, elemento a ser substituido