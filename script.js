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

const number = "1234567890"
const specialChar = "!#$%&*"
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const passwordLength = ''

function generatePassword() {
  var finalPassword = "";
  var characters "";

  var passwordLength = window.prompt(
    "Please choose between a password between 8 and 128 characters");
    if (passwordLength < 8 || passwordLength > 128)
    window.prompt ("Please choose between 8 and 128 characters")

    for (let i = 0; i < passwordLength; i++) {
      console.log();
    }
}

