// user data objects
let userData = {};

// get user info function and save it to userData
function getUserInfo(
    userName,
    firstName,
    lastName,
    age,
    country,
    city,
) {
    const saveUserData = {
        "userName": userName,
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "country": country,
        "city": city
    };

    return userData = saveUserData; // save data to userData
}

// use function
getUserInfo("mr_Alireza", "alireza", "fazeli", 16, "iran", "TH"); 

// show data in console like exl file
let showData = `
    Welcome To User Data,

    The User Data OF ${userData.userName}.
    Name : ${userData.firstName}.
    FamilyName : ${userData.lastName}.
    age : ${userData.age}.
    Country: ${userData.country}.
    city: ${userData.city}.

    Warning: This data is very
    important , pleas carefully.

`;

// log the variable
console.log(showData);


