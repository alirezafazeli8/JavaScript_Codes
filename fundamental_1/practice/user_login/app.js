// user login with user or email and password
const userNameOrEmail = prompt("Pleas Enter Your UserName Or Email :");
const userPassword = prompt("Pleas Enter Your Password :");

// save user input data in objects
const userData = {
    username_or_email: userNameOrEmail,
    password: userPassword
};

// make database for store user data
const dataBase = {
    username: "alireza",
    email: "email@email.com",
    password: "1234",
};

// check user input data in database and show the result
if (
    userData.username_or_email === dataBase.username || 
    userData.username_or_email === dataBase.email &&
    userData.password === dataBase.password
) {
    console.log("You Are Logged In ✅");
} else {
    console.log("Your UserName Or Password is Wrong ❌");
}
