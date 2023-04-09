
//E, por fim, você pode adicionar o seguinte JavaScript para implementar a lógica do relógio, cronômetro e temporizador:

// Obtém os elementos DOM
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const timezoneSelect = document.getElementById("timezone-select");
let timerInterval;

// Função para obter a data e hora atual
function getCurrentTime() {
  const currentTime = new Date();
  return currentTime;
}

// Função para atualizar a exibição da hora e data
function updateClock() {
  const currentTime = getCurrentTime();
  const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString(undefined, options);
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Função para atualizar o fuso horário
function changeTimezone() {
  const timezoneOffset = parseInt(timezoneSelect.value);
  const currentTime = getCurrentTime();
  const timezoneTime = new Date(currentTime.getTime() + timezoneOffset * 60 * 60 * 1000);
  timeElement.textContent = timezoneTime.toLocaleTimeString();
  dateElement.textContent = timezoneTime.toLocaleDateString(undefined, options);
}

// Funções para o temporizador
function startTimer() {
  let seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    timeElement.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timeElement.textContent = "00:00:00";
}

// Função para formatar o tempo no formato HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Função para adicionar zero à esquerda de números menores que 10
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// Inicializa o relógio
updateClock();

// Variáveis do cronômetro
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchRunning = false;

// Função para iniciar o cronômetro
function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      timeElement.textContent = formatTime(stopwatchSeconds);
    }, 1000);
  }
}

// Função para pausar o cronômetro
function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

// Função para resetar o cronômetro
function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchSeconds = 0;
  timeElement.textContent = "00:00:00";
}

// Função para formatar o tempo no formato HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}
