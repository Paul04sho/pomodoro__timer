// Déclaration des variables principales 
let pomodoro = document.getElementById("pomodoroTimer");
let short = document.getElementById("shortBreakTimer");
let long = document.getElementById("longBreakTimer");

let timers = document.querySelectorAll(".timer-display");

let countdownInterval = null; // Stocke l'ID de l'intervalle choisi
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
function startTimer (timerdisplay) {
    if(countdownInterval) {
        clearInterval(countdownInterval);
    }

    timerDuration = timerdisplay.getAttribute("data-duration").split(":")[0];
    let durationInMiliseconds = timerDuration * 60 * 1000; // 25 minutes converties en millisecondes (1,5 Million de millisec.)
    let endTimestamp = Date.now() + durationInMiliseconds;

    countdownInterval = setInterval(() => {
        const timeRemaining = new Date(endTimestamp - Date.now());
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timerdisplay.textContent = "00:00";
            alert("Session terminée!");
            const alarm = new Audio("https://www.freespecialeffects.co.uk/soundfx/scifi/electronic.wav");
            alarm.play();
        } else {
            // padStart permet d'obtenir le format MM:SS (minutes: secondes)
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000).toFixed(0);
            const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            console.log(formattedTime);
            timerdisplay.textContent = formattedTime;
        }
    }, 1000);
}

// Comme son nom l'indique, cette fonction sert à arreter le minuteur
function pauseTimer() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

startButton.addEventListener("click",() => {
    if(currentTimer) {
        startTimer(currentTimer);
    }
});

stopButton.addEventListener("click", () => {
    if(currentTimer) {
        pauseTimer();
    }
});



