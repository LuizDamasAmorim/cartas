/**
 * Estydo do array
 * Exemplo de uso em um jogo de cartas
 *  @author Luiz Damas Amorim
 */

function sortear(){

    //           [0] ...
    let nipes = ["♥", "♦", "♣", "♠"]
             //  [0]  ...
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8" ,"9", "10", "J" ,"Q", "K"]

    // gerando um número aleatório em JS (random) ---------

    // Math.floor converte para números inteiros 
    // Math.random() * 4 (gera 4 números 0, 1, 2, 3)
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteada = faces[Math.floor(Math.random() * 13)] // (* 13 é importante para mostrar quantos obj tem na array) 

    // console.clear() // Limpar a tela (sumir a anterior) sempre que apertar no botão

    // console.log(faceSortiada)  // Responsável por mostrar a variável no terminal
    // console.log(nipeSorteado)


    // Detalhe da cor com base no nipe sorteado 
    let cor
    if(nipeSorteado === "♥" || nipeSorteado === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }


    // Renderização do canto superior esquerdo 
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`  // innerHTML serve para colocar tags do HTML no JS
    // A linha abaixo aplica o estilo de cpr ao documento html identificado como 'supEsq'
    document.getElementById('supEsq').style.color = cor

    // Renderização do Centro
    // Verificar o nipe sorteado e renderizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta 
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === "J") {
        cc.innerHTML = `<img src="img/valete.png">`
    } else if (faceSorteada === "Q") {
        cc.innerHTML = `<img src="img/dama.png">`
    } else if(faceSorteada === "K") {
        cc.innerHTML = `<img src="img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }
    
    // Renderização do canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // A linha abaixo aplica o estilo de cpr ao documento html identificado como 'infDir'
    document.getElementById('infDir').style.color = cor
}
