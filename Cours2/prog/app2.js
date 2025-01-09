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
      rymScore: 3.59
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42
    }
  ]
};

//exercice1: 

const userValues = Object.values(user);

// console.log(userValues);

let message1 = `Cher`;
let message2 = ", bienvenue dans votre dashboard.";
// const prenom = userValues[0];
// const nom = userValues[1];

let firstName = user.firstName.trim();
let lastName = user.lastName.replace("$", "S")
console.log(`${message1} ${firstName} ${lastName}${message2}`);

// exercice2: 


const age = userValues[2];
 let age2 = age.slice(0,2);
 age2++;



 console.log(`Vous aurez ${age2} ans l'année prochaine`);

// exercice3: 

const dateString = userValues[4];

const dateObj = new Date(dateString);
const date = dateObj;

function countdown() {

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const dateConcert = date;
  const dateDuJour = Date.now();
  const diffDays = Math.round(Math.abs((dateConcert - dateDuJour) / oneDay));
  console.log(diffDays);



  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();



  let hoursC = date.getHours();
  let minutesC = date.getMinutes();
  let secondsC = date.getSeconds();

  let hRestantes = hoursC - hours;
  let mRestantes = minutes - minutesC;
  let sRestantes = seconds - secondsC;

  

  console.log(`Il reste ${diffDays} jours, ${hRestantes} heures, 
    ${60 - mRestantes} minutes, ${60 - sRestantes} secondes jusqu'au prochain concert de 
      ${user.firstName} ${user.lastName}`)


}
countdown();





// exercice4: 

