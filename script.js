// JavaScript goes here.
let results = 0;
let start = document.querySelector("#start-quiz");
let beginning = document.querySelector(".user-input");
let questions = document.querySelector(".questions");

let screen1 = document.querySelector(".Q1");
let screen2 = document.querySelector(".Q2");
let screen3 = document.querySelector(".Q3");
let screen4 = document.querySelector(".Q4");

let button11 = document.querySelector("#q11");
let button12 = document.querySelector("#q12");
let button13 = document.querySelector("#q13");
let button14 = document.querySelector("#q14");

let button21 = document.querySelector("#q21");
let button22 = document.querySelector("#q22");
let button23 = document.querySelector("#q23");
let button24 = document.querySelector("#q24");

let button31 = document.querySelector("#q31");
let button32 = document.querySelector("#q32");
let button33 = document.querySelector("#q33");
let button34 = document.querySelector("#q34");

let button41 = document.querySelector("#q41");
let button42 = document.querySelector("#q42");

let displayyou = document.querySelector("#allyou");
let resultscreen = document.querySelector(".results");
let conclusion = document.querySelector(".conclusion");
let cooked = document.querySelector(".cooked");
let locked = document.querySelector(".locked");

let buttons1 = document.querySelectorAll(".Q1 button");
let buttons2 = document.querySelectorAll(".Q2 button");
let buttons3 = document.querySelectorAll(".Q3 button");
let buttons4 = document.querySelectorAll(".Q4 button");
let resultbutton = document.querySelector("#results");
let replaybutton = document.querySelector("#replay");

start.addEventListener("click", function() {
    let nameInput = document.querySelector("#name").value;
    let ageInput = document.querySelector("#age").value;
    displayyou.innerHTML = nameInput + ", at the great age of " + ageInput + ", you are...";


    if (nameInput === "" || ageInput === "") {
        alert("Please enter the following information in the boxes given below.");
    } else {
        questions.style.display = "block";
        beginning.style.display = "none";
    }
});

//Q1 Choices
button11.addEventListener("click", function(){
    results += 3;
    screen1.style.display = "none";
    screen2.style.display = "block";
});
button12.addEventListener("click", function(){
    screen1.style.display = "none";
    screen2.style.display = "block";
});
button13.addEventListener("click", function(){
    results += 2;
    screen1.style.display = "none";
    screen2.style.display = "block";
});
button14.addEventListener("click", function(){
    results += 1;
    screen1.style.display = "none";
    screen2.style.display = "block";
});
//Q2 Choices
button21.addEventListener("click", function(){
    results += 2;
    screen2.style.display = "none";
    screen3.style.display = "block";
});
button22.addEventListener("click", function(){
    results += 3;
    screen2.style.display = "none";
    screen3.style.display = "block";
});
button23.addEventListener("click", function(){
    screen2.style.display = "none";
    screen3.style.display = "block";
});
button24.addEventListener("click", function(){
    results += 1;
    screen2.style.display = "none";
    screen3.style.display = "block";
});
//Q3 Choices
button31.addEventListener("click", function(){
    results += 3;
    screen3.style.display = "none";
    screen4.style.display = "block";
});
button32.addEventListener("click", function(){
    results += 3;
    screen3.style.display = "none";
    screen4.style.display = "block";
});
button33.addEventListener("click", function(){
    screen3.style.display = "none";
    screen4.style.display = "block";
});
button34.addEventListener("click", function(){
    results += 1;
    screen3.style.display = "none";
    screen4.style.display = "block";
});
//Q4 Choices
button41.addEventListener("click", function(){
    results += 3;
    questions.style.display = "none";
    screen4.style.display = "none";
    resultscreen.style.display = "block";
});
button42.addEventListener("click", function(){
    questions.style.display = "none";
    screen4.style.display = "none";
    resultscreen.style.display = "block";
});
resultbutton.addEventListener("click", function(){
    conclusion.style.display = "none"
    if (results < 11){
        cooked.style.display = "block";
    }
    else if (results >= 11){
        locked.style.display = "block";
    }
});



