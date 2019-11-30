

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const startBtn = document.querySelector('.start');
const menu = document.querySelector('.menu');
const currentName = document.querySelector('#name');
const game = document.querySelector('.after-game');
const afterGameScore = document.querySelector('.score')
let isPlaying = false;
let countMoles = 0;


startBtn.addEventListener('click', startGame)
moles.forEach((mole) => {
    mole.addEventListener('click', catchMole)
})

function catchMole() {
    countMoles++;
    score.textContent = countMoles;
    this.parentElement.classList.remove('up');
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
   const id = Math.floor(Math.random() * holes.length);
   const hole = holes[id];
   return hole;
}

function showMole() {
    const time = randomTime(1000, 2000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (isPlaying) showMole();
        else finishGame();
    }, time)
}

function startGame() {
    menu.style.display = 'none';
    game.classList.remove('game-over')
    afterGameBtn.classList.add('invisible')

    showMole();
    isPlaying = true;
    setTimeout(() => {
        isPlaying = false;
    }, 3000)
}

function addBtn() {
    afterGameBtn.classList.remove('invisible')
}

afterGameBtn.classList.add('after-game_btn')

function finishGame() {
    game.classList.add('game-over')
    afterGameBtn.classList.remove('invisible')
    afterGameBtn.addEventListener("click", () => {afterGameBtn.classList.add('invisible')})
    menu.style.display = 'block';
    const list = JSON.parse(localStorage.getItem('usersList')) || [];
    list.push({name: currentName.value, count: countMoles})
    localStorage.setItem('usersList', JSON.stringify(list))
    afterGameScore.textContent = 'close'

    countMoles = 0;
    score.textContent = 0;
    currentName.value = '';
}






















