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
  }
      
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
      
      // Let's make the donuts, this long conditional loop accounts for all variations of the user input above
      // the first two variables will be used to generate the password output
      var computerChoice = [];
      var computerChoiceComplete = ("placeholder");      
        if (booleanValues == 0) {
        alert("I guess you didn't want to generate a password.  Refresh the page to try again");
      
        // where the user chooses only lower case letters
        } else if (lowerCaseBoolean == true && upperCaseBoolean===false && numbersBoolean===false && specialCharsBoolean===false) {
          alert("You only want lower case letters in your password");
          for (i=0; i < userLength; i++) {
          var index = Math.floor(Math.random() * lowerCaseLetters.length);
          computerChoice.push(lowerCaseLetters[index]);
          } 
          computerChoiceComplete = computerChoice.toString();
          computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
          console.log(computerChoiceComplete);
          return computerChoiceComplete;

        // where the user chooses only upper case letters
        } else if (upperCaseBoolean == true && lowerCaseBoolean===false && numbersBoolean===false && specialCharsBoolean===false) {
          alert("You only want upper case letters in your password");
          for (i=0; i < userLength; i++) {
          var index = Math.floor(Math.random() * upperCaseLetters.length);
          computerChoice.push(upperCaseLetters[index]);
          } 
          computerChoiceComplete = computerChoice.toString();
          computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
          console.log(computerChoiceComplete);
          return computerChoiceComplete;
        
        // where the user chooses only numbers
      } else if (numbersBoolean == true && lowerCaseBoolean===false && upperCaseBoolean===false & specialCharsBoolean===false) {
        alert("You only want numbers in your password");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * numbersValues.length);
        computerChoice.push(numbersValues[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;
      
        // where the user only chooses special characters
      } else if (specialCharsBoolean == true && lowerCaseBoolean===false && upperCaseBoolean===false && numbersBoolean===false) {
        alert("You only want special characters in your password");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * specialChars.length);
        computerChoice.push(specialChars[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;
      
        // if the user picks lower and upper case letters
       } else if (lowerCaseBoolean == true && upperCaseBoolean===true && numbersBoolean === false && specialCharsBoolean === false) {
        alert("You want lower and upper case letters in your password");
        var lowerAndUpper = (lowerCaseLetters + upperCaseLetters);
        lowerAndUpper = lowerAndUpper.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * lowerAndUpper.length);
        computerChoice.push(lowerAndUpper[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;
       
        // user wants lower case and numbers only
      } else if (lowerCaseBoolean == true && upperCaseBoolean===false && numbersBoolean === true && specialCharsBoolean === false) {
        alert("You want lower case letters and numbers in your password");
        var lowerAndNumbers = (lowerCaseLetters + numbersValues);
        lowerAndNumbers = lowerAndNumbers.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * lowerAndNumbers.length);
        computerChoice.push(lowerAndNumbers[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;
       
        // user wants lower case and special characters
      } else if (lowerCaseBoolean == true && upperCaseBoolean===false && numbersBoolean === false && specialCharsBoolean === true) {
        alert("You want lower case letters and special characters in your password");
        var lowerAndSpecial = (lowerCaseLetters + specialChars);
        lowerAndSpecial = lowerAndSpecial.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * lowerAndSpecial.length);
        computerChoice.push(lowerAndSpecial[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;
       
        // user wants upper case and numbers
      } else if (lowerCaseBoolean == false && upperCaseBoolean===true && numbersBoolean === true && specialCharsBoolean === false) {
        alert("You want upper case letters and numbers in your password");
        var upperAndNumbers = (upperCaseLetters + numbersValues);
        upperAndNumbers = upperAndNumbers.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * upperAndNumbers.length);
        computerChoice.push(upperAndNumbers[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
        //user wants upper and special characters
      } else if (lowerCaseBoolean == false && upperCaseBoolean===true && numbersBoolean === false && specialCharsBoolean === true) {
        alert("You want upper case letters and special characters in your password");
        var upperAndSpecial = (upperCaseLetters + specialChars);
        upperAndSpecial = upperAndSpecial.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * upperAndSpecial.length);
        computerChoice.push(upperAndSpecial[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
        // user wants numbers and special characters
      } else if (lowerCaseBoolean == false && upperCaseBoolean===false && numbersBoolean === true && specialCharsBoolean === true) {
        alert("You want numbers and special characters in your password");
        var numbersAndSpecial = (numbersValues + specialChars);
        numbersAndSpecial = numbersAndSpecial.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * numbersAndSpecial.length);
        computerChoice.push(numbersAndSpecial[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
        // user wants lower, upper and numbers
      } else if (lowerCaseBoolean == true && upperCaseBoolean===true && numbersBoolean === true && specialCharsBoolean === false) {
        alert("You want lower case, upper case and numbers in your password");
        var lowerUpperAndNumbers = (lowerCaseLetters + upperCaseLetters + numbersValues);
        lowerUpperAndNumbers = lowerUpperAndNumbers.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * lowerUpperAndNumbers.length);
        computerChoice.push(lowerUpperAndNumbers[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
        // user wants lower, upper and special characters
      } else if (lowerCaseBoolean == true && upperCaseBoolean===true && numbersBoolean === false && specialCharsBoolean === true) {
        alert("You want lower case, upper case and special in your password");
        var lowerUpperAndSpecial = (lowerCaseLetters + upperCaseLetters + specialChars);
        lowerUpperAndSpecial = lowerUpperAndSpecial.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * lowerUpperAndSpecial.length);
        computerChoice.push(lowerUpperAndSpecial[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
        // user wants upper, numbers and special
      } else if (lowerCaseBoolean == false && upperCaseBoolean===true && numbersBoolean === true && specialCharsBoolean === true) {
        alert("You want upper case, numbers and special in your password");
        var upperNumbersAndSpecial = (numbersValues + upperCaseLetters + specialChars);
        upperNumbersAndSpecial = upperNumbersAndSpecial.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * upperNumbersAndSpecial.length);
        computerChoice.push(upperNumbersAndSpecial[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      
      } else {
        alert("You want everthing in your password");
        var allChars = (lowerCaseLetters + numbersValues + upperCaseLetters + specialChars);
        allChars = allChars.replaceAll(",","");
        for (i=0; i < userLength; i++) {
        var index = Math.floor(Math.random() * allChars.length);
        computerChoice.push(allChars[index]);
        } 
        computerChoiceComplete = computerChoice.toString();
        computerChoiceComplete = computerChoiceComplete.replaceAll(",", "");
        console.log(computerChoiceComplete);
        return computerChoiceComplete;         
      }                                                                     
}

// function calls for the value of the generatePassword function above
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listner kicks everything off when the user clicks the generate button
generateBtn.addEventListener("click", writePassword);
