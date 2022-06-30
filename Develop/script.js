// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var characterArr = [];
var specialCharacterArr = ["!", "@", "#", "%", "&", "*", "^", "+", "?", "<", ">"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  getPrompts();
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
        var randomPassword = generatePassword();

        passwordText.value = randomPassword;
    } 
  else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomLetter = Math.floor(Math.random() * characterArr.length);
        password = password + characterArr[randomLetter];
    }
    return password;
}


function getPrompts(){
  characterArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? 8 to 128 chaarcters"))


if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Must be between 8 and 128 characters.");
  return false;
}

if (confirm("Would you like lowercase letters?")) {
  characterArr = characterArr.concat(lowerCaseArr)
}

if (confirm("Would you like uppercase letters?")) {
  characterArr = characterArr.concat(upperCaseArr);
}

if (confirm("Would you like special characters?")) {
  characterArr = characterArr.concat(specialCharacterArr);
}

if (confirm("Would you like numbers?")) {
  characterArr = characterArr.concat(numberArr)
}
return true;

}