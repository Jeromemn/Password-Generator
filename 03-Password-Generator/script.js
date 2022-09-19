// Assignment Code
// Global variables 
let confirmLength;
let confirmLowercase;
let confirmUppercase;
let confirmNumbers;
let confirmSpecialCharacters;

const lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseOptions = ["A", "B", "C", "D", "E", "F", "l", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function promptCharacterTypes() {
  confirmLowercase = confirm("Do you want to use lowercase letters?");
  confirmUppercase = confirm("Do you want to use uppercase letters?");
  confirmNumbers = confirm("Do you want to use numbers");
  confirmSpecialCharacters = confirm("Do you want to use special characters?");
}

function promptLength() {
  confirmLength = prompt("Choose length of password between 8 and 128 characters.");
}

// Function to generate password pulls from global variables
function generatePassword() {
  //confirm password length 
  promptLength();
  // check if length is  outside requirements
  while (confirmLength <= 8 || confirmLength >= 128) {
    // if outside requirements alert user 
    alert("Password must be between 8 and 128 characters. Try again!");
    //re prompts and assign new value
    promptLength();
    //then loops back to check the condition above
  }
  // prompt each character type
  promptCharacterTypes();
  //check if atleast one is true
  while (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters) {
    //if all are false then alert 
    alert("Please select atleast one character type. Try aagain!");
    // re-prompt and assign new values
    promptCharacterTypes();
    //loop and check the condition above
  }
  // Creating a new array called possibilities to push the character options to 
  let possibilities = [];
  if (confirmLowercase) {
    possibilities = possibilities.concat(lowercaseOptions);
  }
  if (confirmUppercase) {
    possibilities = possibilities.concat(uppercaseOptions);
  }
  if (confirmNumbers) {
    possibilities = possibilities.concat(numberOptions);
  }
  if (confirmSpecialCharacters) {
    possibilities = possibilities.concat(specialOptions);
  }
  console.log(possibilities);
  // setting the password to a empty string, array starts at 0 and is not to exceed confim length adding one character from possibilities each time it runs through.
  //declaring password as a empty string, placing a for loop on the possibilities array not to exceed the confirm length. 
  let password = ""
  for (let i = 0; i < confirmLength; i++) {
    // Math.floor(Math.random) * possibilities.length is going to get a random number from 0-possibilities.length. however long the possibilities array is. 
    let random = possibilities[Math.floor(Math.random() * possibilities.length)];
    console.log(random);
    // pasword = password + random 
    password += random;
    console.log(password);
  }
  return password;
}