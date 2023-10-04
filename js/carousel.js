const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['img/Lol_1Perso.png', 'img/LoL_5Perso.png', 'img/Lol_4Perso.png', 'img/Lol_6Perso.png', 'img/Lol_Esport.png', 'img/Lol_Combat.png', 'img/Lol_GameplayPcMac.png'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
