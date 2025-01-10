// **À IMPLEMENTER**
// Devrait permettre de regarder si l'utilisateur est authentifié
const isAuthenticated = () => {
  if (localStorage.getItem("authToken")) {
    return true;
  } else {
    return false;
  }
};

// Affiche un message à l'utilisateur.
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message; // Sélectionne l'élément de message et met à jour son texte.
};

// Gère l'affichage des éléments de l'interface en fonction de l'état d'authentification.
const handleInterfaceAuth = () => {
  const auth = isAuthenticated();
  console.log("Is Authenticated:", auth); // Vérifie si l'utilisateur est authentifié.
  document
    .querySelectorAll(".requires-auth")
    .forEach((el) => el.classList.toggle("hidden", !auth)); // Cache ou montre les éléments nécessitant une authentification.
  document
    .querySelectorAll(".requires-unauth")
    .forEach((el) => el.classList.toggle("hidden", auth)); // Cache ou montre les éléments ne nécessitant pas d'authentification.
};

// Basculer entre les formulaires de connexion et d'inscription.
const toggleForm = (formName) => {
  document
    .querySelectorAll("form")
    .forEach((form) => form.classList.remove("active")); // Désactive tous les formulaires.
  document.querySelector(`form[name='${formName}']`).classList.add("active"); // Active le formulaire spécifié.

  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active")); // Désactive tous les onglets.
  document.querySelector(`.tab#${formName}`).classList.add("active"); // Active l'onglet spécifié.
};

// **À COMPLETER**
// Initialisation de la page
const initEventListeners = () => {
  document.querySelector(".tab-container").addEventListener("click", (e) => {
    // Gère les clics sur les onglets.
    if (e.target.classList.contains("tab")) {
      toggleForm(e.target.id); // Bascule le formulaire actif en fonction de l'onglet cliqué.
    }
  });

  // fonction pour envoyer les données pour créer l'utilisateur:

  const createUser = async (email, password) => {
    const userInfos = {
      email: email,
      password: password,
    };

    const response = await fetch(
      "https://progweb-todo-api.onrender.com/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfos),
      }
    );

    const result = await response.json();
    console.log(result);

    displayMessage(result.message);
    return result;
  };

  // envoi des paramètres de connection à l'api
  document
    .querySelector("button:nth-of-type(1)")
    .addEventListener("click", (e) => {
      e.preventDefault();
      const form = document.querySelector(`form[name='signup'`);
      const formData = new FormData(form);
      const keys = [];
      for (let it of formData.values()) {
        keys.push(it);
      }

      createUser(keys[0], keys[1]);
    });
};

// Fonction pour envoyer les paramètres de login à l'API
const loginUser = async (email, password) => {
  const userLoginInfos = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLoginInfos),
  };

  try {
    const response = await fetch(
      "https://progweb-todo-api.onrender.com/users/login",
      options
    );
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      // Stocker le token dans le localStorage
      localStorage.setItem("authToken", data.token);
      handleInterfaceAuth(); // Mets à jour l'interface
    }

    displayMessage(data.message); // Afficher le message de l'API
    return data;
  } catch (error) {
    console.error("Erreur réseau :", error);
    displayMessage("Une erreur est survenue. Veuillez réessayer.");
  }
};

// Initialiser les événements pour le formulaire de connexion
const initLoginEvent = () => {
  const loginButton = document.querySelector("form[name='login'] button");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    const form = document.querySelector("form[name='login']");
    const formData = new FormData(form);

    // Récupérer les valeurs du formulaire
    const email = formData.get("email");
    const password = formData.get("password");

    // Appeler la fonction loginUser avec les valeurs récupérées
    loginUser(email, password);
  });
};

// Implémenter la fonction logout

const logoutBtn = document.querySelector("button[name='logout']");

logoutBtn.addEventListener("click", (e) => {
  localStorage.removeItem("authToken");
  handleInterfaceAuth();
  displayMessage("Vous avez été déconnecté.");
});

// récupère les todos:

const todos = async () => {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`
    },
  };

  const todoResponse = await fetch(
    "https://progweb-todo-api.onrender.com/todos/",
    options
  );
  const resultTodo = await todoResponse.json();

  displayTodos(resultTodo.todos);

  return resultTodo
};

// affiche les todos

const displayTodos = (todos) => {
  // Affiche la liste des tâches (todos).
  const container = document.querySelector("main > ul"); // Sélectionne le conteneur des tâches.
  container.innerHTML = ""; // Efface le contenu actuel du conteneur.

  todos.forEach((todo) => {
    // Pour chaque tâche dans la liste...
    const todoItem = document.createElement("li"); // Crée un élément de liste pour la tâche.
    todoItem.id = todo.id; // Attribue l'ID de la tâche à l'élément.

    const bodyParagraph = document.createElement("p"); // Crée un paragraphe pour le corps de la tâche.
    bodyParagraph.classList.add("body"); // Ajoute la classe 'body'.
    bodyParagraph.textContent = todo.body; // Ajoute le corps de la tâche au paragraphe.

    const tagsParagraph = document.createElement("p"); // Crée un paragraphe pour les tags.
    tagsParagraph.classList.add("tags"); // Ajoute la classe 'tags'.
    tagsParagraph.textContent = todo.tags; // Ajoute les tags au paragraphe.

    const deleteButton = document.createElement("div"); // Crée un bouton de suppression.
    deleteButton.classList.add("delete"); // Ajoute la classe 'delete'.

    // Ajoute les éléments créés à l'élément de la tâche.
    todoItem.appendChild(bodyParagraph);
    todoItem.appendChild(tagsParagraph);
    todoItem.appendChild(deleteButton);

    // Ajoute l'élément de la tâche au conteneur.
    container.appendChild(todoItem);
  });
};

todos()

// Initialisation de la page
const pageLoad = () => {
  handleInterfaceAuth(); // Mettre à jour l'interface en fonction de l'authentification
  initEventListeners(); // Ajouter les événements pour les autres fonctionnalités
  initLoginEvent(); // Ajouter les événements pour le formulaire de connexion
};

pageLoad();
