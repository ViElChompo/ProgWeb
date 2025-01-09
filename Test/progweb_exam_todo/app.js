"use strict";

const textInput = document.querySelector("#input-todo");
const categoryContainer = document.querySelector("#category-container");
const todoList = document.querySelector("#list");

// variable pour stocker la catégorie sélectionnée
let selectedCategory = "home";

// Gestion de la sélection de la catégorie

categoryContainer.addEventListener("click", (event) => {
  const category = event.target;

  if (category.classList.contains("category")) {
    document.querySelectorAll(".category").forEach((cat) => {
      cat.setAttribute("data-selected", "false");
    });
  }
  category.setAttribute("data-selected", "true");
  selectedCategory = category.getAttribute("data-category");
});

// Ajout d'un élément à la todoliste

textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && textInput.value.trim() !== "") {
    // Créer un nouvel élément todo
    const newTodo = document.createElement("li");
    newTodo.setAttribute("data-category", selectedCategory);
    newTodo.setAttribute("data-done", "false");

    newTodo.innerHTML = `${textInput.value.trim()}
        <div class="button-done">❌</div>
        `;

    // Ajouter le nouvel élément en haut de la liste
    todoList.prepend(newTodo);

    // Réinitialiser l'input
    textInput.value = "";
    textInput.blur();
  }
});

// Gestion du clic sur les todos et suppression

todoList.addEventListener("click", (event) => {
  const target = event.target;
  const todoItem = event.closest("li");

  // Vérifier si le bouton ❌ est cliqué pour supprimer
  if (target.classlist.contains(".button-done")) {
    todoItem.remove();
  } else if (todoItem) {
    const isDone = todoItem.getAttribute("data-done") === "true";
    todoItem.setAttribute("data-done", isDone ? "false" : "true");
  }
});
