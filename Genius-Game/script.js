let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 150);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 150);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length && order.length <= 5) {
        alert(`Você acertou!\nPontuação: ${score}\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    } else if(clickedOrder.length == order.length && order.length > 5 && order.length <= 9 ) {
        alert(`INCRÍVELLL!\nVocê acertou: ${score} rodadas!\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    } else if(clickedOrder.length == order.length && order.length > 9 && order.length <= 14) {
        alert(`INACREDITÁVELLLLLLL!\nVocê acertou: ${score} rodadas!\nPreparado(a)?\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    } else if(clickedOrder.length == order.length && order.length > 14 && order.length <= 39) {
        alert(`MEU DEUSSSS!!! INACREDITÁVELLLLLLL!\nVocê acertou: ${score} rodadas!\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    } else if(clickedOrder.length == order.length && order.length > 39 && order.length <= 99) {
        alert(`VOCÊ É UM DEUS!!! Que memória absurda!\nVocê acertou: ${score} rodadas!\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    } else if(clickedOrder.length == order.length && order.length > 100) {
        alert(`O que você ainda está fazendo aqui?! SEU LOUCOOOOOOOO!\nVocê acertou: ${score} rodadas!\nClique em Ok para iniciar o próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('active');

    setTimeout(() => {
        createColorElement(color).classList.remove('active');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return purple;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
purple.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();