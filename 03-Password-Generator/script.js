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
const characterTypes = ["lowercase", "uppercase", "numeric", "special characters"]

function generatePassword() {
  let length = prompt( "Choose length of password between 8 and 128 characters.");
  while (length <=8 || length >= 128) {
    alert("Password must be between 8 and 128 characters. Try again!");
   // let length = prompt( "Choose length of password between 8 and 128 characters.");
    if (length >8 && length < 128) break;
  }
    //console.log("length > 8 && < 128 Thank you!");
  //}else {
    
    
   // let = length = prompt( "Choose length of password between 8 and 128 characters.");
 // if (length > 8 && length < 128) {
   // console.log("Please choose a length between 8 and 128 characters");
  //}
  //let confirmLowercase = confirm("Do you want to use lowercase letters?");

 // let confirmUppercase =confirm("Do you want to use uppercase letters?")

 // let confirmUppercase =confirm("Do you want to use numbers")

 // let confirmUppercase =confirm("Do you want to use cpecial characters?")
  
  //const confirmCharacterTypes = confirm(characterTypes[0]);
   //  if (confirmAction) {
    // if true
  //  alert("Successfully added lowercase");
      //}else {
  //if false
 //alert("Lowercase not added");
//}
  //let confirmCharacters = confirm( arryOfCharacters[0]);
  //let confirmCharacters = confirm( arryOfCharacters[0]);
  //let confirmCharacters = confirm( arryOfCharacters[0]);

  const confirmCharactersTypes = [0];

 for (let i = 0; i < characterTypes.length; i ++) {
    const confirmed= confirm(`click okay if you want to include in ` + characterTypes[i] + ` characters`);
    if (confirmed) {
      alert(`Successfully added ` + characterTypes[i] + ` characters`)
      //confirm(characterTypes.push (characterTypes[i])) 
    }}}
  // var textarea = document.


  
    


 // }

//