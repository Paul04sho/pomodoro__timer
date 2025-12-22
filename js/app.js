// Déclaration des variables principales 
let pomodoro = document.getElementById("pomodoroTimer");
let short = document.getElementById("shortBreakTimer");
let long = document.getElementById("longBreakTimer");

let timers = document.querySelectorAll(".timer-display");
let countdownInterval = null;
let timeLeftInSeconds = 1500; // 25 minutes converties en secondes
let currentTimer = null; // Contiendra la nouvelle valeur de la durée en fonction du clic de l'utilisateur

const startButton = document.getElementById("startCountdown");
const stopButton = document.getElementById("stopCountdown");



// Affiche le temps de travail par défaut
function showDefaultTime() {
    pomodoro.style.display = 'block';
    short.style.display = 'none';
    long.style.display = 'none';
}

showDefaultTime();

// Le temps visible à l'écran changera selon le choix de l'utilisateur 
document.getElementById("pomodoroSession").addEventListener("click", () => {
    hideAll();
    pomodoro.style.display = 'block';
    currentTimer = pomodoro;
});

document.getElementById("shortBreak").addEventListener("click", () => {
    hideAll();
    short.style.display = 'block';
    currentTimer = short;
});

document.getElementById("longBreak").addEventListener("click", () => {
    hideAll();
    long.style.display = 'block';
    currentTimer = long;
});

// Fonction pour "cacher" les durées non-selectionées
function hideAll() {
    timers.forEach(timer => timer.style.display = 'none');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // padStart permet d'obtenir ici une chaine de 2 caractères commençant par 0 (pour les digits uniques)
    // Exemple - 05: 00 au lieu de 5:0
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    console.log("Minutes:", formattedMinutes, "Secondes:", formattedSeconds);
    return `${formattedMinutes}: ${formattedSeconds}`;
}

function updateTimerDisplay() {
    timers.textContent = formatTime(timeLeftInSeconds);
}

function startTimer () {
  // Bout de code qui gère le lancement du minuteur 
}

startButton.addEventListener("click", () => {
    startTimer();
})



