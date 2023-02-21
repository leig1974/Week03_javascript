// Assignment Code
var generateBtn = document.querySelector("#generate");

// used variables- to add all lefters of alphabet
var uppercase = ["A", "B", "C", "D", "E" ]
var lowercase = ["a", "s", "d", "f", "e" ]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
let finalArr = []
let password = ''
  let passwordLength = prompt ("Enter the length of the password?");
  if (passwordLength < 8 || passwordLength > 128){
    alert("enter valid Password Length")
    generatePassword ()
  }
  let lowercaseconfirm = confirm ("Do you want lowercase characters?");
  if (lowercaseconfirm === true) {
    finalArr = finalArr.concat(lowercase)
  }
  let uppercaseconfirm = confirm("Do you want uppercase characters?");
  if (uppercaseconfirm === true) {
    finalArr = finalArr.concat(uppercase)
  }
  let numbersconfirm = confirm("Do you want numbers?");
  if (numbersconfirm === true) {
    finalArr = finalArr.concat(numbers)
  }
  let symbolsconfirm = confirm ("Do you want symbols?");
  if (symbolsconfirm === true) {
    finalArr = finalArr.concat(symbols)
  }
  for (let i = 0; i < passwordLength; i++){
    let index = Math.floor(Math.random() * finalArr.length)
password = password + finalArr [index]
  }
  console.log(password)
  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));