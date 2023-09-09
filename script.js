// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperCaseLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbersValues = ("1234567890").split("");
var specialChars = ("!@#$%&*?").split("");
var lowerCaseBoolean = true;
var upperCaseBoolean = true;
var numbersBoolean = true;
var specialCharsBoolean = true;
var booleanValues = true;
console.log(lowerCaseLetters);
console.log(upperCaseLetters);
console.log(numbersValues);
console.log(specialChars);
console.log(lowerCaseBoolean);
console.log(upperCaseBoolean);
console.log(numbersBoolean);
console.log(specialCharsBoolean);
console.log(booleanValues);

function generatePassword() {
// prompt user for input on length of the password, create variable for the password length
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
      
      // prompts for the inclusion of lower case letters in the password
      var lowerCaseBooleanPrompt = prompt("Would you like to use lower case letters in your password? Please respond y or n");
      if (lowerCaseBooleanPrompt == "y") {
        lowerCaseBoolean = true;
        console.log(lowerCaseBoolean);
      } else {
        lowerCaseBoolean = false;
        console.log(lowerCaseBoolean);
      }
      // prompts for the inclusion of upper case letters in the password
      var upperCaseBooleanPrompt = prompt("Would you like to use upper case letters in your password? Please respond y or n");
      if (upperCaseBooleanPrompt == "y") {
        upperCaseBoolean = true;
        console.log(upperCaseBoolean);
      } else {
        upperCaseBoolean = false;
        console.log(upperCaseBoolean);
      }
      // prompts for the inclusion of numbers in the password
      var numbersBooleanPrompt = prompt("Would you like to use numbers in your password? Please respond y or n");
      if (numbersBooleanPrompt == "y") {
        numbersBoolean = true;
        console.log(numbersBoolean);
      } else {
        numbersBoolean = false;
        console.log(numbersBoolean);
      }
      // prompts for the inclusion of special characters in the password
      var specialCharsBooleanPrompt = prompt("Would you like to use special characters in your password?  These inlcude!, @, #, $, %, &, *, and ?. Please respond y or n");
      if (specialCharsBooleanPrompt == "y") {
        specialCharsBoolean = true;
        console.log(specialCharsBoolean);
      } else {
        specialCharsBoolean = false;
        console.log(specialCharsBoolean);
      }
      // conditional statement if the user answers no to all character inclusion questions
      // booleanValues = (lowerCaseBooleanPrompt + upperCaseBooleanPrompt + numbersBooleanPrompt + specialCharsBooleanPrompt).split("");
      booleanValues = (lowerCaseBoolean + upperCaseBoolean + numbersBoolean + specialCharsBoolean);
      console.log(booleanValues);
      
      // if (booleanValues[0] == "n", booleanValues[1] == "n", booleanValues[2]=="n", booleanValues[3]=="n") {
        if (booleanValues == 0) {
        alert("I guess you didn't want to generate a password.  Refresh the page to try again");
      
        // where the user chooses only lower case letters
        } else if (lowerCaseBoolean == true, upperCaseBoolean == false, numbersBoolean == false, specialCharsBoolean == false) {
          console.log("You only want lower case letters in your password");
          console.log(userLength);
          var computerChoice = [];
          var computerChoiceComplete = ("placeholder");
          console.log(computerChoiceComplete);
          for (i=0; i < userLength; i++) {
          var index = Math.floor(Math.random() * lowerCaseLetters.length);
          computerChoice.push(lowerCaseLetters[index]);
          } 
          computerChoiceComplete = computerChoice.toString();
          computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
          console.log(computerChoiceComplete);

        // where the user chooses only upper case letters
        } //else if (lowerCaseBoolean == false, upperCaseBoolean == true, numbersBoolean == false, specialCharsBoolean == false) {
          //console.log("You only want upper case letters in your password");
        //}
  }




// possibly use character codes ascii codes  charCodeAt() function
// what if the user said no to all prompts

// console.log(Math.florr((Math.random() * 128) + 10))  shifts the value from 0 to 10

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
