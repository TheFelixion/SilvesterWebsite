function updateCountdown() {
    const targetDate = new Date("2025-01-01T00:00:00");
    const now = new window.Date().getTime();
    const difference = targetDate - now;
    if (difference > 0) {
        var days = difference / (1000 * 60 * 60 * 24);
        var hours = difference / (1000 * 60 * 60);
        var minutes = difference / (1000 * 60);
        var seconds = difference / 1000;

        document.getElementById("days").innerHTML = Math.floor(days);
        document.getElementById("hours").innerHTML = Math.floor(hours % 24);
        document.getElementById("minutes").innerHTML = Math.floor(minutes % 60);
        document.getElementById("seconds").innerHTML = Math.floor(seconds % 60);
    }else{
        document.getElementById("countdown").innerHTML = "Happy New Year!";
        clearInterval(updateInterval);
    }
}
var updateInterval = setInterval(updateCountdown, 1000);