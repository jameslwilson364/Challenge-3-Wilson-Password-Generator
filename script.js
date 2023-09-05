// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// prompt user for input on length of the password, create variable for the password length
// parseInt converts the string value to an integer
  var userLength = prompt("Welcome, please let us know how many characters you would like in your password.  Your password should be between 8-128 characters in length");
  var userLengthNumber = parseInt(userLength);

  if (userLengthNumber > 128) {
      var userLength = prompt("Your password was greater than 128 characters in length, try again");
      var userLengthNumber = parseInt(userLength);
      console.log(userLengthNumber);
  } else if (userLengthNumber < 8) {
      var userLength = prompt("Your password was less than 8 characters in length, try again");
      var userLengthNumber = parseInt(userLength);
      console.log(userLengthNumber);
  } else {
      alert("Your password will contain " + userLengthNumber + " characters");
      console.log(userLengthNumber);
  }

// prompt user for the types of characters to use in the password use boolean logic for these
// what if the user said no to all prompts

// generate for loop for building the array that will contain password elements

// use Math.floor and Math.random methods as a part of function, use inside a for loop to generate for the length 
// dedclared by the user



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
