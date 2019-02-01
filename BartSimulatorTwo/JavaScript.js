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
    TransitionPlaySel();
}
function twoPlayer() {
    player = 2;
    TransitionPlaySel();
}


//---------Character Select screen to Question 1 Screen
//---------Character Selection
var textBox, one, two, three, four;
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
function TextChange(textBox,one,two,three,four) {
    var v = document.getElementById("one");
    var w = document.getElementById("two");
    var x = document.getElementById("three");
    var y = document.getElementById("four");
    var z = document.getElementById("textBox");

    v.innerHTML = one;
    w.innerHTML = two;
    x.innerHTML = three;
    y.innerHTML = four;
    z.innerHTML = textBox;
} //this function changes the dialog boxes and text box

var character;

function Chad() {
    character = 1;


    if (confirm(player + " player mode with Chad") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "click here", "click here", "click here", "click here");

    }
    else {
        location.reload(); //restarts the program
    }

}
function Stacy() {
    character = 2;


    if (confirm(player + " player mode with Stacy") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "click here", "click here", "click here", "click here");
        document.getElementById("characterPicture").src = "SchoolGirl_Default.png";
    }
    else {
        location.reload(); //restarts the program
    }
}


//---------Next Question
var question;
function NextQuestion(question) {
    switch (question) {
        case 1:
            console.log("1 works");
            PlayerSwitch();
            break;
        case 2:
            console.log("2 works");
            PlayerSwitch();
            break;
        case 3:
            console.log("3 works");
            PlayerSwitch();
            break;
        case 4:
            console.log("4 works");
            PlayerSwitch();
            break;
    }

}

//---------Player switch
var playerTurn=1;
function PlayerSwitch() {
    playerTurn++;
    if (playerTurn % 2 === 0) {
        console.log("player 2's turn");
    }
    else
        console.log("player 1's turn");
}
