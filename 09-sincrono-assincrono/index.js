function colocarAguaParaFerver() {
    console.log('Colocar água para fervere')

    setTimeout(() => {
        console.log('água ferveu')
        passarOCafé()
    }, 5000)
}

function prepararParaPassarOCafe() {
    console.log('Pegar o pó de café')
    console.log('Pegar o filtro de café')
    console.log('Colocar o café no filtro')
    console.log('Colocar o filtro em cima da xícara')
}

function passarOCafé() {
    console.log('Passar o café')
}

colocarAguaParaFerver()
prepararParaPassarOCafe()