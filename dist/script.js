document.querySelector('.button-pause').style.display='none';

let music = document.querySelector('audio');

document.querySelector('.endMusic');

document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', actualBar);

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display='block';
    document.querySelector('.button-play').style.display='none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display='none';
    document.querySelector('.button-play').style.display='block';
}

function actualBar(){
    let barBar = document.querySelector('progress');
    barBar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.startMusic');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minMinutes = Math.floor(seconds / 60);
    let secSeconds = seconds % 60;
    if(secSeconds < 10){
        secSeconds = '0' + secSeconds;
    }
    return minMinutes+':'+secSeconds;
}