


const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
const speed = document.querySelector('[name="playbackRate"]')
const plusTime = document.querySelector('.plus-time');
const minusTime = document.querySelector('.minus-time');

console.log(video.paused)

function toggleVideo() {
    if (video.paused) {
        video.play();
        toggle.innerHTML = toggle.innerHTML.replace('►', '❚ ❚')
    } else {
        video.pause();
        toggle.innerHTML = toggle.innerHTML.replace('❚ ❚', '►')
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    time.value = parseInt(video.currentTime);
}

function handleSpeed() {
    video.playbackRate = speed.value;
}

function handleVolume() {
    video.volume = volume.value;
}

function plusTimeVideo() {
    const time = video.currentTime + 25;
    plusTime.value = time;
    video.currentTime = plusTime.value;
}

function minusTimeVideo() {
    const time = video.currentTime - 10;
    minusTime.value = time;
    video.currentTime = minusTime.value;
}

toggle.addEventListener('click', toggleVideo)
video.addEventListener('timeupdate', handleProgress)
volume.addEventListener('input', handleVolume)
speed.addEventListener('input', handleSpeed)
plusTime.addEventListener('click', plusTimeVideo);
minusTime.addEventListener('click', minusTimeVideo);
