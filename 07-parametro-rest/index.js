/*
function(a, b, ...args){
    ...
}
*/

function incentivarQuester(mensagem, ...nomeQuesters){
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por chegar ao módulo de JavaScript avançado,', 'João', 'Pedro', 'Raphael')