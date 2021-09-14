"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2021-09-11T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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

// display the day is passed
const disPlayDayPassed = function (date) {
  // convert iso string to real date object
  const nowDate = new Date(date);
  const dateOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const showDate = new Intl.DateTimeFormat(
    correctAcc.locale,
    dateOption
  ).format(nowDate);

  // convert day to miliaSeconds
  const convertDateMilia = function (dayOne, dayTwo) {
    return Math.round(Math.abs(dayTwo - dayOne) / (1000 * 60 * 60 * 24));
  };

  // store function to varibale
  const correctDate = convertDateMilia(new Date(), nowDate);

  // show day condition
  if (correctDate === 0) {
    return "Today";
  } else if (correctDate === 1) {
    return "Yesterday";
  } else {
    return showDate;
  }
};

// function movements for show deposit and withdraw
function movementFunc(variable, sort = false) {
  const sortCondition = sort
    ? variable.movements.slice().sort((a, b) => a - b)
    : variable.movements;

  sortCondition.forEach(function (move, i) {
    // format number function
    const formatNumber = showMoneyFormat(correctAcc, move);

    const displayDatesMov = disPlayDayPassed(correctAcc.movementsDates[i]);
    const withDeposit = move <= -0 ? "withdrawal" : "deposit";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${withDeposit}">${
      i + 1
    } ${withDeposit}</div>
        <div class="movements__date">${displayDatesMov}</div>
        <div class="movements__value">${formatNumber}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

/////////////////////////////////////////////////

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
  movementFunc(ac);

  //display balance
  showCurrentMoney(ac);

  // display summary
  displaySummary(ac);
};

function showMoneyFormat(user, number) {
  const numberOption = {
    style: "currency",
    currency: user.currency,
  };
  const formatNumber = new Intl.NumberFormat(user.locale, numberOption).format(
    number
  );
  return formatNumber;
}

// NOTE thats show current balance money
function showCurrentMoney(array) {
  array.cbMoney = array.movements.reduce(function (first, current) {
    return first + current;
  });

  labelBalance.textContent = showMoneyFormat(array, array.cbMoney);
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
  labelSumIn.textContent = showMoneyFormat(correctAcc, incomes);

  // outSummary money variable
  const outSummary = movementsArray.movements
    .filter(function (money) {
      return money < 0;
    })
    .reduce(function (first, last) {
      return first + last;
    }, 0);

  // show sum out page
  labelSumOut.textContent = showMoneyFormat(correctAcc, Math.abs(outSummary));

  // interest money variable
  const interestSummary = movementsArray.movements
    .filter((money) => money > 0)
    .map((deposit) => (deposit * movementsArray.interestRate) / 100)
    .filter((deposit) => deposit >= 1)
    .reduce((first, last) => first + last);

  // show sumInterest page
  labelSumInterest.textContent = showMoneyFormat(correctAcc, interestSummary);
}

// let correctAcc;
let correctAcc = account1;
containerApp.style.opacity = "100";
updateUi(correctAcc);

btnLogin.addEventListener("click", function (e) {
  // reset default event in bu
  e.preventDefault();

  // correct Account
  // correctAcc = accounts.find(function (value) {
  //   return value.userName == inputLoginUsername.value;
  // });

  if (correctAcc.pin == inputLoginPin.value) {
    // display containerApp
    containerApp.style.opacity = "100";

    // display message
    labelWelcome.textContent = `Welcome ${correctAcc.owner.split(" ")[0]}`;

    // show date in to current date
    const nowDate = new Date();
    // const dateYear = nowDate.getFullYear();
    // const dateMonth = nowDate.getMonth();
    // const dateDay = nowDate.getDate();
    // const dateHours = nowDate.getHours();
    // const dateMinutes = nowDate.getMinutes();
    // const dateSeconds = nowDate.getSeconds();

    // const showDateString = ` ${`${dateDay}`.padStart(
    //   2,
    //   "0"
    // )}/${`${dateMonth}`.padStart(2, "0")}/${`${dateYear}`.padStart(
    //   2,
    //   "0"
    // )} ,  ${dateHours}:${dateMinutes}:${dateSeconds}`;

    const dateOption = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const showDate = new Intl.DateTimeFormat(
      correctAcc.locale,
      dateOption
    ).format(nowDate);

    labelDate.textContent = showDate;

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
    // push dates to currentUser
    correctAcc.movementsDates.push(new Date().toISOString());
    // push dates to transfer user
    transferUserNameInput.movementsDates.push(new Date().toISOString());
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
    // push dates to currentUser
    correctAcc.movementsDates.push(new Date().toISOString());

    setTimeout(function () {
      // update ui function
      updateUi(correctAcc);
    }, 3000);
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
