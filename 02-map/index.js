let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 }
]
/*
let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
        nomeDasPessoas.push(pessoas[i].nome)
}

let nomeDasPessoas = pessoas.map(function (pessoa) {
    return pessoa.nome + "têm " + pessoa.idade + " anos de idade"
})
*/
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " + pessoa.idade + " anos de idade")

console.log(nomeDasPessoas)