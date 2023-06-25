// This is flag for choose the turn 

let flag = 0; //Globle variable

// if flag = 0 => player-1 turn "O"
// else Player-2 turn "X"

//Array they store the enterd result and check this array and give the result after the refresh page array will be empty
let array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// When you are click on the box that time this funciton is call and put the value into the table colums(td)

function my_term1() {

    if (flag == 0) {

        document.getElementById("td1").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[0][0] = "O";

    } else {
        document.getElementById("td1").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[0][0] = "X";


    }
}
function my_term2() {

    if (flag == 0) {

        document.getElementById("td2").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[0][1] = "O";

    } else {
        document.getElementById("td2").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[0][1] = "X";

    }
}
function my_term3() {

    if (flag == 0) {

        document.getElementById("td3").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[0][2] = "O";

    } else {
        document.getElementById("td3").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[0][2] = "X";

    }
}
function my_term4() {

    if (flag == 0) {

        document.getElementById("td4").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[1][0] = "O";

    } else {
        document.getElementById("td4").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[1][0] = "X";

    }
}
function my_term5() {

    if (flag == 0) {

        document.getElementById("td5").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[1][1] = "O";

    } else {
        document.getElementById("td5").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[1][1] = "X";

    }
}
function my_term6() {

    if (flag == 0) {

        document.getElementById("td6").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[1][2] = "O";

    } else {
        document.getElementById("td6").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[1][2] = "X";

    }
}
function my_term7() {

    if (flag == 0) {

        document.getElementById("td7").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[2][0] = "O";

    } else {
        document.getElementById("td7").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[2][0] = "X";

    }
}
function my_term8() {

    if (flag == 0) {

        document.getElementById("td8").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[2][1] = "O";

    } else {
        document.getElementById("td8").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[2][1] = "X";

    }
}
function my_term9() {

    if (flag == 0) {

        document.getElementById("td9").innerHTML = "O";
        document.getElementById("gameInfo").innerHTML = "Player-2 turn";
        flag = 1;
        array[2][2] = "O";

    } else {

        document.getElementById("td9").innerHTML = "X";
        document.getElementById("gameInfo").innerHTML = "Player-1 turn";
        flag = 0;
        array[2][2] = "X";

    }
}

// Here check the array of the enterd data

let tdc1, tdc2, tdc3, tdc4, tdc5, tdc6, tdc7, tdc8, tdc9;

tdc1 = document.getElementById("td1");
tdc2 = document.getElementById("td2");
tdc3 = document.getElementById("td3");
tdc4 = document.getElementById("td4");
tdc5 = document.getElementById("td5");
tdc6 = document.getElementById("td6");
tdc7 = document.getElementById("td7");
tdc8 = document.getElementById("td8");
tdc9 = document.getElementById("td9");

function checkResult() {

    if (array[0][0] == "O" && array[0][1] == "O" && array[0][2] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc1.style.textDecoration = "line-through";
        tdc2.style.textDecoration = "line-through";
        tdc3.style.textDecoration = "line-through";


    } else if (array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc4.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc6.style.textDecoration = "line-through";

    } else if (array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc7.style.textDecoration = "line-through";
        tdc8.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc1.style.textDecoration = "line-through";
        tdc4.style.textDecoration = "line-through";
        tdc7.style.textDecoration = "line-through";

    } else if (array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc2.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc8.style.textDecoration = "line-through";

    } else if (array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc3.style.textDecoration = "line-through";
        tdc6.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc1.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O") {

        document.getElementById("gameInfo").innerHTML = "Player-1 Won";
        tdc3.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc7.style.textDecoration = "line-through";

    } else if (array[0][0] == "X" && array[0][1] == "X" && array[0][2] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc1.style.textDecoration = "line-through";
        tdc2.style.textDecoration = "line-through";
        tdc3.style.textDecoration = "line-through";

    } else if (array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc4.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc6.style.textDecoration = "line-through";

    } else if (array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc7.style.textDecoration = "line-through";
        tdc8.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc1.style.textDecoration = "line-through";
        tdc4.style.textDecoration = "line-through";
        tdc7.style.textDecoration = "line-through";

    } else if (array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc2.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc8.style.textDecoration = "line-through";

    } else if (array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc3.style.textDecoration = "line-through";
        tdc6.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc1.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc9.style.textDecoration = "line-through";

    } else if (array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X") {

        document.getElementById("gameInfo").innerHTML = "Player-2 Won";
        tdc3.style.textDecoration = "line-through";
        tdc5.style.textDecoration = "line-through";
        tdc7.style.textDecoration = "line-through";

    } else if ((array[0][0] == "X" || array[0][0] == "O") && (array[0][1] == "X"
        || array[0][1] == "O") && (array[0][2] == "X" || array[0][2] == "O") &&
        (array[1][0] == "X" || array[1][0] == "O") && (array[1][1] == "X" ||
            array[1][1] == "O") && (array[1][2] == "X" || array[1][2] == "O") &&
        (array[2][0] == "X" || array[2][0] == "O") && (array[2][1] == "X" ||
            array[2][1] == "O") && (array[2][2] == "X" || array[2][2] == "O")) {
        document.getElementById('gameInfo').innerHTML = "Match Tie";
    }
}

function refreshPage() {

    window.location.reload();
}