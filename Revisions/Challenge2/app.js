const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("May 31, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59,
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76,
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98,
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93,
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76,
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87,
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71,
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52,
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97,
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38,
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56,
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42,
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7,
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48,
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95,
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27,
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97,
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27,
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42,
    },
  ],
};

// 1. Manipulation de Strings et conversion de type:

let prenom = user.firstName;
prenom = prenom.trim();
let  nom = user.lastName;
nom = nom.replace("$", "S");

let age = user.age;
age = age.slice(0, 2);
age = +age;

console.log(`Cher ${prenom} ${nom}, bienvenue dans votre dashboard`);
console.log(`Vous aurez ${age+1} ans l'année prochaine`);

// 2. Création d'un compte à rebours




const countdown = function(){

    const date = user.nextTourDate; 
    const now = new Date().getTime();   
    let timeLeft = date - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Nombre d'heures restantes
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Nombre de minutes restantes
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Formater le texte avec les accords conditionnels pour le mot "jour"
    const dayText = days === 1 ? "jour" : "jours"; // Utiliser "jour" ou "jours" en fonction du nombre de jours
    const hourText = hours === 1 ? "h" : "h"; // L'unité pour les heures reste "h"
    const minuteText = minutes === 1 ? "min" : "min"; // L'unité pour les minutes reste "min"
    const secondText = seconds === 1 ? "s" : "s"; // L'unité pour les secondes reste "s"

    return `${days} ${dayText}, ${hours} ${hourText} ${minutes} ${minuteText} ${seconds} ${secondText}`;

}

console.log(countdown());