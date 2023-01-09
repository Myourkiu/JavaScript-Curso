//clearTimeout

var x = 0

var timer = setTimeout(() => {
    console.log('o x é 0')
}, 1500);

x+=5

if(x > 0){
    clearTimeout(timer)
}

//clearInterval

var interval = setInterval(() => {
   console.log('teste')
}, 500);

setTimeout(() => {
    console.log('parar intervalo')
    clearInterval(interval)
    console.log('o intervalo foi parado.')
}, 2500);
