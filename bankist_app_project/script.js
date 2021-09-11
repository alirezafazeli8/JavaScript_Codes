"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// function movements for show deposit and withdraw
function movementFunc(variable, sort = false) {
  const sortCondition = sort
    ? variable.slice().sort((a, b) => a - b)
    : variable;

  sortCondition.forEach(function (move, i) {
    const withDeposit = move <= -0 ? "withdrawal" : "deposit";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${withDeposit}">${
      i + 1
    } ${withDeposit}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${move}$</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

/////////////////////////////////////////////////

// NOTE write computing username for once
// function makeUserName(userArr) {
//   userArr.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((word) => word[0])
//       .join("");
//   });
// }

// makeUserName(accounts);

// console.log(accounts);

// NOTE thats my main code about computing username
function createUserName(arr) {
  arr.forEach(function (acc) {
    acc.userName = acc.owner
      .split(" ")
      .map((names) => names[0])
      .join("")
      .toLowerCase();
  });
}

createUserName(accounts);

const updateUi = function (ac) {
  //display movements
  movementFunc(ac.movements);

  //display balance
  showCurrentMoney(ac);

  // display summary
  displaySummary(ac);
};

// NOTE thats show current balance money
function showCurrentMoney(array) {
  array.cbMoney = array.movements.reduce(function (first, current) {
    return first + current;
  });
  labelBalance.textContent = `${array.cbMoney} EUR`;
}

function displaySummary(movementsArray) {
  // incomes money variable
  const incomes = movementsArray.movements
    .filter(function (money) {
      return money > 0;
    })
    .reduce(function (first, last) {
      return first + last;
    }, 0);

  // show incomes in page
  labelSumIn.textContent = `${incomes} EUR`;

  // outSummary money variable
  const outSummary = movementsArray.movements
    .filter(function (money) {
      return money < 0;
    })
    .reduce(function (first, last) {
      return first + last;
    }, 0);

  // show sum out page
  labelSumOut.textContent = `${Math.abs(outSummary)} EUR`;

  // interest money variable
  const interestSummary = movementsArray.movements
    .filter((money) => money > 0)
    .map((deposit) => (deposit * movementsArray.interestRate) / 100)
    .filter((deposit) => deposit >= 1)
    .reduce((first, last) => first + last);

  // show sumInterest page
  labelSumInterest.textContent = `${interestSummary} EUR`;
}

let correctAcc;

btnLogin.addEventListener("click", function (e) {
  // reset default event in bu
  e.preventDefault();

  // correct Account
  correctAcc = accounts.find(function (value) {
    return value.userName == inputLoginUsername.value;
  });

  if (correctAcc.pin == inputLoginPin.value) {
    // display containerApp
    containerApp.style.opacity = "100";

    // display message
    labelWelcome.textContent = `Welcome ${correctAcc.owner.split(" ")[0]}`;

    // update ui function
    updateUi(correctAcc);

    //clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    // onblur(inputLoginPin);
  }
});

// btn transfer event listener
btnTransfer.addEventListener("click", function (e) {
  // prevent default
  e.preventDefault();

  // find target user
  const transferUserNameInput = accounts.find(
    (value) => value.userName == inputTransferTo.value
  );

  // amount input
  const amountUserInput = Number(inputTransferAmount.value);

  // condition
  if (
    transferUserNameInput &&
    amountUserInput &&
    amountUserInput <= correctAcc.cbMoney
  ) {
    // minus correctAcc with target user
    correctAcc.cbMoney - amountUserInput.value;
    // push money transfer to correctAcc
    correctAcc.movements.push(-amountUserInput);
    // push money transfer to target user
    transferUserNameInput.movements.push(amountUserInput);
    // clear input
    inputTransferTo.value = inputTransferAmount.value = "";
    // remove input focus
    inputTransferAmount.blur();
    // update ui function
    updateUi(correctAcc);
  }
});

// btn close event listener
btnClose.addEventListener("click", function (e) {
  // prevent default
  e.preventDefault();
  // correct acc condition
  const correctCloseAcc =
    correctAcc.userName === inputCloseUsername.value &&
    correctAcc.pin === Number(inputClosePin.value);

  if (correctCloseAcc) {
    // find index of correct account
    const index = accounts.findIndex(function (v) {
      return v.userName === inputCloseUsername.value;
    });
    // remove correct account
    accounts.splice(index, 1);
    // add opacity to main app
    containerApp.style.opacity = 0;
  }
  // clear input
  inputCloseUsername.value = "";
  inputClosePin.value = "";
});

// loan eventListener
btnLoan.addEventListener("click", function (e) {
  // prevent default
  e.preventDefault();
  // check loan condition
  const checkLoan =
    inputLoanAmount.value > 0 &&
    // check with some
    correctAcc.movements.some(function (v) {
      return v >= inputLoanAmount.value;
    });

  if (checkLoan) {
    // push new loan money to movement
    correctAcc.movements.push(Number(inputLoanAmount.value));
    // update ui function
    updateUi(correctAcc);
  }
  // clear input value
  inputLoanAmount.value = "";
});

let sortMov = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  movementFunc(correctAcc.movements, !sortMov);
  sortMov = !sortMov;
});

// const bankDepositSum = function () {
//   return accounts
//     .flatMap(function (v) {
//       return v.movements;
//     })
//     .reduce(function (l, f) {
//       return l + f;
//     });
// };

// console.log(bankDepositSum());

// const bankDeposit100 = function () {
//   return accounts
//     .flatMap(function (value) {
//       return value.movements;
//     })
//     .filter(function (fv) {
//       return fv > 100;
//     }).length;
// };

// console.log(bankDeposit100());
