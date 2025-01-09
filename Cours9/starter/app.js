"use strict";

// 1. Interaction entre input et output
const defaultText = "The quick brown fox jumped on the lazy dog";
const textInput = document.querySelector("input[name='text']");
const textOutput = document.querySelector(".output");

// 2. Changement de typo
const typoChoice = document.querySelector(".option > [name='typeface']");

// 3.  Changement de la taille, de graisse et d'interligne
const sizeInput = document.querySelector("input[name='size']");
const weightInput = document.querySelector("input[name='weight']");
const leadingInput = document.querySelector("input[name = 'leading' ]");
const fontSizeLabel = document.querySelector(".sizelabel");
const fontWeightLabel = document.querySelector(".weightLabel");
const leadingLabel = document.querySelector(".leadinglabel");

// 4. Texte italique
const italicInput = document.querySelector("input[name='italic']");

// 5. Couleur du texte et du fond
const colorChange = document.querySelector(".option > .colors");

// 6. Sauvegarde des réglages
const saveInput = document.querySelector(".save");
const settingsContainer = document.querySelector(".settings-container");
const settingsArray = [];

let outputProps = {
  text: defaultText,
  typeface: "Neue Montreal",
  size: 64,
  weight: 400,
  leading: 1.5,
  italic: false,
  background: "#2a2a2a",
  color: "#ffffff",
};

const updateOutputInterface = () => {
  textOutput.value = outputProps.text;
  textOutput.style.fontFamily = outputProps.typeface;
  textOutput.style.fontSize = outputProps.size;
  //textOutput.style.fontWeight = outputProps.weight;
  textOutput.style.lineHeight = outputProps.leading;
  textOutput.style.fontStyle = outputProps.italic ? "italic" : "normal";
  textOutput.style.backgroundColor = outputProps.background;
  textOutput.style.color = outputProps.color;
};

const updateSidebarInterface = () => {
  textInput.value = outputProps.text;
  fontSizeLabel.innerHTML = `${outputProps.size} px`;
  fontWeightLabel.innerHTML = outputProps.weight;
  leadingLabel.innerHTML = outputProps.leading;
};

// 1. Interaction entre input et output

// La zone d'input appelée "Text" reçoit du texte et elle l'affiche dans la grosse zone
// d'output qui est juste à coté d'elle.
// Sinon elle affiche le texte par défaut.

textInput.addEventListener("input", (e) => {
  textOutput.value = e.currentTarget.value
    ? e.currentTarget.value
    : defaultText;

});

// La Zone d'output reçoit l'input de la zone "Text" et l'affiche

textOutput.addEventListener("input", (e) => {
  textInput.value = e.currentTarget.value;

});

// 2. Changement de typo

typoChoice.addEventListener("change", (e) => {
  const selectedFont = typoChoice.value;
  textOutput.style.fontFamily = selectedFont;
 
});

// 3. Changement de la taille, de graisse et d'interligne

// 3.1 Taille
sizeInput.addEventListener("input", (e) => {
  document.querySelector(
    ".sizelabel"
  ).textContent = `${e.currentTarget.value}px`;
  textOutput.style.fontSize = `${e.currentTarget.value}px`;

});

// 3.2 Graisse
weightInput.addEventListener("input", (e) => {
  document.querySelector(
    ".weightLabel"
  ).textContent = `${e.currentTarget.value}`;
  textOutput.style.fontWeight = `${e.currentTarget.value}`;

});

// 3.3 Interligne

leadingInput.addEventListener("input", (e) => {
  document.querySelector(
    ".leadinglabel"
  ).textContent = `${e.currentTarget.value}`;
  textOutput.style.lineHeight = `${e.currentTarget.value}`;

});

// 4. Texte italique
italicInput.addEventListener("change", (e) => {
  if (italicInput.checked) {
    textOutput.style.fontStyle = "italic";
  } else {
    textOutput.style.fontStyle = "normal";
  }

});

// 5. Changement de la couleur du fond et par conséquent celle du texte
colorChange.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
    const selectedColor = e.target.style.backgroundColor;
    const textColor = e.target.style.color;

    textOutput.style.backgroundColor = selectedColor;
    textOutput.style.color = textColor;
  } else {
    return;
  }

  
});

// 6. Sauvegarde des réglages
// 6.1. Création d'un objet pour sauver les réglages

// // Fonction utilitaire pour tronquer le texte à afficher dans les paramètres enregistrés
// const truncateString = (string = "", maxLength = 30) =>
//   string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

// // Fonction pour enregistrer les paramètres actuels dans le tableau savedSettings
// const saveSetting = (setting) => {
//   savedSettings.unshift({ ...setting }); // Copier les paramètres actuels dans les paramètres enregistrés
//   return savedSettings;
// };

// // Fonction pour afficher tous les paramètres enregistrés dans settingsContainer
// const displaySettings = () => {
//   const settingElements = savedSettings.map((setting, index) => {
//     return `
//       <div class="setting" data-index=${index} style="background-color:${
//       setting.background
//     }; color: ${setting.color}; font-family:${setting.typeface}; font-weight: ${
//       setting.weight
//     }; font-style: ${setting.italic}">
//         ${truncateString(setting.text)}
//       </div>`;
//   });
//   settingsContainer.innerHTML = settingElements.join(" ");
// };

// // Fonction pour récupérer un paramètre enregistré et l'appliquer à outputProps
// const retrieveSetting = (setting) => {
//   outputProps = setting;
//   updateOutputInterface();
//   updateSidebarInterface();
// };

// // Écouteur d'événements pour enregistrer les paramètres actuels
// saveButton.addEventListener("click", (e) => {
//   saveSetting(outputProps); // Enregistrer les paramètres actuels
//   displaySettings(); // Mettre à jour l'affichage des paramètres
// });

// // Écouteur d'événements pour récupérer et appliquer un paramètre enregistré au clic
// settingsContainer.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("setting")) return;
//   const index = e.target.dataset.index;
//   outputProps = { ...savedSettings[index] }; // Charger le paramètre sélectionné
//   updateOutputInterface();
//   updateSidebarInterface();
// });
