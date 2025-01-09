"use strict";
const participants = [
  { name: "Alice Anderson", age: 24, role: "Employee" },
  { name: "Brian Brown", age: 35, role: "Volunteer" },
  { name: "Cynthia Carter", age: 28, role: "Audience" },
  { name: "David Davis", age: 45, role: "Employee" },
  { name: "Emily Evans", age: 32, role: "Volunteer" },
  { name: "Franklin Fisher", age: 38, role: "Audience" },
  { name: "Grace Green", age: 22, role: "Employee" },
  { name: "Henry Harris", age: 29, role: "Volunteer" },
  { name: "Isabella Ingram", age: 31, role: "Audience" },
  { name: "John Johnson", age: 42, role: "Employee" },
  { name: "Karen King", age: 27, role: "Volunteer" },
  { name: "Liam Lee", age: 36, role: "Audience" },
  { name: "Mia Miller", age: 21, role: "Employee" },
  { name: "Noah Nelson", age: 46, role: "Volunteer" },
  { name: "Olivia Owens", age: 19, role: "Audience" },
  { name: "Peter Parker", age: 34, role: "Employee" },
  { name: "Quincy Quinn", age: 30, role: "Volunteer" },
  { name: "Rachel Robinson", age: 26, role: "Audience" },
  { name: "Steven Smith", age: 41, role: "Employee" },
  { name: "Tracy Turner", age: 23, role: "Volunteer" },
  { name: "Ursula Underwood", age: 39, role: "Audience" },
  { name: "Victor Vance", age: 37, role: "Employee" },
  { name: "Wendy Watson", age: 25, role: "Volunteer" },
  { name: "Xavier Xanders", age: 33, role: "Audience" },
  { name: "Yvonne Young", age: 40, role: "Employee" },
  { name: "Zachary Zane", age: 44, role: "Volunteer" },
];

let globalParticipants = [...participants];

// Initialiser le tableau avec les participants de moins de 35 ans de base
let newArrivants = [];

// Fonction pour filtrer et remplir le tableau `newArrivants`
function initNewArrivants() {
  newArrivants = globalParticipants.filter((participant) => participant.age < 35);
}

// Sélection des éléments du HTML
const mainContainer = document.querySelector("main");
mainContainer.innerHTML = ""; // Vider le conteneur pour supprimer les cartes initiales

// Sélection des éléments pour afficher les statistiques
const summaryParticipants = document.querySelector(".summary--participants");
const summaryAverage = document.querySelector(".summary--average");

// Fonction pour créer une carte
function createCard(participant) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-role", participant.role);

  // Bouton de suppression
  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("card--delete");
  deleteBtn.addEventListener("click", () => {
    // Supprimer le participant de `newArrivants`
    newArrivants = newArrivants.filter((p) => p.name !== participant.name);
    card.remove();
    updateSummary(); // Mettre à jour les statistiques
  });

  // Rôle
  const role = document.createElement("p");
  role.classList.add("card--role");
  role.textContent = participant.role;

  // Nom
  const name = document.createElement("p");
  name.classList.add("card--name");
  name.textContent = participant.name;

  // Âge
  const age = document.createElement("p");
  age.classList.add("card--age");
  age.textContent = `${participant.age} years old`;

  // Ajout des éléments dans la carte
  card.appendChild(deleteBtn);
  card.appendChild(role);
  card.appendChild(name);
  card.appendChild(age);

  return card;
}

// Fonction pour générer les cartes
function renderCardsUnder35() {
  const filteredParticipants = newArrivants;
  filteredParticipants.forEach((participant) => {
    const card = createCard(participant);
    mainContainer.appendChild(card);
  });
}

// Fonction pour ajouter une carte spécifique
function renderCards(participant) {
  const card = createCard(participant);
  mainContainer.prepend(card);
}

// Fonction pour calculer et afficher les statistiques
function updateSummary() {
  const totalParticipants = newArrivants.length; // Nombre total
  const totalAge = newArrivants.reduce((sum, participant) => sum + parseInt(participant.age, 10), 0); // Somme des âges
  const averageAge = totalParticipants > 0 ? (totalAge / totalParticipants).toFixed(1) : 0; // Moyenne d'âge arrondie à 1 décimale

  // Mise à jour des éléments HTML correspondants
  summaryParticipants.textContent = `Participants: ${totalParticipants}`;
  summaryAverage.textContent = `Average age: ${averageAge}`;
}

// Exécuter la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  initNewArrivants(); // Initialiser `newArrivants`
  renderCardsUnder35(); // Afficher les cartes pour les participants initiaux
  updateSummary(); // Calcul initial des informations
});

// Gestion de la soumission du formulaire
const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("input[name='name']");
  const ageInput = document.querySelector("input[name='age']");
  const roleInput = document.querySelector("select[name='role']");

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value, 10);
  const role = roleInput.value;

  let hasError = false;

  // Vérification des champs et ajout de la classe "error" si nécessaire
  if (!name) {
    nameInput.classList.add("error");
    hasError = true;
  } else {
    nameInput.classList.remove("error");
  }

  if (isNaN(age) || age < 1) {
    ageInput.classList.add("error");
    hasError = true;
  } else {
    ageInput.classList.remove("error");
  }

  // Si un des champs est invalide, on arrête l'exécution
  if (hasError) return;

  // Création du nouvel objet participant
  const newParticipant = {
    name,
    age,
    role,
  };

  newArrivants.push(newParticipant); // Ajouter à `newArrivants`
  renderCards(newParticipant); // Ajouter la carte
  updateSummary(); // Mettre à jour les statistiques

  form.reset(); // Réinitialiser le formulaire
});
