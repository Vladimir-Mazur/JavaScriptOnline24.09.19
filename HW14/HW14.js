

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
const warning1 = document.querySelector('.warning1')
const warning2 = document.querySelector('.warning2')
let allLvLs = document.querySelector('#lvl')
let molesNumber = 0;
let isPlaying = false;
let countMoles = 0;
let lvl = 1;
let time = 0;

console.log(JSON.parse(localStorage.getItem('usersList'))[120].name)

for (let i = 9; i >= 0; i--) {
    let game = document.querySelector(`.game${10 - i}`)
    let gameResult = JSON.parse(localStorage.getItem('usersList'))
    gameResult = gameResult[gameResult.length - i - 1]
    console.log('gameResult', gameResult, 'game', game)
    game.innerHTML = `<li class="game${10 - i}">${gameResult.name}-----${gameResult.count}</li>`
}

console.log(JSON.parse(localStorage.getItem('usersList'))[120])
// console.log()

startBtn.addEventListener('click', startGame)
moles.forEach((mole) => {
    mole.addEventListener('click', catchMole)
})

allLvLs.addEventListener('change', function (e) {
    lvl = e.target.value
    console.log('lvl', lvl)
    time = chooseTime()
    console.log('time', time)
    return time
})

function catchMole() {
    const parentClass = document.querySelector('.up')
    if (parentClass !== null) {
        countMoles++;
    }
    score.textContent = countMoles;
    gameScore.textContent = countMoles;
    parentClass.classList.remove('up');
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
   const id = Math.floor(Math.random() * holes.length);
   const hole = holes[id];
   return hole;
}

function chooseTime () {
    if (lvl === '1') {
        time = randomTime(1000, 2000);
        console.log('Легкий', allLvLs, time)
    }

    if (lvl === '2') {
        time = randomTime(900, 1500);
        console.log('Нормальный', allLvLs)
    } 

    if (lvl === '3') {
        time = randomTime(700, 1000);
        console.log('Хардкор', allLvLs)

    }
    console.log('time', time)
    return time
}

function showMole() {
    console.log('1');
    let time = chooseTime()
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
    if (time !== 0 && currentName.value !== '') {
        menu.style.display = 'none';
        afterGame.classList.remove('game-over')
        warning1.classList.add('invisible')
        warning2.classList.add('invisible')

        showMole();
        isPlaying = true;
        setTimeout(() => {
            isPlaying = false;
        }, 3000)
    } else {
        warning1.classList.remove('invisible')
        warning2.classList.remove('invisible')
    }
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






















