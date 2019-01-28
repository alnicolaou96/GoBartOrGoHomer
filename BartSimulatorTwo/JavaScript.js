function StartGame() {
    console.log("bjsvojdb");
    var x = document.getElementById("onePlayer");
    var y = document.getElementById("twoPlayer");
    var z = document.getElementById("logo");

    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "none";
}
var player;
function onePlayer() {
    var x = document.getElementById("twoPlayer");
    var y = document.getElementById("onePlayer");
    player = 1;
}
function twoPlayer() {
    var x = document.getElementById("twoPlayer");
    var y = document.getElementById("onePlayer");
    player = 2;
}