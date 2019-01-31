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
function TransitionPlaySel() {
    var w = document.getElementById("twoPlayer");
    var x = document.getElementById("onePlayer");

    var y = document.getElementById("chad");
    var z = document.getElementById("stacy");



    w.style.display = "none";
    x.style.display = "none";

    y.style.display = "flex";
    z.style.display = "flex";
}

var player;
function onePlayer() {
    player = 1;
    TransitionPlaySel()
}
function twoPlayer() {
    player = 2;
    TransitionPlaySel()
}


//---------Character Select screen to Question 1 Screen
//---------Character Selection
function TransitionChar() {
    var x = document.getElementById("stacy");
    var y = document.getElementById("chad");
    var z = document.getElementById("charPic");
    var w = document.getElementById("textBox");
    var v = document.getElementById("dialogBoxes");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
    w.style.display = "flex";
    v.style.display = "flex";
}

var character;

function Chad() {
    character = 1;


    if (confirm(player + " player mode with Chad") === true) { //asks the user if they picked these options

        TransitionChar();

    }
    else {
        location.reload(); //restarts the program
    }

}
function Stacy() {
    character = 2;


    if (confirm(player + " player mode with Stacy") === true) { //asks the user if they picked these options

        TransitionChar();

    }
    else {
        location.reload(); //restarts the program
    }
}

