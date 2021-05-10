// string interpolation in javascript => ma ba in kar mitoonim string khodemoon ro tarkib konim.
let firstName = "alireza";
let lastName = "fazeli";

//first method
console.log("your name is : " + firstName + "and your last name is : " + lastName);

// this method is good choice for string interpolation
console.log(`your name is ${firstName} and your lastname is ${lastName}`);

// --------------------------------------------------------------------------------

// escape notation

// \' \"" => vaghti ma toy stringemoon "" darim nemitoonim dobare az "" estefade konim , banabarin ba estefade az \" ya dar '' az \' estefade mikonim va errory daryaft nemikonim
let message = "hello \"my dear jack,\"  im from iran and today i wanna kick your head , so its fun!!!";

message = 'hello \'my dear jack,\'  im from iran and today i wanna kick your head , so its fun!!!';

// console.log(message);


// \\
// notice => be tor adi nemishe az \ estefade kard chon js fekr mikone in ye escape notishim hastesh va neshoonesh nemide ya emkan dare ke jaye code beshnasatesh banabarin ba bas estefade az ( \\ ) mitoonim be rahati az \  estefade konim

message = "hello my dear jack,  im from iran and today i wanna kick your head , so its fun!!!";
// console.log(message);

// \n => new line , karesh ine ke mitoone vast text vas ma line ro break bokone.
message = "hello my dear jack,\n im from iran and today i wanna kick your head , \n so its fun!!!";

// console.log(message);


// \t => in karesh ine ke tab mizane be code ha
message = "hello \t \t my dear jack , im from iran and today i wanna kick your head , so its fun!!!";

// console.log(message);


message = "hello my dear \b jack, im from iran and today i wanna kick your head , so its fun!!!";
console.log(message);