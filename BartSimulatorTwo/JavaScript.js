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
    var w = document.getElementById("twoPlayer");
    var x = document.getElementById("onePlayer");

    var y = document.getElementById("chad");
    var z = document.getElementById("stacy");

    player = 1;

    w.style.display = "none";
    x.style.display = "none";

    y.style.display = "flex";
    z.style.display = "flex";
}
function twoPlayer() {
    var w = document.getElementById("twoPlayer");
    var x = document.getElementById("onePlayer");

    var y = document.getElementById("chad");
    var z = document.getElementById("stacy");

    player = 2;

    w.style.display = "none";
    x.style.display = "none";

    y.style.display = "flex";
    z.style.display = "flex";
}