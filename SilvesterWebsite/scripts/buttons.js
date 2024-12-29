function playFireworkrocketSound() {
    var audioPath= "../SilvesterWebsite/res/audios/fireworkrocket-" + n + " .mp3";
    var fireworkrocketSound = new Audio(audioPath);
    fireworkrocketSound.play();
}

function fireworkHelp() {
    alert("Gehe mit dem Mauszeiger über die Rakete links");
    document.getElementById("rocket-help-button").remove();
}