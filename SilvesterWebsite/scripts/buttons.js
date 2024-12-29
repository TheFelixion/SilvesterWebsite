function playFireworkrocketSound() {
    let fireworkrocketSound = new Audio("../SilvesterWebsite/res/audios/fireworkrocket-1.mp3");
    fireworkrocketSound.play();
}

function fireworkHelp() {
    alert("Gehe mit dem Mauszeiger über die Rakete links");
    document.getElementById("rocket-help-button").remove();
}