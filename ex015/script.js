let object = {
    nome: 'Objeto',
    idade: 17,
    falar: function(){
        console.log('Olá, tudo bem?')
    },
    soma: function(a,b) {
        return a + b
    }
}

console.log(object.nome)
console.log(object.falar)

var soma = object.soma(2,3)
console.log(soma)