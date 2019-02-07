
//---------Game Start screen to Player Select screen
function StartGame() {
    var y = document.getElementById("rules");
    var z = document.getElementById("logo");

    y.style.display = "flex";
    z.style.display = "none";
}


//---------Player Select screen to Character Select screen
//---------Player Selection

function Rules() {
    var w = document.getElementById("rules");

    var y = document.getElementById("chad");
    var z = document.getElementById("stacy");



    w.style.display = "none";

    y.style.display = "flex";
    z.style.display = "flex";
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


    if (confirm("Are you sure you want to romance Colonial Chad???") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "", "", "", "Next");
        document.getElementById("audio").src = "hotel1.ogg";

    }
    else {
        location.reload(); //restarts the program
    }

}
function Stacy() {
    character = 2;


    if (confirm("Are you sure you want to romance Stacy Halls???") === true) { //asks the user if they picked these options

        TransitionChar();
        TextChange("*you see a cute house*", "", "", "", "Next");
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
var nextDialog = 1;
function PlayerSwitch() {
    playerTurn++;
    if (playerTurn % 2 === 0) {
        player = 2;
        alert("player 1's turn");
    }
    else {
        nextDialog++;
        alert("player 2's turn");
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
    if (character === 1) {
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
    } //chad dialog
    else if (character === 2) {
        switch (nextDialog) {
            case 1:
                TextChange("Hey, what’s up? Is there a reason you pulled me away from my friends? I don’t think I know you... Look, I have clubs soon, so I hope this is quick. If clubs start late again, I’m never gonna hear the end of it. I’m too busy to deal with that. Do you know how many calls I--"
                    , "I’m sure Stacy Halls can get away with being late."
                    , "It’ll be quick!"
                    , "If clubs start late, you can blame me."
                    , "This is big news about your future, Stacy Halls.");
                break;
            case 2:
                TextChange("*Suddenly, Stacy Halls slaps her thigh*</br> Oh, duh! This is about the whole redistricting thing, isn’t it? Let me guess, you’re offering to remodel me... Look, the superintendent told me I have nothing to worry about. As long as I have the best football field-- and I do-- they're not going to shut me down. I don’t need your help."
                    , "No one’s worried about your football field! But your boiler room is seriously out of code. We’re just trying to get you right."
                    , "Everyone could use some help looking their best. We just want to show you in the best light possible!"
                    , "You say that, but we know you’ve been eyeing those new cheerleading outfits..."
                    , "We’re not trying to fix up your school, we’re trying to optimize your curriculum.");
                break;
        }
    } //stacy dialog
}

//---------Points Function
function PointsFunction(question) {
    switch (question) {
        case 1:
            DialogSelected(1, 0);
            DialogSelected(2, 1); //points for question 1
            DialogSelected(3, 2); //question 2
            DialogSelected(4, 3); // question 3 et cetera


            break;
        case 2:
            DialogSelected(1, 0);
            DialogSelected(2, 5);
            DialogSelected(3, 8);
            DialogSelected(4, 8);

            break;
        case 3:
            DialogSelected(1, 0);
            DialogSelected(2, 3);
            DialogSelected(3, 8);
            DialogSelected(4, 8);

            break;
        case 4:
            DialogSelected(1, 0);
            DialogSelected(2, 8);
            DialogSelected(2, 8);
            DialogSelected(4, 8);

            break;

    }
} //assigning points to questions
var dialogNum, givenPoints;
function DialogSelected(dialogNum,givenPoints) {
    if (nextDialog === dialogNum) {
        PointGiver(givenPoints);
    }
}

//---------Responses
function Response() {

}

