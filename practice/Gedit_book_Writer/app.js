"use strict";

// text data is saved this object
const bookWriter = {
	bookText: [],
};

//  main function all important code is here
const bookEditor = function () {
	// this method have two function for handel the text
	const allBookMethod = {
		// this get accept from user for writing
		writeAccept: function () {
			const userAccept = prompt("Do You Want Write Book : y/n?");
			if (userAccept == "y" || userAccept == "yes") {
				return true;
			} else if (userAccept == "n" || userAccept == "no") {
				return false;
			} else {
				return "pleas Enter Correct Answer.";
			}
		},
		// this method show all text in the array
		// Notice : I made This When User Want enter multiple value
		showText: function () {
			let newText;
			for (let x = 0; x < bookWriter.bookText.length; x++) {
				newText = bookWriter.bookText[x];
				return newText;
			}
		},
	};

	// welcome message with blue color
	console.log("\x1b[34m Welcome To Gedit BookWriter");
	// set condition for writing book
	if (allBookMethod.writeAccept() == true) {
		console.log("write your book 📕 🖋");
		const bookText = prompt("Gedit Is ready 🖋");
		// when writing is finished , we push it in book.Writer.bookText array
		bookWriter.bookText.push(bookText);
		// show book text
		console.log(`
            Your Text Is Here 📕
            -----------------------------------------------------
                ${allBookMethod.showText()}
            ------------------------------------------------------
        `);
	} else if (allBookMethod.writeAccept() == false) {
		return "Ok Bro, Good Bye 😁";
	} else {
		console.log(allBookMethod.writeAccept());
	}
};

// run the mai n function
bookEditor();
