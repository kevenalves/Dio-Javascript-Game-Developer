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

    for (let i in order) {
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
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length && order.length <= 4) {
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length == 5) {
        msg1();
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length > 5 && order.length <= 9) {
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length == 10) {
        msg2();
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length > 10 && order.length <= 19) {
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length == 20) {
        msg3();
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length > 20 && order.length <= 49) {
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length == 50) {
        msg4();
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length > 50 && order.length <= 99) {
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length == 100) {
        msg5();
        nextLevel();
    } else if (clickedOrder.length == order.length && order.length > 100) {
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
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
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
    attScore();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação final: ${score}\nVocê perdeu! :(\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
purple.onclick = () => click(2);
blue.onclick = () => click(3);


//Menu do jogo
const menu = document.querySelector('.menu');

function iniciar() {
    menu.classList.add('none');

    setTimeout(() => {
        playGame();
        attScore();
    }, 200);
}

//Atualiza o número da rodada
const point = document.querySelector('.point');

function attScore() {
    point.innerHTML = (score)
}



// === Mensagens personalizadas === //
const container = document.getElementById("container");

// 5 rodadas seguidas
function msg1() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = `INCRÍVEL!\nVocê acertou: ${score} rodadas seguidas!!!\n`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);
}

// 10 rodadas seguidas
function msg2() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = `INACREDITÁVEL!\nVocê acertou: ${score} rodadas seguidas!!!\n`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);
}

// 20 rodadas seguidas
function msg3() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = `MEU DEUS, ISSO É LOUCURA!\nVocê acertou: ${score} rodadas seguidas!!!\n`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);
}

// 50 rodadas seguidas
function msg4() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = `VOCÊ AINDA É HUMANO?\nVocê acertou: ${score} rodadas seguidas!!!\n`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);
}

// 100 rodadas seguidas
function msg5() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = `VOCÊ É UM DEUS!\nVocê acertou: ${score} rodadas seguidas!!!\n`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);
}