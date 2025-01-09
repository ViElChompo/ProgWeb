"use strict";

// Exercice 1: 
const addTwo = function(number){
    return number + 2;
};

// Exercice 2: 

const pluralize = function (word){
    return `${word}s`;
};

// Exercice 3: 

const map = (array, callback) => {
    const newArr = [];
    for(let i = 0; i<array.length; i++){
        newArr.push(callback(array[i]));

    }
    return newArr;
};
console.log(map([1,2,3,4,5,6,7,8,9], addTwo));

// Exercice 4: 
const forEach = (array, callback) => {

    for (let index = 0; index < array.length; index++) {
        callback(array[index]);
        
    }

}; 
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, (char) => alphabet += char);
console.log(alphabet); // -> "abcd"


// Exercice 5: 


const nums = [4,1,3];
const add = function (a,b){
    return a + b;
};


const reduce = (array, callback, initialValue) => {

    forEach()

}