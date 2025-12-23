// Déclaration des variables principales 
let pomodoro = document.getElementById("pomodoroTimer");
let short = document.getElementById("shortBreakTimer");
let long = document.getElementById("longBreakTimer");

let timers = document.querySelectorAll(".timer-display");

let countdownInterval = null; // Stocke l'ID de l'intervalle choisi
let durationInSeconds = 1500; // 25 minutes converties en secondes

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

// Fonction pour gérer le lancement d'une session et mettre à jour la durée restante
function startTimer () {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    const endTimestamp = Date.now() + durationInSeconds * 1000;
    const endDate = new Date(endTimestamp);
    console.log(endDate.toLocaleDateString());

    countdownInterval = setInterval(() => {
        const timeRemaining = endTimestamp - Date.now();

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timers.textContent = "00:00";
            alert("Session terminée! Il est temps de prendre une pause.");
            return;
        }
        
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = Math.floor((timeRemaining % 60000) / 1000);
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        timers.textContent = formattedTime;
    }, 1000)
}

function pauseTimer() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

startButton.addEventListener("click", startTimer());
stopButton.addEventListener("click", pauseTimer());



