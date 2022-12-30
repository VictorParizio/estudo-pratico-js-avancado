/*
    Pendente
    Realizado Resolve
    Recusada Reject
    Estabelecida
*/
/*
new Promise((resolve, reject) => {

})
*/

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver água')
            resolve()
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira para ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')