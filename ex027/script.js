//CallBack function síncrona

function exibir(num){
    console.log('A operação resultou em: ' + num)
}

function soma(a, b, callback){
    var op = a + b;
    callback(op)
}

soma(2,3, exibir) //vai fazer a operação dada na function soma e depois dar o callback em uma outra function

//funtion síncrona é aquela que depende de outra funtion, de forma sincronizada uma com a outra

// =========================================== //

//setTimeout = o software executa o código normalmente, porém executa o setTimeout depois do tempo determinado

console.log('antes do setTimeout')

setTimeout(function(){
    console.log('Testando o setTimeout')
}, 2000) //function e tempo (em ms)

console.log('depois do setTimeout')

//setInterval = é executada de tempo em tempo, de acordo com o intervalo determinado na function

setInterval(function(){
    console.log('testando o setInterval')
},1000)

//ambas functions trabalham de forma assíncrona com o resto do código

//em especial ao setInterval, cuidado ao usar, pois executar ações muito grandes em pouco tempo gera um consumo de memória excessivo para o cliente, fazendo o navegador travar