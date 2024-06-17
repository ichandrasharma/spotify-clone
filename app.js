let songIdx = 0;
let audioEl = new Audio("songs/1.mp3");
let mainPlay = document.querySelector("#mainPlay");
let progressBar = document.querySelector("#progressBar");
let gifIcon = document.querySelector("#gifIcon");
let mainSong = document.querySelector("#mainSong");
let songItem = document.querySelectorAll(".songItem");
let songItemPlay = document.querySelectorAll(".songItemPlay");

let songs = [
    {songName: "Faded", filePath: "songs/1.mp3", coverPath: "coverimages/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "coverimages/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "coverimages/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "coverimages/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "coverimages/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "coverimages/6.jpg"},
    {songName: "Sakhiyaan - Salam-e", filePath: "songs/2.mp3", coverPath: "coverimages/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "coverimages/8.jpg"},
    {songName: "Tumhari Kasam - Salam", filePath: "songs/2.mp3", coverPath: "coverimages/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "coverimages/10.jpg"},
]

songItem.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
mainPlay.addEventListener("click", () => {
    if (audioEl.paused || audioEl.currentTime <= 0) {
        audioEl.play();
        mainPlay.classList.remove("fa-play-circle");
        mainPlay.classList.add("fa-pause-circle");
        gifIcon.style.opacity = 1;
    } else {
        audioEl.pause();
        mainPlay.classList.remove("fa-pause-circle");
        mainPlay.classList.add("fa-play-circle");
        gifIcon.style.opacity = 0;
    }
})

audioEl.addEventListener("timeupdate", () => { 
    let progress = parseInt((audioEl.currentTime / audioEl.duration) * 100); 
    progressBar.value = progress;
})

progressBar.addEventListener("change", () => {
    audioEl.currentTime = progressBar.value * audioEl.duration / 100;
})

const allPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

songItemPlay.forEach((element) => {
        element.addEventListener("click", (e) => { 
        allPlays();
        songIdx = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioEl.src = `songs/${songIdx + 1}.mp3`;
        mainSong.innerText = songs[songIdx].songName;
        audioEl.currentTime = 0;
        audioEl.play();
        gifIcon.style.opacity = 1;
        mainPlay.classList.remove("fa-play-circle");
        mainPlay.classList.add("fa-pause-circle");
    })
})

document.querySelector("#nextIcon").addEventListener("click", () => {
    if (songIdx >= 9) {
        songIdx = 0;
    } else {
        songIdx += 1;
    }
    audioEl.src = `songs/${songIdx + 1}.mp3`;
    mainSong.innerText = songs[songIdx].songName;
    audioEl.currentTime = 0;
    audioEl.play();
    mainPlay.classList.remove("fa-play-circle");
    mainPlay.classList.add("fa-pause-circle");

})

document.querySelector("#previousIcon").addEventListener("click", () => {
    if (songIdx <= 0) {
        songIdx = 0;
    } else {
        songIdx -= 1;
    }
    audioEl.src = `songs/${songIdx + 1}.mp3`;
    mainSong.innerText = songs[songIdx].songName;
    audioEl.currentTime = 0;
    audioEl.play();
    mainPlay.classList.remove("fa-play-circle");
    mainPlay.classList.add("fa-pause-circle");
})