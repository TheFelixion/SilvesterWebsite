function playFireworkrocketSound(n) {
    switch(n) {
        case 7:
            alert("Bumm");
            break;
        case 8:
            alert("Bumm");
            break;
        case 9:
            alert("Bumm");
            break;
        default:
            var audioPath= "./res/audios/fireworkrocket-" + n + ".mp3";
            var fireworkrocketSound = new Audio(audioPath);
            fireworkrocketSound.play();
            break;
    }
    return;
}

function fireworkHelp() {
    alert("Gehe mit dem Mauszeiger über die Rakete links");
    document.getElementById("rocket-help-button").remove();
}