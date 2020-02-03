// create event 
const eventType = 'click';
// create number of click to know who is click first player or second 
let numberOfclick = 0;
// create list to add if it's X or o 
const XOrOList = [];
let conterList = 0;
//create list of index
const indexList = [];
let conterIndexList = 0;
//create list to add element un orderd to know last elemen 
const unorderList = [];
//conter to know who many times x win
let winXCounter = 0;
//conter to know who many times o win
let winOCounter = 0;
// conter to know who many times tie 
let tieCounter = 0;
// create query selector for all element 
const number0 = document.querySelector('#number0');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const number4 = document.querySelector('#number4');
const number5 = document.querySelector('#number5');
const number6 = document.querySelector('#number6');
const number7 = document.querySelector('#number7');
const number8 = document.querySelector('#number8');
const startgame = document.querySelector("#start");


// funcition to play the sound when user click 
function myPlay() {
    var audio = new Audio("Click.mp3");
    audio.play();
}

// create funcitons to click back if the user click
// 1. create img element 
// 2. select the type of img 
// 3. increce the number of click 
// 4. set src attribute and width 
// 5. append the img to the page 
// 6. remove event listener to anable the user to click again
// 7 . know if the user win or lose or tie 

const myCallback0 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(0);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame0");
    const newImg = document.querySelector("#number0");
    newImg.append(img);
    number0.removeEventListener(eventType, myCallback0)
    winORLose();

}

const myCallback1 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(1);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame1");
    const newImg = document.querySelector("#number1");
    newImg.append(img);
    newImg.removeEventListener(eventType, myCallback1)
    winORLose();

}


const myCallback2 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(2);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame2");
    const newImg = document.querySelector("#number2");
    newImg.append(img);
    number2.removeEventListener(eventType, myCallback2)
    winORLose();

}


const myCallback3 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(3);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame3");
    const newImg = document.querySelector("#number3");
    newImg.append(img);
    number3.removeEventListener(eventType, myCallback3)
    winORLose();

}

const myCallback4 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(4);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame4");
    const newImg = document.querySelector("#number4");
    newImg.append(img);
    number4.removeEventListener(eventType, myCallback4)
    winORLose();

}

const myCallback5 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(5);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    img.setAttribute("class", "imgGame5");
    const newImg = document.querySelector("#number5");
    newImg.append(img);
    number5.removeEventListener(eventType, myCallback5)
    winORLose();

}

const myCallback6 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(6);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("class", "imgGame6");
    img.setAttribute("width", "200");
    const newImg = document.querySelector("#number6");
    newImg.append(img);
    number6.removeEventListener(eventType, myCallback6)
    winORLose();

}

const myCallback7 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(7);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("class", "imgGame7");
    img.setAttribute("width", "200");
    const newImg = document.querySelector("#number7");
    newImg.append(img);
    number7.removeEventListener(eventType, myCallback7)
    winORLose();

}

const myCallback8 = function () {
    myPlay();
    const img = document.createElement("img");
    const scr = selectXorO(8);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("class", "imgGame8");
    img.setAttribute("width", "200");
    const newImg = document.querySelector("#number8");
    newImg.append(img);
    number8.removeEventListener(eventType, myCallback8)
    winORLose();


}

// Funcition win or lose 
// 1. check first if the element  not null
// 2. check if all 3 element have the same value 
// 3. shake the img 
// 4. set timer to sure the img is upload

const winORLose = function () {


    if ((XOrOList[0] != null) && (XOrOList[1] != null) && (XOrOList[2] != null) && (XOrOList[0] === XOrOList[1]) && (XOrOList[0] === XOrOList[2])) {
        number0.setAttribute("class", "shake")
        number1.setAttribute("class", "shake")
        number2.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[3] != null) && (XOrOList[4] != null) && (XOrOList[5] != null) && (XOrOList[3] === XOrOList[4]) && (XOrOList[3] === XOrOList[5])) {
        number3.setAttribute("class", "shake")
        number4.setAttribute("class", "shake")
        number5.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[6] != null) && (XOrOList[7] != null) && (XOrOList[8] != null) && (XOrOList[6] === XOrOList[7]) && (XOrOList[6] === XOrOList[8])) {
        number6.setAttribute("class", "shake")
        number7.setAttribute("class", "shake")
        number8.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[0] != null) && (XOrOList[3] != null) && (XOrOList[6] != null) && (XOrOList[0] === XOrOList[3]) && (XOrOList[0] === XOrOList[6])) {
        number0.setAttribute("class", "shake")
        number3.setAttribute("class", "shake")
        number6.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[1] != null) && (XOrOList[4] != null) && (XOrOList[7] != null) && (XOrOList[1] === XOrOList[4]) && (XOrOList[1] === XOrOList[7])) {
        number1.setAttribute("class", "shake")
        number4.setAttribute("class", "shake")
        number7.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[2] != null) && (XOrOList[5] != null) && (XOrOList[8] != null) && (XOrOList[2] === XOrOList[5]) && (XOrOList[2] === XOrOList[8])) {
        number2.setAttribute("class", "shake")
        number5.setAttribute("class", "shake")
        number8.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[0] != null) && (XOrOList[4] != null) && (XOrOList[8] != null) && (XOrOList[0] === XOrOList[4]) && (XOrOList[0] === XOrOList[8])) {
        number0.setAttribute("class", "shake")
        number4.setAttribute("class", "shake")
        number8.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);


    } else if ((XOrOList[2] != null) && (XOrOList[4] != null) && (XOrOList[6] != null) && (XOrOList[2] === XOrOList[4]) && (XOrOList[2] === XOrOList[6])) {
        number2.setAttribute("class", "shake")
        number4.setAttribute("class", "shake")
        number6.setAttribute("class", "shake")
        setTimeout("MessageWin()", 500);

        // if the number of click equal to 9 so no one win 
    } else if (numberOfclick === 9) {

        setTimeout("MessageTie()", 500);



        // to know who is next 

    } else {

        whoIsPlayNext = document.querySelector("#whoIsNext");
        if (numberOfclick % 2 == 0) {

            whoIsPlayNext.innerHTML = " next play x ";

        } else {
            whoIsPlayNext.innerHTML = " next play o ";

        }
    }

}

//  massege to tell the user you are win 
const MessageWin = function () {

    const lastElement = unorderList.length;

    theWin = document.querySelector("#whoIsNext");
    theWin.innerHTML = " the winner is " + unorderList[lastElement - 1];

    if (unorderList[lastElement - 1] === "x") {
        // increse the winner counter for x 
        winXCounter++;
    } else {
        // increse the winner counter for o
        winOCounter++;
    }

   // change the img to play again img 
    startgame.setAttribute("src", "play-again.png");

    startgame.addEventListener(eventType, playAgain);


}



//  massege to tell the users you are tie 
  const MessageTie = function () {
    tieCounter++;
    const lastElement = unorderList.length;

    theWin = document.querySelector("#whoIsNext");
    theWin.innerHTML = "   tie   ";


// change the img to play again img 
    startgame.setAttribute("src", "play-again.png");
    startgame.addEventListener(eventType, playAgain);

}



// select who is play 
const selectXorO = function (index) {
    // x
    const lastElement = unorderList.length;
    if (numberOfclick % 2 == 0) {
        // add it to the list 
        XOrOList[index] = "x";
        unorderList[conterList++] = "x";
        indexList[conterIndexList++] = index;
        return ("x.png")

    }
    // O
    else {
        XOrOList[index] = "o";
        unorderList[conterList++] = "o";
        indexList[conterIndexList++] = index;
        return ("o.png")


    }

}





// funcition to empty alll imformation to play again 
const playAgain = function () {


    play();

    for (let i = 0; i <= indexList.length; i++) {
        if (indexList[i] === 0) {
            const image0 = document.querySelector(".imgGame0");
            image0.remove();
            number0.setAttribute("class", "");

        } else if (indexList[i] === 1) {
            const image1 = document.querySelector(".imgGame1");
            image1.remove();
            number1.setAttribute("class", "");
        } else if (indexList[i] === 2) {
            const image2 = document.querySelector(".imgGame2");
            image2.remove();
            number2.setAttribute("class", "");
        } else if (indexList[i] === 3) {

            const image3 = document.querySelector(".imgGame3");
            image3.remove();
            number3.setAttribute("class", "");
        } else if (indexList[i] === 4) {
            const image4 = document.querySelector(".imgGame4");
            image4.remove();
            number4.setAttribute("class", "");
        } else if (indexList[i] === 5) {
            const image5 = document.querySelector(".imgGame5");
            image5.remove();
            number5.setAttribute("class", "");
        } else if (indexList[i] === 6) {
            const image6 = document.querySelector(".imgGame6");
            image6.remove();
            number6.setAttribute("class", "");
        } else if (indexList[i] === 7) {
            const image7 = document.querySelector(".imgGame7");
            image7.remove();
            number7.setAttribute("class", "");
        } else if (indexList[i] === 8) {
            const image8 = document.querySelector(".imgGame8");
            image8.remove();
            number8.setAttribute("class", "");
        }


    }

    XOrOList.length = 0;
    unorderList.length = 0;
    indexList.length = 0;
    conterList = 0;
    numberOfclick = 0;

    removeTheword = document.querySelector("#whoIsNext");
    removeTheword.innerHTML = " Tic Tac Toe ";


    xCont = document.querySelector("#xCount");

    if(winXCounter === 0){
        xCont.innerHTML = "zero";
    
        }
        else{
            xCont.innerHTML = winXCounter;
    }
  

    oCont = document.querySelector("#TieCount");

    if(winOCounter === 0){
        oCont.innerHTML = "zero";
    
        }
        else{
            oCont.innerHTML = winOCounter;
    }
    
    

    tCont = document.querySelector("#OCount");
    if(tieCounter === 0){
    tCont.innerHTML = "zero";

    }
    else{
    tCont.innerHTML = tieCounter;
}


}




const play = function () {
    myPlay();
    number0.addEventListener(eventType, myCallback0);
    number1.addEventListener(eventType, myCallback1);
    number2.addEventListener(eventType, myCallback2);
    number3.addEventListener(eventType, myCallback3);
    number4.addEventListener(eventType, myCallback4);
    number5.addEventListener(eventType, myCallback5);
    number6.addEventListener(eventType, myCallback6);
    number7.addEventListener(eventType, myCallback7);
    number8.addEventListener(eventType, myCallback8);


}

startgame.addEventListener(eventType, play);