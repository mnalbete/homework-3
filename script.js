
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  var passwordLength = NaN;

 
  while (
   
    (passwordLength !== null) &&
   
    ((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128))) {

    
    passwordLength = prompt("Please enter the desired length of your password (8-128 characters).", "8");

    
    if (passwordLength !== null) {
      passwordLength = parseInt(passwordLength);
    }

   
    if (((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128))
      && (passwordLength !== null)) {
      alert('Oops! Please enter a number from 8-128 or click "cancel" to exit.')
    }

  }

 
  if (passwordLength === null) {
    return "Your Secure Password";
  }

 
  var requiresLowercase = false;
  var requiresUppercase = false;
  var requiresNumbers = false;
  var requiresSpecialCharacters = false;

  while ((requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters) == 0) {

    requiresLowercase = confirm("Would you like your password to contain: lowercase? (ex. a, b, c etc.)");

    requiresUppercase = confirm("Would you like your password to contain: uppercase? (ex. A, B, C etc.)");

    requiresNumbers = confirm("Would you like your password to contain: numbers? (ex. 1, 2, 3 etc.)");

    requiresSpecialCharacters = confirm("Would you like your password to contain: special characters? (ex. #, @, % etc.)");

    if ((requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters) == 0) {
      alert("Oops! You must select at least one character criteria.")
    }

  }

 
  if (requiresLowercase) {
    lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  if (requiresUppercase) {
    uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  if (requiresNumbers) {
    numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  if (requiresSpecialCharacters) {
    specialCharacterArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  }

 
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumbers = false;
  var hasSpecialCharacters = false;
  var passwordString = "";


  while (passwordString.length < passwordLength) {
    charChoice = Math.ceil(Math.random() * 4);

    if ((charChoice == 1) && requiresLowercase) {
      var randLowercase = Math.floor(lowercaseArray.length * Math.random());
      passwordString += lowercaseArray[randLowercase];
      hasLowercase = true;

    } else if ((charChoice == 2) && requiresUppercase) {
      var randUppercase = Math.floor(uppercaseArray.length * Math.random());
      passwordString += uppercaseArray[randUppercase];
      hasUppercase = true;

    } else if ((charChoice == 3) && requiresNumbers) {
      var randNumber = Math.floor(numberArray.length * Math.random());
      passwordString += numberArray[randNumber];
      hasNumbers = true;

    } else if ((charChoice == 4) && requiresSpecialCharacters) {
      var randSpecialCharacter = Math.floor(specialCharacterArray.length * Math.random());
      passwordString += specialCharacterArray[randSpecialCharacter];
      hasSpecialCharacters = true;

    }

   
    charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;
    if (charTypeCount >= (passwordLength - passwordString.length)) {

      if ((hasLowercase) && (charTypeCount > 1)) {
        requiresLowercase = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;

      }
      if ((hasUppercase) && (charTypeCount > 1)) {
        requiresUppercase = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;

      }
      if ((hasNumbers) && (charTypeCount > 1)) {
        requiresNumbers = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;

      }
      if ((hasSpecialCharacters) && (charTypeCount > 1)) {
        requiresSpecialCharacters = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;

      }
    }

  }
  return passwordString;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
