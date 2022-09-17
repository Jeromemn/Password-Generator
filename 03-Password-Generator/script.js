// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Global variables 
// const arryOfCharacters = ["lowercase", "uppercase", "numeric", "special characters"]

function generatePassword() {
  let length = prompt( "Choose length of password between 8 and 128 characters.");
  if (length > 8 && length < 128) {
    greeting = "Thank you";
    console.log("length > 8 && < 128 Thank you!");
  }else {
    greeting = "Please choose between 8 and 128 characters";
    let = length = prompt( "Choose length of password between 8 and 128 characters.");
  if (length > 8 && length < 128) {
    console.log("Please choose a length between 8 and 128 characters");
  }
  //let confirmSpecialCharacter= prompt("Select character type");
  //if (confirmSpeciaCharacter = lowercase)


  //else{

  }

}