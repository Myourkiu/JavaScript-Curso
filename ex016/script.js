alert('Olá')
this.alert('Olá2') //o this se referencia ao Window, no escopo global


let object = {
    nome: 'Pedro',
    numero: 19,
    dizerNome: function() {
        console.log('Olá, o meu nome é ' + this.nome) //o this se referencia ao objeto, quando dentro de um objeto
    },
    adicionarValor:function(){
        this.numero +=1
    }
}

console.log(object.numero) //19

adicionarValor()

console.log(object.numero) //20