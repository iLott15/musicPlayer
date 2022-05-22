let musics = [
    {title:'Secrets', artist:'State Champs', src:'music/secrets.mp3', img:'img/state_Champs2.jpg'},
    {title:'Secrets (Acoustic)', artist:'State Champs', src:'music/secrets(Acoustic).mp3', img:'img/state_Champs1.jpg'},
    {title:'All You Are Is History(Live)', artist:'State Champs', src:'music/allYouAreIsHistory(Live).mp3', img:'img/State_Champs.jpg'},
    {title:'Ocean Avenue', artist:'Yellowcard', src:'music/oceanAvenue.mp3', img:'img/yellowcard.png'},
    {title:'The Hell Song', artist:'Sum-41', src:'music/theHellSong.mp3', img:'img/sum41.png'},
    {title:'Untitled', artist:'Knuckle Puck', src:'music/untitled.mp3', img:'img/knucklePuck.png'},
];
document.querySelector('.button-pause').style.display='none';

let music = document.querySelector('audio');
let indexMusic = 0;

let durationMusic = document.querySelector('.endMusic');
let imagem = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

renderMusic(indexMusic);

// Events
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', actualBar);

document.querySelector('.backMusic').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 5;
    }
    renderMusic(indexMusic);
});

document.querySelector('.nextMusic').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 5){
        indexMusic = 0;
    }
    renderMusic(indexMusic, pauseMusic());
});

// Functions
function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        imagem.src = musics[index].img;
        durationMusic.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
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
    if (secSeconds < 10){
        secSeconds = '0' + secSeconds;
    }

    return minMinutes+':'+secSeconds;
}

