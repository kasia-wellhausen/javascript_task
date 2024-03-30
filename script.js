//1: Create a variable that stores your name and log a string to the console that provides a personalised greeting e.g. “Hello John”

let firstName = "Katarzyna";
console.log("Hello " + firstName);

//2: Create additional variables to store your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including your name and these values to the console.

let favColour = "red";
let favMovie = "Matrix";
console.log("My name is " + firstName + ", my favourite colour is " + favColour + " and my favourite movie is " + favMovie + ".");

//3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the breakfast, lunch and dinner variables to what you are eating today and log the new values to the console.

let breakfast = "sandwich";
let lunch = "tomato soup";
let dinner = "spag bowl";

console.log("Yesterday breakfast: " + breakfast);
console.log("Yesterday lunch: " + lunch);
console.log("Yesterday dinner: " + dinner);

let newBreakfast = "porridge";
let newLunch = "broccoli soup";
let newDinner = "fajitas";

console.log("Today's breakfast: " + newBreakfast);
console.log("Today's lunch: " + newLunch);
console.log("Today's dinner: " + newDinner);

//4: Research on below string methods and experiment with them to see how you can manipulate / work with the string data. Put together some examples.

//Length(), slice(), toUpperCase(), trim(), split(), replaceAll(), replace()

//length()
let shoppingList = ["tomatoes", "butter", "bread", "milk", "eggs"];
console.log(shoppingList.length);
//5 results in the list

//slice()
let shoppingList2 = ["tomatoes", "butter", "bread", "milk", "eggs"];
console.log(shoppingList2.slice(2));
console.log(shoppingList2.slice());
console.log(shoppingList2.slice(2,4));
console.log(shoppingList2.slice(-3));

//toUpperCase()
let sentence = "Rex is a pretty and gentle dog.";
console.log(sentence.toUpperCase());

//trim()
let sentence2= "     Rex is a pretty and gentle dog.    ";
console.log(sentence2.trim());
console.log(sentence2.trimStart());
console.log(sentence2.trimEnd());

//split()
console.log(sentence2.split(""));
console.log(sentence2.split(" "));
console.log(sentence2.split("g"));

let str = "Martha is a pretty and gentle person.";
let words = str.split(' ');
console.log(words[3]);

let chars = str.split('');
console.log(chars[7]);

//replaceAll()
let str2 = "Tom is a very good football coach.";
console.log(str2.replaceAll("good", "bad"));

//replace()
let str3 = "I think my purse is very pretty.";
console.log(str3.replace("my", "your"));

//5: Write conditional statement to check ATM transaction: Think of a scenario where you are withdrawing money from ATM, create a cash machine / atm function which take card number and pin as parameters, your card pin and number should be check first if correct then:

//If the withdrawal amount is less than or equal to the account balance, the transaction should be successful, and the new/updated balance should be printed in the console of browser. Otherwise, if the withdrawal amount exceeds the account balance, the transaction should fail due to insufficient funds.

//Also you shouldn’t be able to withdraw more than 250

//If the card number or pin is incorrect, alert(‘Card Rejected’).

function atmFunction(cardNumber, pin, withdrawalAmount, accountBalance) {
    if (cardNumber === "123456789" && pin === "1234") {
        if (withdrawalAmount > accountBalance) {
            console.log("Transaction failed due to insufficient funds.");
            return;
        };
        if (withdrawalAmount > 250) {
            console.log("Transaction failed. You cannot withdraw more than 250.");
            return;
        }
        if (newBalance = accountBalance - withdrawalAmount) {
            console.log("Transaction successful. New balance: " + newBalance);
        };
    } else {
        console.log("Card Rejected");
    }
}
atmFunction("123456789", "1234", 200, 500); // Transaction successful. New balance: 300
atmFunction("987654321", "4321", 300, 200); // Card Rejected
atmFunction("123456789", "1234", 300, 200); // Transaction failed due to insufficient funds.
atmFunction("123456789", "1234", 260, 500); // Transaction failed. You cannot withdraw more than 250.


//6: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

let favMovies = ["Matrix", "Game of Thrones", "Big Bang Theory", "Friends"];

favMovies.push("Startrek", "Goddzila");

console.log("List of my favourite movies and shows:");
for (let i=0; i< favMovies.length; i++) {
    console.log(favMovies[i]);
}

//7: Create a function which will ask user for input to guess a number between 1-10, then generate random numbers between 1-10 until the guess number is generated. When the guess number is generated, alert ‘ Congratulation! Guess number found [x-time] attempts’
//Note: x-time => number of iterations in which the guess number was found.

function guessNumber() {
    let guess = prompt("Guess a number between 1 and 10:");
    let randomNumber;
    let attempts=0;

    while (true) {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts++;

        if (guess === randomNumber.toString()) {
            prompt("Congrats! Guess number found after " + attempts + " attempts.");
            break;
        }
    }
}

guessNumber();


//8: Creating a function that generates random password of length that you are passing as argument to the function.

function generateRandomPassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        var randomChar = charset[randomIndex];
        password += randomChar;
    }

    return password;
}

// Example use:
var passwordLength = 10;
var randomPassword = generateRandomPassword(passwordLength);
console.log("Generated Password:", randomPassword);
