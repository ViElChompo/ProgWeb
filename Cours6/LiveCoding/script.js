"use strict";

// document.querySelector("p.message").textContent = "Try again!"
// document.querySelector("span#score").textContent = 19;

// console.log(document.querySelector("input").value);

const checkButton = 
    document.querySelector("#check");

checkButton.style.backgroundColor = "red";


const multipleElements = document.querySelectorAll("main, header");



console.dir(checkButton)
// function sayHi() {
//     console.log("Hi!")
// }

checkButton.addEventListener("click", function() {
    const score = document.querySelector("#score");
    score.textContent = score.textContent - 1;
})