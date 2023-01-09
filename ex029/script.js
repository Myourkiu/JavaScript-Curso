 //EVENTOS
 
 //onload = como o nome diz, dita uma função/ação que é iniciada após o objeto ser iniciado

 window.onload = function() {
    console.log('o dom ja carregou!')
 }

//click = ativado quando o usuário clica em um elemento que atrelamos o evento

var btn = document.querySelector('#btn')

btn.addEventListener('click', function () {

    this.style.backgroundColor = 'purple'
})

var title = document.querySelector('#title')

title.addEventListener('click', function(){
    this.textContent = 'Ola'
    this.style.color = 'purple'
})

var subtitle = document.querySelector('#subtitle')

subtitle.addEventListener('dblclick', function(){ //click duplo
    this.style.display = 'none'
})

//mouseover e mouseout = ativado quando o usuário passa o mouse em cima e ativado quando o usuário sai do elemento, respectivamente

var mouse = document.querySelector('#btn2')

mouse.addEventListener('mouseover', function(){
    this.style.color = 'red'
})

mouse.addEventListener('mouseout', function(){
    this.style.color = 'black'
})

//keydown e keyup = ativado quando o usuário aperta a tecla e quando ele solta, respectivamente

document.addEventListener('keydown', function (event) {
    if(event.key === 'Enter')
    console.log('apertou enter')
})

document.addEventListener('keyup', function (event) {
    if(event.key === 'Enter')
    console.log('soltou enter')
})