/*
setTimeout(() => {
    alert('Olá Mundo!')
}, 2000);
*/
/*
setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);
*/
/*
setTimeout(() => {
    console.log('console dentro do setTimeout')
}, 2000);
console.log('console depois do setTimeout')
*/

let idDoIntervalo = setInterval(() => {
    console.log('Execultando a cada 2 segundos')
}, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()