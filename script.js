document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        var now = new Date();
        var targetTime = new Date();
        targetTime.setHours(13);
        targetTime.setMinutes(0);
        targetTime.setSeconds(0);

        var timeDiff = targetTime - now;

        var hours = Math.floor(timeDiff / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        countdownElement.innerHTML = "Waktu tersisa: " + hours + ":" + minutes + ":" + seconds;
    }
    setInterval(updateCountdown, 1000);
});