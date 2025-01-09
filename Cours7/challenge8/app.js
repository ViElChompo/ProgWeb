// ACCOUNT DATA
const account1 = {
  owner: "Anna Anderson",
  username: "aa",
  movements: [200, 450, -400.5, 3000, -650, -130, 70, 1300],
  pin: 1234
};

const account2 = {
  owner: "Bijan Bell",
  username: "bb",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 1111
};

const account3 = {
  owner: "Celeste Carter",
  username: "cc",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 0000
};

const accounts = [account1, account2, account3];

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");

let currentAccount;
// Fonction pour matcher l'utilisateur
const matchUser = (username, pin) => {
  const matchedAccount = accounts.find(acc => username === acc.username);
  if (matchedAccount && matchedAccount.pin === pin) {
    return matchedAccount;
  } else {
    throw new Error("Couldn't match user");
  }
};

// Fonction pour afficher un message de bienvenue
const message = (text, error) => {
  labelWelcome.textContent = text;
  labelWelcome.style.color = error ? "var(--withdrawal)" : "var(--deposit)";
};

// Fonction pour afficher les mouvements
function displayMovements(account) {
  // Effacer les anciens mouvements
  containerMovements.innerHTML = '';

  // Afficher chaque mouvement
  account.movements.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const displayValue = Math.abs(movement).toFixed(2);
    
    const row = document.createElement('div');
    row.classList.add('movements__row');
    
    row.innerHTML = `
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">CHF ${displayValue}</div>
    `;
    
    containerMovements.appendChild(row);
  });
}

// Fonction pour mettre à jour les informations du compte
function updateAccountInfo(account) {
  const balance = account.movements.reduce((acc, movement) => acc + movement, 0);
  
  const totalIn = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);
  
  const totalOut = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);

  labelBalance.textContent = `CHF ${balance.toFixed(2)}`; // Montant à disposition
  labelSumIn.textContent = `CHF ${totalIn.toFixed(2)}`;   // Total des entrées
  labelSumOut.textContent = `CHF ${Math.abs(totalOut).toFixed(2)}`; // Total des sorties (en positif)
}

// Fonction pour afficher les informations de compte
const displayAccount = (acc) => {
  if (acc) {
    containerApp.style.opacity = "100"; // Affiche le tableau de bord
    updateAccountInfo(acc); // Met à jour les informations du compte
    displayMovements(acc); // Affiche les mouvements
  } else {
    throw new Error("No account to display");
  }
};

// Événement de connexion
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page
  try {
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    message(`Welcome ${currentAccount.owner}`, false);
  } catch (err) {
    message(err.message, true);
  }
});