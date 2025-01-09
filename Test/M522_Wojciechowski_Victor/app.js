"use strict";

// Sélection de la zone d'input de texte
const textInput = document.querySelector("#input-todo");
const text = "";

// Sélection de la zone de la liste
const list = document.querySelector("#list");

// Sélection des emojis:
const emojis = document.querySelector(".category[data-selected='true']");
emojis.dataset.selected = "false";

const todoItems = document.querySelector("#list > li[data-done='true'] ");
todoItems.dataset.done = "false";

const emoji = document.querySelector("#category-container > .category");

const todoItem = document.querySelector("#list > li");

const deleteBtn = document.querySelector(".button-done");

// 1: Cet eventListener permet d'appliquer un certain comportement lorsque le bouton enter est relaché.
// le comportement est bien pris en compte car cela affiche enter is pressed dans la console

textInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log(`${e.key} is pressed`);
  }
});

// Cet evenListener regarde le fait que l'on click sur l'emoji que l'on souhaite choisir, cela fonctionne mais uniquement sur le premier emoji et je n'arrive pas
// à le faire fonctionner sur les emojis qui suivent.

emoji.addEventListener("click", (e) => {
  e.defaultPrevented;
  e.currentTarget.dataset.selected = "true";
});

// Cet evenListener regarde le fait que l'on click sur l'élément todo que l'on souhaite choisir, cela fonctionne mais uniquement sur le premier élément et je n'arrive pas
// à le faire fonctionner sur les éléments de la todolist qui suivent.

todoItem.addEventListener("click", (e) => {
  e.defaultPrevented;
  e.currentTarget.dataset.done = "true";
});

// Fonction pour supprimer un élément de la liste
// Cette foncrion ne marche pas comme je l'aimerais car elle ne supprime que le premier élément de la liste
// Je pense qu'il s'agit d'un comportement lié à la propriété de position ::before, mais je n'arrive pas à fair en sorte qu'il supprime les autres éléments de la liste

deleteBtn.addEventListener("click", (e) => {
  todoItem.remove(e);
});


