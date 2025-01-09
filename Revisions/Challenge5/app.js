"use strict";


const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

// 1.
console.log(numbers);

// 2.
const nbDouble = numbers.map(nb => nb * 2);
console.log(nbDouble);

// 3.

const oddNumbers = numbers.filter(nb => nb % 2)
console.log(oddNumbers);

// 4. 

const tab1 = numbers.slice(1);
console.log(tab1);

// 5. 
const tab2 = numbers.slice(0, -1);
console.log(tab2);

// 6. 
const sum = numbers.reduce((acc, nb) => acc += nb);
console.log(sum);

