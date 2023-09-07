const dayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

function updateTime() {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayOfTheWeek.textContent = `Current Day of the Week: ${days[date.getDay()]}`;
    currentTime.textContent = `Current UTC Time: ${date.toISOString().substring(11, 19)}`;
}

setInterval(updateTime, 1000);