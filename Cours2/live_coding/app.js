"use strict"
// console.log(Math.floor(Math.random() * 255));

// let age = 32;
// let something = true;

// function demo() {
//     if (true) {
//         message = "Welcome!";
//     }
//     console.log(message)
// }

// demo();

// let x = 1; 
// let y = "12"; 
// console.log(x + y);

// let like = false;
// //
// console.log(`${like ? "I like" : "I hate"} Anna`)

// let courses = ["fromage", "pain"]
// let numbers = [10, 3459835098, 1010, 324, 11]

// let aliment = "tomate";
// let copieAliment = aliment;
// copieAliment = "melon"

// let courses = ["tomates", "melon", "jambon"];
// let copieCourses = courses; 

// const user1 = {
//     name: "Simon",
//     "signe astrologique": "Verseau"
// }

// const user2 = {
//     name: "Simon",
//     "signe astrologique": "Verseau"
// } 

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

for(let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for(let j=0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(sum);
}

for(let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum += num;
    }
    console.log(`La somme de ${row} est ${sum}`)
}

const movieReviews = {
    emma: {
        title: "Pulp Fiction",
        year: 1994,
        rating: 1
    },
    joe: {
        title: "Fight Club",
        year: 1999,
        rating: 5
    },
    marc: {
        title: "Se7en",
        year: 1995,
        rating: 5
    },

    // displayMessage() {
    //     console.log("This is a method");
    // }
}

// movieReviews.displayMessage();

const movieValues = Object.values(movieReviews);

let sum = 0;

for(let movie of movieValues) {
    sum += movie.rating;
}

let average = sum / movieValues.length;

console.log(average);