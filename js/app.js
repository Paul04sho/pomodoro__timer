// Déclaration des variables principales 
let pomodoro = document.getElementById("pomodoroTimer");
let shortBreak = document.getElementById("shortBreakTimer");
let longBreak = document.getElementById("longBreakTimer");


let coundownInterval; // pour stocker l'ID du minuteur concerné
let timeLeft = 1500; // 25 minutes en secondes (25 * 60)
const timerDisplay = document.querySelector(".display-time");
const startButton = document.getElementById("startCountdown");
const stopButton = document.getElementById("stopCountdown");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
}

// Affiche le temps de travail par défaut
function showDefaultTime() {
    pomodoro.style.display = 'block';
    shortBreak.style.display = 'none';
    longBreak.style.display = 'none';
}

showDefaultTime();