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

const matchUser = (username, pin) => {
  const matchedAccount = accounts.find((acc) => username === acc.username);
  if (matchedAccount && matchedAccount.pin === pin) {
    return matchedAccount;
  } else {
    throw new Error("Couldn't match user");
  }
};


const calcSummary = (acc) => {

  const income = acc.movements.filter(mov => mov > 0)
    .reduce((accum, mov) => accum + mov)

  const expenses = Math.abs(acc.movements.filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov));
  return {
    income,
    expenses,
    balance: income - expenses
  }
}

const message = (text, error) => {
  labelWelcome.textContent = text;
  error
    ? (labelWelcome.style.color = "var(--withdrawal)")
    : (labelWelcome.style.color = "var(--deposit)");
};


const createMovementElement = (mov, i) => {
  const movementType = mov > 0 ? "deposit" : "withdrawal"
  const html = `
  <div class="movements__row">
	  <div class="movements__type movements__type--${movementType}">${i} ${movementType}</div>
	  <div class="movements__value">CHF ${mov}</div>
  </div>
  `
  return html;
}

const displayAccount = (acc) => {
  if (acc) {
    const summary = calcSummary(acc);
    containerMovements.innerHTML = "";
    containerApp.style.opacity = "100";
    labelBalance.textContent = `CHF ${summary.balance}`;
    labelSumIn.textContent = `CHF ${summary.income}`;
    labelSumOut.textContent = `CHF ${summary.expenses}`;

    acc.movements.forEach((mov, i) => {
      containerMovements.insertAdjacentHTML("afterbegin", createMovementElement(mov, i))
    })
  } else {
    throw new Error("No account to display");
  }
};


// transferOptions {
//  from: { account },
//  to: "username",
//  amount: 5000 
// }
const transfer = (transferOptions) => {
  const destination = accounts.find((acc) => transferOptions.to === acc.username);
  const { balance } = calcSummary(transferOptions.from);
  console.log(destination, balance, transferOptions.amount)
  // destination valide + assez d'argent + montant > 0
  if (destination && transferOptions.amount > 0 && balance >= transferOptions.amount) {
    transferOptions.from.movements.push(-transferOptions.amount);
    destination.movements.push(transferOptions.amount);

  } else {
    throw new Error("Couldn't transfer moneys");
  }
}

btnLogin.addEventListener("click", function (e) {
  try {
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    message(`Welcome ${currentAccount.owner}`);
  } catch (err) {
    message(err.message, true);
  }
});


btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();


  try {
    const transferOptions = {
      from: currentAccount,
      to: inputTransferTo.value,
      amount: +inputTransferAmount.value
    }

    transfer(transferOptions);
    message(`Transfered CHF ${transferOptions.amount} to ${transferOptions.to}`)
    displayAccount(currentAccount);
  } catch (e) {
    message(e, true);
  }
})