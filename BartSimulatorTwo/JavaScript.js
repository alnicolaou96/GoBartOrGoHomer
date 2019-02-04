
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
var textBox, one, two, three, four;//new dialog
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
        document.getElementById("audio").src = "hotel1.ogg";

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

        document.getElementById("audio").src = "hotel1.ogg";
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
            ChangingDialog();
            PlayerSwitch();
            break;
        case 2:
            ChangingDialog();
            PlayerSwitch();
            break;
        case 3:
            ChangingDialog();
            PlayerSwitch();
            break;
        case 4:
            ChangingDialog();
            PlayerSwitch();
            break;
    }

}

//---------Player switch and dialog counter
var playerTurn = 1;
var nextDialog = 0;
function PlayerSwitch() {
    playerTurn++;
    if (playerTurn % 2 === 0) {
        player = 2;
        alert("player 2's turn");
    }
    else {
        nextDialog++;
        alert("player 1's turn");
        player = 1;
    }
        
}

//---------Points 
var oneScore=0;
var twoScore=0;
var points;

function PointGiver(points) {
    if (player === 1) {
        oneScore += points;
    }
    else if (player === 2) {
        twoScore += points;
    }
}

//---------Next Dialog
//---------Changes the dialog and text everytime a both players go
function ChangingDialog() {
    switch (nextDialog) {
        case 1:
            TextChange("Two thousand and one… two thousand and three… two thousand and-- OH! Hey, sup boys, I didn’t see you there. Just doing some stair workouts. You don’t have to be a brick house to get BUILT LIKE ONE."
                , "We could definitely hook you up with a brick facade!"
                , "Two thousand and three, huh? Impressive."
                , "You’re already looking great, Colonial Chad."
                , "Hope I’m not interrupting your groove?");
            break;
        case 2:
            TextChange("Anyway, how can I help you? Need someone to raise the roof? </br> *Colonial Chad says, hopping from foot to foot.*"
                , "I see your potential. You could be someone’s dream home."
                , "I can get you sold fast so you don’t have to worry about it."
                , "I’m surprised you even need a realtor. Just look at those beautiful brown shingles"
                , "I scouted you from the local listings. I want to represent you, Colonial Chad.");
            break;
    }
}

//---------Points Function
function PointsFunction(question) {
    switch (question) {
        case 1:
            DialogSelected(1, 0);
            DialogSelected(2, 3);
            alert("p1 Score" + "" + oneScore + "" + nextDialog);
            alert("p2 Score" + "" + twoScore);
            break;
        case 2:
            DialogSelected(1, 0);
            DialogSelected(2, 5);
            alert("p1 Score" + "" + oneScore + "" + nextDialog);
            alert("p2 Score" + "" + twoScore);
            break;
        case 3:
            DialogSelected(1, 0);
            DialogSelected(2, 3);
            alert("p1 Score" + "" + oneScore + "" + nextDialog);
            alert("p2 Score" + "" + twoScore);
            break;
        case 4:
            DialogSelected(1, 0);
            DialogSelected(2, 8);
            alert("p1 Score" + "" + oneScore + "" + nextDialog);
            alert("p2 Score" + "" + twoScore);
            break;

    }
}
var dialogNum, givenPoints;
function DialogSelected(dialogNum,givenPoints) {
    if (nextDialog === dialogNum) {
        PointGiver(givenPoints);
    }
}

