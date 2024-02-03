let stopwatchInterval;
let startTime;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const startStopwatch = () => {
    if (!isRunning) {
        startTime = new Date().getTime();
        stopwatchInterval = setInterval(updateDisplay, 1000);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
};

const stopStopwatch = () => {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
    }
};

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    isRunning = false;
    display.textContent = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
};

const updateDisplay = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedTime =
        pad(hours % 60) + ":" +
        pad(minutes % 60) + ":" +
        pad(seconds % 60);

    display.textContent = formattedTime;
};

const pad = (value) => {
    return value < 10 ? "0" + value : value;
};
