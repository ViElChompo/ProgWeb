"use strict"

function addTwo(num){

   return num+=2;

};

function pluralize(mot){

    if (typeof mot === 'string'){
        return mot+"s";

    }else{
        return "Ce n'est pas un mot";
    }
}

//console.log(pluralize("Pizza"))



//console.log("Veuillez appeler la fonction map en renseignant plusieurs chiffres séparés par des virgules. ");
//console.log("Cette fonction va rajouter deux, à tous les chiffres et vous renvoyer un teableau avec le résultat.")

const map = function( arr , addTwo){

    const result = [];

    for (let i = 0; i < arr.length; i++){

        let resultat = addTwo(arr[i]);

        result.push(resultat);
    }

    return result;

}

//console.log(map([1,2,3,4,5,6], addTwo));

// const lettres = [];
// const alphabet = "";

// const char = function(arr){

//     arr.join();

// }

// const forEach = function (lettres, char){

//     forEach(lettres, function(char) {

//         alphabet += char;

//     }); 

//         console.log(alphabet);


// }

// Fonction forEach qui applique une fonction callback à chaque élément du tableau
function forEach(arr, callback) {
    // Boucle sur chaque élément du tableau
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]); // Exécute la fonction callback avec l'élément courant
    }
  }
  
  // Utilisation de la fonction forEach
  let alphabet = "";
  const letters = ["a", "b", "c", "d"];
  
  forEach(letters, function(char) {
    alphabet += char; // Modifie la variable alphabet en ajoutant chaque lettre
  });
  
  console.log(alphabet); // Devrait afficher "abcd"

