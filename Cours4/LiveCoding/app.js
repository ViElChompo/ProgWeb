"use strict"

// const reduce = (arr, fn, initialValue) => {
//     let accum;
//     if (initialValue) {
//         accum = initialValue;
//     } else {
//         accum = arr[0];
//         arr.shift();

//     }
//     for (let el of arr) {
//         accum = fn(accum, el)
//     }
//     return accum;
// }

// console.log(reduce([1, 2, 3], (a, b) => a - b, "sympa"))

// const numbers = [10, 120, 1, 2];
// const strings = ["Hello", "World", "Sympa"]

// map
// const numbersPlusTwo = numbers.map((element) => element + 2);

//forEach
// numbers.forEach((el, idx, arr) => console.log(`Array ${arr} - ${idx}: ${el}`));
// numbers.forEach(function (el) {
//     console.log(el);
// });

//filter
// const filteredNumbers = numbers.filter((el) => el >= 100);

// sort
// numbers.sort((a, b) => a - b);
// const sortedNumbers = numbers.toSorted((a, b) => a - b);

// reduce


// const students = [
//     {
//         studentID: 23409582,
//         grade: 6.0,
//         department: "COMEM"

//     }, {
//         studentID: 23,
//         grade: 3.0,
//         department: "HEG"

//     }, {
//         studentID: 1000000,
//         grade: 4.0,
//         department: "COMEM"
//     }
// ]


const apple = {
    color: "red",
    diameter: 6,
    price: 1,
    variety: "Jazz"
}

// const appleVariety = apple.variety;
// const { variety } = apple;
const { variety: bestApple, ...otherProps } = apple;

// const groupedStudents = Object.groupBy(students, 
//     (student) => student.grade >= 4.0 ? "Success" : "Try Again");




const nums = [1, 2, 3, 4];
// const numsCopy = nums.slice();
// const firstNumber = nums[0];



const [firstNumber, , thirdNumber, ...otherNumbers] = nums;

// const firstNumber = nums[0];
// const secondNumber = nums[1];


function sum(...nums) {

    let sum = 0;
    nums.forEach(el => sum += el);
    return sum;
}

sum(23, 34, 6, 7, 4, 6, 7, 9, 10)
