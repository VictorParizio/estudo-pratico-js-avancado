const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

/* CONCATENAR DOIS ARRAYS */
/*
let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
let pessoas2 = ['Pedro', 'João', 'Paulo']

// pessoas1 = pessoas1.concat(pessoas2)

pessoas1 = [...pessoas1, ...pessoas2]
console.log(pessoas1)
*/
/* CLONAR OBJETO */

const pessoas1 = { nome: 'Roberto', idade: 33}

const objetoClonado = { ...pessoas1 }
console.log(objetoClonado)