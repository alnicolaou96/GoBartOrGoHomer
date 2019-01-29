//---------Game Start screen to Player Select screen
function StartGame() {
    console.log("bjsvojdb");
    var x = document.getElementById("onePlayer");
    var y = document.getElementById("twoPlayer");
    var z = document.getElementById("logo");

    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "none";
}


//---------Player Select screen to Character Select screen
//---------Player Selection

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


//---------Character Select screen to Question 1 Screen
//---------Character Selection

var character;

function Chad() {
    character = 1;


    if (confirm(player + "player mode with Chad") === true) { //asks the user if they picked these options
        alert("works");
    }
    else {
        location.reload(); //restarts the program
    }

}
function Stacy() {
    character = 2;


    if (confirm(player + "player mode with Stacy") === true) { //asks the user if they picked these options
        alert("works");

        var x = document.getElementById("stacy");
        var y = document.getElementById("chad");
        var z = document.getElementById("firstQuestion");
    }
    else {
        location.reload(); //restarts the program
    }
}