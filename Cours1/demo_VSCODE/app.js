
// Exercice1: 



// console.log("1er Mouton");
// let mouton = 2;

// while (mouton <= 23) {

//     console.log(`${ mouton } e mouton`);
//     mouton++;
// }

// Exercice2:

// var rayon; // ne sert àrien va être déclarée dynamiquement 
// function calculerSurface(rayon){

//     return Math.PI * (rayon**2); 

// }
// console.log(calculerSurface(4));

// Exercice3:

// ce code définit un tableau dans lequel il y a 3 couleurs, j'indique ensuite au tableau qu'a la position numéro 6 il y a une couleur en plus nommée bleu de klein. 
// je demande ensuite d'afficher toutes les cases du tableau à l'aide d'une boucle for.
// j'utilise le mot clé iterator qui signifie: 

        // En JavaScript, un itérateur est un objet qui définit une séquence et potentiellement une valeur de retour à sa fin.

        // Plus précisément, un itérateur est tout objet qui implémente le protocole Iterator en ayant une méthode next() qui renvoie un objet avec deux propriétés :

        // Valeur

        // La valeur suivante dans la séquence d'itération.


// Key siginifie: Un identifiant unique utilisé pour accéder aux valeurs dans un objet, dans notre cas l'objet est le tabelau.

const colors = ["rouge" , "blanc" , "vert" ];
colors[6] = "Bleu de klein";



// const iterator = colors.keys();
// console.log(colors.keys());
// for (const key of iterator){
    for(let i = 0; i < colors.length; i++) {
        console.log(`${i} : ${colors[i]}`);
    } 

// }