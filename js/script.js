const numeroAleatorio = parseInt(Math.random()*100+1)
//console.log(numeroAleatorio)

const botaoJogar = document.querySelector('#jogar') // const que recebe botão jogar
const caixaTexto = document.querySelector('#txtNumero') // caixa de texto
const jogadasAnteriores = document.querySelector('.vezes') //span
const jogadasRestantes = document.querySelector('.numChances') //
const recomecar = document.querySelector('.resultados') // elemento html div
const avisos = document.querySelector('.avisos') // pegando terceiro paragrafo da div resultados

//criando paragrafos com js
const paragrafo = document.createElement('p') // criando um paragrafo

//criando um vetor vazio
const numerosJogados = []

//criando uma variavel que representará o contador
let minhasJogadas = 1

//variavel para informar que podemos jogar
let playGame = true

if(playGame){
    botaoJogar.addEventListener('click', function(e){ //criando function expression/ sem nome passando como parâmetro o botão jogar
        e.preventDefault() // tira a ação de envio do botão
        let tentativa = parseInt(caixaTexto.value) // variavel que receberá um numero inteiro. este numero o usuario que vai informar
        validaChances(tentativa)

        // console.log(tentativa)
        // caixaTexto.value = ''
        // caixaTexto.focus()
    })
}

function validaChances(num){
    if(isNaN(num)){
        alert('Atenção, informe apenas digitos numericos! 🤬🤬')
        caixaTexto.value = ''
        caixaTexto.focus()
    } else if(num < 1 || num > 100){
        alert('Informe apenas valores entre 1 e 100! 🤬🤬')
        caixaTexto.value = ''
        caixaTexto.focus()
    }else if(numerosJogados.includes(num)){
        alert(`O numero ${num} já foi jogado, informe outro numero! 🫵🤔`)
        caixaTexto.value = ''
        caixaTexto.focus()
    } else {
        numerosJogados.push(num)
        if(minhasJogadas === 6 && num != numeroAleatorio){
            displayTentativas(num)
            msgTexto(`Game over!! O numero jogado era ${numeroAleatorio}`)
            fimJogo()

        } else {
            displayTentativas(num)
            checarTentativas(num)
        }
    }
    // else if(num == numeroAleatorio){
    //     alert('Acertou mizeravel! 🫵🥇')
    //     caixaTexto.value = ''
    //     caixaTexto.focus()
    // } teste

}