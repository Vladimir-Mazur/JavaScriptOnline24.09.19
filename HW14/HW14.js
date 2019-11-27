

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const gameScore = document.querySelector('.game-score');
const allScore = document.querySelector('.game-all_score');
const startBtn = document.querySelector('.start');
const menu = document.querySelector('.menu');
const currentName = document.querySelector('#name');
const game = document.querySelector('game')
const afterGame = document.querySelector('.after-game');
const afterGameScore = document.querySelector('.score')
const closeBtn = document.querySelector('.close-btn')
const gameOverImg = document.querySelector('.game-over')
let molesNumber = 0;
let isPlaying = false;
let countMoles = 0;


startBtn.addEventListener('click', startGame)
moles.forEach((mole) => {
    mole.addEventListener('click', catchMole)
})

function catchMole() {
    const parentClass = document.querySelector('.up')
    if (parentClass !== null) {
        countMoles++;
    }
    score.textContent = countMoles;
    gameScore.textContent = countMoles;
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
    const time = randomTime(700, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    molesNumber += 1
    setTimeout(() => {
        hole.classList.remove('up');
        if (isPlaying) showMole();
        else finishGame();
    }, time)
}

function startGame() {
    menu.style.display = 'none';
    afterGame.classList.remove('game-over')

    showMole();
    isPlaying = true;
    setTimeout(() => {
        isPlaying = false;
    }, 10000)
}

function addBtn() {
    afterGameBtn.classList.remove('invisible')
}

function finishGame() {
    afterGame.classList.add('game-over')
    menu.style.display = 'block';
    const list = JSON.parse(localStorage.getItem('usersList')) || [];
    list.push({name: currentName.value, count: countMoles})
    localStorage.setItem('usersList', JSON.stringify(list))
    allScore.textContent = molesNumber
    closeBtn.classList.remove('invisible')
    gameOverImg.classList.remove('invisible')
    closeBtn.addEventListener('click', () => {
        closeBtn.classList.add('invisible')
        gameOverImg.classList.add('invisible')
        location.reload();
    })

    countMoles = 0;
    score.textContent = 0;
    currentName.value = '';
}






















