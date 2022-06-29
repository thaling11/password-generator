// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var characterLength = 8;
var characterArr = [];
var specialCharacterArr = ["!", "@", "#", "%", "&", "*", "^", "+", "?", "<", ">"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {


}

function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to be? 8 to 128 chaarcters"))
}
