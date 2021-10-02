// store time of forward money
let getMonyForwardWant;

// The User All Info Need it.
const userInfo = {
	// all user info key / value
	userName: 'test',
	firstName: 'alireza',
	lastName: 'fazeli',
	password: 'test',
	moneyForwardLog: [],
	// show the time of forward and money
	allLog: function () {
		let x;
		let y;
		for (
			y = 1, x = 0;
			y <= getMonyForwardWant && x <= this.moneyForwardLog.length;
			y++, x++
		) {
			console.log(`Log Time :${y} | MoneyForWard: ${this.moneyForwardLog[x]}`);
		}
	},
};

// this get username and password user.
let getUserName = prompt('Pleas enter your username :');
let getPassword = prompt('Pleas enter your password :');
let condition =
	getUserName == userInfo.userName || getPassword == userInfo.password;
// check the username and password
if (condition != true) {
	// while loop for when user entered wrong password and username.
	while (condition != true) {
		alert('your username or password is incorrect');
		getUserName = prompt('Pleas enter your username :');
		getPassword = prompt('Pleas enter your password :');
		// check username and password for second tim.
		if (
			(condition == getUserName) == userInfo.userName ||
			getPassword == userInfo.password
		) {
			// username and password if bee correct . bank mission is running.
			alert('Welcome To Bank');
			// get time of forward
			getMonyForwardWant = prompt('How Much Time You Want Forward Your Money?');
			// get money with time of forward
			for (let x = 1; x <= getMonyForwardWant; x++) {
				const getMoney = Number(prompt('Enter Your Money :'));
				// data stored in userInfo Object
				userInfo.moneyForwardLog.push(getMoney);
			}
			// when money forwarding is finished . allLog for showing log is running.
			userInfo.allLog();
		}
	}
}
