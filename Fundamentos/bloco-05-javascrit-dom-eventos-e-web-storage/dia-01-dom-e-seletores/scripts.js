// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTextoP() {
    let mudaTexto = document.getElementsByTagName('p')[1];
    mudaTexto.innerText = "Daqui a dois anos vou estar trabalhando em uma grande empresa e crescendo profissionalmente"
}
mudaTextoP();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109))
function mudaCorAmarelo() {
    let mudaCor = document.getElementsByClassName('main-content')[0];
    mudaCor.style.background = "rgb(76,164,109";
}
mudaCorAmarelo();

// Crie uma função que mude a cor do quadrado vermelho para branco
function mudaCorVermelho() {
    let mudaCor = document.getElementsByClassName('center-content')[0];
    mudaCor.style.background = "white";
}
mudaCorVermelho();

// Crie uma função que corrija o texto da tag <h1>
function corrigeTexto() {
    let corrigeTexto = document.getElementsByTagName('h1')[0];
    corrigeTexto.innerText = "Java Script";
}
corrigeTexto();

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo
function modificaTexto() {
    let modificaTexto = document.getElementsByTagName('p')[0];
    modificaTexto.innerHTML = modificaTexto.innerHTML.toUpperCase();
}
modificaTexto();

// Crie uma função que exiba o conteúdo de todas as tags <p> no console
function exibeTags() {
    let exibeTags = document.getElementsByTagName('p');
    for (let i = 0; i < exibeTags.length; i += 1) {
        console.log(exibeTags[i].innerHTML);
    }
}
exibeTags();

