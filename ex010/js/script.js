var list = ['item0', 'item1', 'item2', 'item3']
// criou a variavel q contém os elementos da lista

var createUl = document.createElement('ul')
// criou a tag ul

var acessBody = document.getElementsByTagName('body')
// variavel que acessa o body

acessBody[0].appendChild(createUl)
// acessou o primeiro elemento do body e criou um elemento filho passado no parametro

var listOnBody = document.getElementsByTagName('ul')
// acessou a tag ul criada anteriormente e, agora, o elemento 0 passa a ser a tag Ul criada

for(var i = 0; i < list.length; i++){
// um for com uma variavel index começado no indice 0, enquanto o indice for menor que o tamanho da lista, o indice é adicionado em 1

    var liFor = document.createElement('li')
    // variavel que cria a tag li

    var textLi = document.createTextNode(list[i])
    // variavel que adiciona o texto da lista de acordo com o indice

    liFor.appendChild(textLi)
    // adiciona o texto no li

    listOnBody[0].appendChild(liFor)
    // cria um elemento filho no elemento 0
}

