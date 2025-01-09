'use strict';
// Première partie de l'exercice
// Tableau de nombres

const numbers = Object.freeze([3, 14, 15, 92, 65, 35, 89, 79, 32, 38]);

//1. Afficher tous les nombres dans la console :
console.log(numbers);

//2. Afficher un tableau avec les valeurs doublées :
const doubledNumbers = numbers.map(function (value) {
    return value * 2;
});

console.log(doubledNumbers); //retourne les valeurs doublées du tableau initial

// 3. Retourner un tableau ne contenant que les valeurs impairs : 
const impairs = numbers.filter(function (value) { //utilisation d'un filtre pour créer un nouveau tableau et obtenir les valeurs impaires
    return value % 2 !== 0;  // vérifier si la valeur est impaire par un calcul logique
});

console.log(impairs);  // retourne les valeurs impaires du tableau

// 4. Retourner un tableau ne contenant pas le premier élément :
const [, ...otherNumbers] = numbers; //retourne le reste des nombres
console.log(otherNumbers);

// 5. Retourner un tableau ne contenant pas le dernier élément :
const [...restArray] = numbers;
const lastElement = restArray.pop();  // la fonciton pop retire le dernier élément

console.log(restArray);  // retourne tous les nombres du tableau sauf le dernier.

// 6. Retourner la somme des nombres :
const sum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const total = sum(numbers);
console.log(total);

//7. Retourner le plus grand nombre :
numbers.toSorted((a, b) => a - b);
console.log(Math.max(...numbers));

// 8. Indiquer si le tableau contient au moins un multiple de 9 :
const nineDivisors = numbers.filter(function (value) { //utilisation d'un filtre pour créer un nouveau tableau et obtenir les multiples de 9
    return value % 9 === 0;  // vérifier si la valeur est un multiple de 9 par un calcul logique
});
console.log(nineDivisors);

// 9. Indiquer si le tableau ne contient que des nombres positifs :
const allPositive = numbers.every(function (value) {
    return value > 0; 
});

if (allPositive) {
    console.log("Tous les nombres du tableau sont positifs.");
} else {
    console.log("Le tableau contient des nombres négatifs.");
}

// 10. Retourner un tableau avec les nombres pairs en premiers indices et les nombres impairs dans les indices restants :
const sortedNumbers = numbers.toSorted((a, b) => (a % 2) - (b % 2)); // Utilisation de sort() avec une fonction de comparaison
console.log(sortedNumbers);

//11. Retourner un tableau ordonné du plus petit au plus grand :
// Utilisation de .toSorted() pour obtenir un nouveau tableau trié
const sortedNumbersFromSmallToBig = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbersFromSmallToBig); 

//12. Retourner un tableau ordonné du plus grand au plus petit :
const sortedNumbersFromBigToSmall = numbers.toSorted((a, b) => b - a);
console.log(sortedNumbersFromBigToSmall);






























// Exercice du milieu 




//Tableau de Strings

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

//1. Retourner tous les mots contenant au moins un r
let array = strings.filter(el => el.includes("r"));
console.log(array);

//2. Indiquer si tous les mots font 5 lettres

let wordsOf5 = strings.every(el => el.length === 5);
console.log(wordsOf5);

//3. Retourner un tableau avec un mot de plus en début du tableau

function addStringToStart(array, word) {

    array.unshift(word);

    return array;
}

//const newArray = addStringtoStart([...strings], "okayy");

//console.log(newArray);

//4. Retourner un tableau avec un mot de plus en fin de tableau

function addStringToEnd(array, word) {

    array.push(word);

    return array;
}

//const newArray = addStringToEnd([...strings], "okayy");
//console.log(newArray);

//5. Retourner un tableau en remplaçant le mot du milieu par le mot radar 
//(si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)


function addWordToMiddle(array, word) {

    if ([...array].length % 2 === 0) {
        let indexToRemove = [...array].length / 2;
        indexToRemove = indexToRemove - 1;

        array[indexToRemove] = word;

    } else {
        let arrayMiddle = array.length - 1;
        let indexToRemove = arrayMiddle / 2;

        array[indexToRemove] = word;

    }

    return array;

}

//let newArray = addWordToMiddle([...strings], "radar");
//console.log(newArray);

//6. Retourner la concaténation de tous les mots

function concatString(array) {
    let newString = "";

    for (let elements of array) {
        newString += elements;
    }
    return newString;
}

let newString = concatString(strings);
console.log(newString);


//7. Retourner le mot qui vient en premier selon l'ordre alphabétique (localeCompare peut être utile)

function firstWordAlphabet (array) {

    array.sort();

    return array[0];

}

let newArray = firstWordAlphabet([...strings]);
console.log(newArray);


//8.Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau).

function isAPalindrome(array) {
    let arrayRightSide =  concatString(array).toLowerCase();
    let arrayBackSide =  arrayRightSide.split('').reverse().join('');

    let isAPalindrome = arrayRightSide === arrayBackSide;
    return isAPalindrome;
}

console.log(isAPalindrome(strings));

const circles = Object.freeze([
    {x: 20, y: 10 , r: 10, color: "red"},
    {x: 10, y: 10 , r: 20, color: "green"},
    {x: 30, y: 25 , r: 15, color: "blue"},
    {x: 10, y:5 , r: 5, color: "red"}
  ]);
  circles.forEach(Object.freeze);

  const [...copyCircles] = circles; 

 // console.log(copyCircles);

























 // Tableau d'objets
 // Exercice 1: 

 // Grace a la fonction map() je récolte le paramètre r du tableau original afin de calculer l'air du cercle

const rayon = copyCircles.map(circles => circles.r);
console.log(rayon);

rayon.forEach((element) => console.log(Math.PI * element**2));

// Exercice 2: 

// La fonction groupBy permet de regrouper les cerles de copyCircles en les organisant selon le paramètre color.

const groupedCircles = Object.groupBy(copyCircles, ({color}) => color);
console.log(groupedCircles);

// Exercice 3: 

// Je récupère les paramètre x et y avec la fonction map dans la variable centre et je les affiches en les itérants avec la boucle forEach
const centre = copyCircles.map(cercle => ({x: cercle.x, y: cercle.y}));
centre.forEach((element) => console.log(element));


// Exercice 4: 

// Pareil que l'exercice 3, seulement j'additionne 10 unités à chaque paramètres x

const circlesMoved = copyCircles.map(cercle => ({x : cercle.x + 10, y : cercle.y , r : cercle.r, color : cercle.color }))
circlesMoved.forEach((element) => console.log(element));
