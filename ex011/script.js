//parseFloat

console.log(parseFloat('12.99'))
console.log(Number.parseFloat('12.99'))

//parseInt

console.log(parseInt('12'))
console.log(Number.parseInt('12.99')) //sai 12 apenas

//toFixed

console.log(12.123123132.toFixed(0)) //para na primeira casa, ou seja, sai 12

//isNaN

console.log(isNaN("Teste")) //true
console.log(isNan(12)) //false
console.log(isNaN('14')) //false