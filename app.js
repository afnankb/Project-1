const eventType = 'click';
let numberOfclick = 0;
const XOrOList = [];
const number0 = document.querySelector('#number0');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const number4 = document.querySelector('#number4');
const number5 = document.querySelector('#number5');
const number6 = document.querySelector('#number6');
const number7 = document.querySelector('#number7');
const number8 = document.querySelector('#number8');


const myCallback0 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(0);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number0");
    newImgVid.append(img);
    number0.removeEventListener(eventType, myCallback0)
    winORLose();

}

const myCallback1 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(1);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number1");
    newImgVid.append(img);
    number1.removeEventListener(eventType, myCallback1)
    winORLose();

}


const myCallback2 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(2);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number2");
    newImgVid.append(img);
    number2.removeEventListener(eventType, myCallback2)
    winORLose();

}


const myCallback3 = function () {

    const img = document.createElement("img");
    const scr = selectXorO(3);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number3");
    newImgVid.append(img);
    number3.removeEventListener(eventType, myCallback3)
    winORLose();

}

const myCallback4 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(4);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number4");
    newImgVid.append(img);
    number4.removeEventListener(eventType, myCallback4)
    winORLose();

}

const myCallback5 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(5);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number5");
    newImgVid.append(img);
    number5.removeEventListener(eventType, myCallback5)
    winORLose();

}

const myCallback6 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(6);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number6");
    newImgVid.append(img);
    number6.removeEventListener(eventType, myCallback6)
    winORLose();

}

const myCallback7 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(7);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number7");
    newImgVid.append(img);
    number7.removeEventListener(eventType, myCallback7)
    winORLose();

}

const myCallback8 = function () {
    const img = document.createElement("img");
    const scr = selectXorO(8);
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number8");
    newImgVid.append(img);
    number8.removeEventListener(eventType, myCallback8)
    winORLose();


}



const winORLose = function () {


        if ((XOrOList[0] != null) && (XOrOList[1] != null) && (XOrOList[2] != null) && (XOrOList[0] === XOrOList[1]) && (XOrOList[0] === XOrOList[2])) {

            console.log("win")

        } else if ((XOrOList[3] != null) && (XOrOList[4] != null) && (XOrOList[5] != null) && (XOrOList[3] === XOrOList[4]) && (XOrOList[3] === XOrOList[5])) {

            console.log("win")

        } else if ((XOrOList[6] != null) && (XOrOList[7] != null) && (XOrOList[8] != null) && (XOrOList[6] === XOrOList[7]) && (XOrOList[6] === XOrOList[8])) {

            console.log("win")

        } else if ((XOrOList[0] != null) && (XOrOList[3] != null) && (XOrOList[6] != null) && (XOrOList[0] === XOrOList[3]) && (XOrOList[0] === XOrOList[6])) {

            console.log("win")

        } else if ((XOrOList[1] != null) && (XOrOList[4] != null) && (XOrOList[7] != null) && (XOrOList[1] === XOrOList[4]) && (XOrOList[1] === XOrOList[7])) {

            console.log("win")

        } else if ((XOrOList[2] != null) && (XOrOList[5] != null) && (XOrOList[8] != null) && (XOrOList[2] === XOrOList[5]) && (XOrOList[2] === XOrOList[8])) {

            console.log("win")

        } else if ((XOrOList[0] != null) && (XOrOList[4] != null) && (XOrOList[8] != null) && (XOrOList[0] === XOrOList[4]) && (XOrOList[0] === XOrOList[8])) {

            console.log("win")

        } else if ((XOrOList[2] != null) && (XOrOList[5] != null) && (XOrOList[6] != null) && (XOrOList[2] === XOrOList[5]) && (XOrOList[2] === XOrOList[6])) {

            console.log("win")

        }

        else {

            console.log("play")

        }
    
}









const selectXorO = function (index) {
    // x
    if (numberOfclick % 2 == 0) {
        XOrOList[index] = "x";
        return ("x.png")

    }
    // O
    else {
        XOrOList[index] = "o";
        return ("o.png")


    }

}


number0.addEventListener(eventType, myCallback0);
number1.addEventListener(eventType, myCallback1);
number2.addEventListener(eventType, myCallback2);
number3.addEventListener(eventType, myCallback3);
number4.addEventListener(eventType, myCallback4);
number5.addEventListener(eventType, myCallback5);
number6.addEventListener(eventType, myCallback6);
number7.addEventListener(eventType, myCallback7);
number8.addEventListener(eventType, myCallback8);