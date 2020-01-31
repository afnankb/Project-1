const eventType = 'click';
let numberOfclick = 0;

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
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number0");
    newImgVid.append(img);
}

const myCallback1 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number1");
    newImgVid.append(img);
}


const myCallback2 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number2");
    newImgVid.append(img);
}


const myCallback3 = function () {

    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number3");
    newImgVid.append(img);
}

const myCallback4 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number4");
    newImgVid.append(img);
}

const myCallback5 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number5");
    newImgVid.append(img);
}

const myCallback6 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number6");
    newImgVid.append(img);
}
const myCallback7 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number7");
    newImgVid.append(img);
}

const myCallback8 = function () {
    const img = document.createElement("img");
    const scr = selectXorO();
    numberOfclick++;
    img.setAttribute("src", scr);
    img.setAttribute("width", "200");
    const newImgVid = document.querySelector("#number8");
   
    newImgVid.append(img);

}


const selectXorO = function () {
    // x
    if (numberOfclick % 2 == 0) {
        
        return ("x.png")


    }
    // O
    else {


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