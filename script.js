// CONFESS BUTTONS
const messages = [
    "Beneran?",
    "Beneran yakin nih??",
    "Masa iya sih?",
    "Ayolaahhh....",
    "Pleaaseeee",
    "Kalo kamu masih gamau aku sedih banget",
    "Aku bakal sedih",
    "Aku bakal sangat sangat sangat sedih",
    "Yaudah, aku gamau maksa kamu",
    "Canda, tolong iyain aja plisss"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    // sembunyikan tombol Yes/No & container lama
    const container = document.querySelector(".container");
    container.style.display = "none";

    // tampilkan amplop
    const envelopeContainer = document.getElementById("envelopeContainer");
    envelopeContainer.style.display = "flex";
}

// START SCREEN + MUSIC PLAYER + SHOW BUTTONS
document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("startScreen");
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const musicPlayer = document.getElementById("musicPlayer");
    const container = document.querySelector(".container");
    const buttons = document.querySelector(".container .buttons");

    let isPlaying = false;

    startScreen.addEventListener("click", () => {
        audio.play().then(() => {
            isPlaying = true;
            playBtn.textContent = "⏸";
        }).catch(() => {
            isPlaying = false;
            playBtn.textContent = "▶";
        });

        startScreen.style.opacity = 0;
        setTimeout(() => startScreen.style.display = "none", 500);

        container.style.opacity = 1;
        buttons.style.display = "flex";

        musicPlayer.style.display = "flex";
    });

    playBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play().then(() => playBtn.textContent = "⏸");
        } else {
            audio.pause();
            playBtn.textContent = "▶";
        }
        isPlaying = !isPlaying;
    });

    // AMPLOP INTERAKTIF DENGAN KERTAS FULLSCREEN
    const envelope = document.getElementById("envelope");
    const flap = envelope.querySelector(".flap");
    const paper = document.getElementById("paper");
    const paperSound = document.getElementById("paperSound");

    envelope.addEventListener("click", () => {
        flap.style.transform = "rotateX(180deg)";

        // mainkan suara kertas
        paperSound.currentTime = 0;
        paperSound.play();

        // animasi kertas turun ke layar
        paper.style.top = "5%";
    });
});
