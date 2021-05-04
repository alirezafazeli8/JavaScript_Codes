// index zero is : username , index one is : password, index two is money.
const bankDataBase = ["alireza", 1234, 50000];
let userSpend;

// check the password from database
function passwordChecker(username, password) {
    if (username === bankDataBase[0] && password === bankDataBase[1]) {
        return true
    } else {
        return false
    }
}

// login page and authentication from password checker
const bankLogin = function () {
    // welcome 
    alert("Welcome To Bank , Pleas Login To Website");
    // get username and password
    const getUserName = prompt("Pleas Enter Your UserName.");
    const getPassword = Number(prompt("Pleas Enter Your Password."));
    // check password from password checker function
    if (passwordChecker(getUserName, getPassword)) {
        return true
    } else {
        return false
    }
}
// run function
bankLogin();

// bank main page 
function bankPage() {
    // check authentication adn show login message
    if (bankLogin === true) {
        alert("you are logged in");
        // user want spend the money?
       const spendAnswer =  prompt("you want spend your money, answer the question with y or n?");
        // check answer
       if (spendAnswer === "y") {
            // get name and spend money for forward money
           const userSpendName  = prompt("tell mey spend name:");
            const moneySpend = Number(prompt("enter your spend money:"));
            // check money inventory ,
            if (moneySpend <= bankDataBase[2]) {
                // if user has money , we minus forward money to inventory money
                bankDataBase[2] = bankDataBase[2] - moneySpend;
                // show success forward money
                alert(`your money is forward. Your Money Now: ${bankDataBase[2]}$`);
                // save new forward money to user
                userSpend = [userSpendName, moneySpend];
                // if user want see new user invent can
                const wantSee = prompt(`do you want see the ${userSpendName} inventory?, answer with y / n :`);
                if (wantSee === "y") {
                    alert(`${userSpendName} : ${userSpend[1]}`);
                }else {
                    alert("have goody day");
                }
            }else {
                alert("you need more money. have good day");
            }
       } else {
           alert("have good day");
       }
    }else {
       alert( "your username or password is incorrect.");
    }
}
bankPage();