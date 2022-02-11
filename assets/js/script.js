// Assignment Code
//When the button is clicked
var generateBtn = document.querySelector("#generate");

//Creating variables that contain the tools to create a strong password
var charLow = "a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z";
var charUp = "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-D-T-U-V-W-X-Y-Z"
var charNum = "0-1-2-3-4-5-6-7-8-9";
var charSpec = "~-!-@-#-$-%-^-&-*-_-+-=-|-[-:-'-;-?->-<-/-., ";

//Create arrays so that our charBank can add them to
var lowerArr = charLow.split("-");
var upperArr = charUp.split("-");
var numArr = charNum.split("-");
var specArr = charSpec.split("-");

var bank = "";
var charBank = bank.split("");
console.log(charBank);

//Function is putting together an array that will be used to decide what our password will be made of.  
//It also guides the user along, so no errors will be made.
function userInput() {
  var passLength = prompt("How many characters do you want your password to be?");
  if (passLength < 8) {
    alert("Your password isn't long enough.");
    return null;
  } else if (passLength > 128) {
    alert("Your password is too long.");
    return null;
  }
  var passCharLow = confirm("Do you want lowercase to be included");
  if (passCharLow === true) {
    var charBank = [].concat(lowerArr);
    console.log(charBank);
  }
  var passCharUp = confirm("Do you want uppercase to be included");
  if (passCharUp === true) {
    var charBank = charBank.concat(upperArr);
    console.log(charBank);
  }
  var passCharNum = confirm("Do you want numbers to be included");
  if (passCharNum === true) {
    var charBank = charBank.concat(numArr);
    console.log(charBank);
  }
  var passCharSpec = confirm("Do you want special characters to be included");
  if (passCharSpec === true) {
    var charBank = charBank.concat(specArr);
    console.log(charBank);
  //Creates an alert if not a single character type is chosen.
  } if (passCharLow === false && passCharUp === false && passCharNum === false && passCharSpec === false) {
    alert("You have to choose at least one of the options to continue.");
    return null;
  } 
  //We want to create an object that contains our variables to return the object, so we expect it when we call user input.
  var passBank = {
    passLength: passLength,
    passCharLow: passCharLow,
    passCharUp: passCharUp,
    passCharNum: passCharNum,
    passCharSpec: passCharSpec,
    charBank: charBank
  }; 

  var newCharBank = getRandom(passBank)
  console.log(passBank.passLength)
  console.log(passBank.charBank[0])
  return newCharBank
}
function getRandom(array) {
  var password = [];
  for (i = 0; i < array.passLength; i++) {
    var randomI = Math.floor(Math.random() * 100);
    var randomEl = array.charBank[randomI];
    password.push(randomEl)
  }
  console.log(array.charBank[randomI])
  console.log(password)
  return password.join('');
}



//Returns charBank array.  Contains the available options for a password based on the choices of the user.
function generatePassword() {
  var passInput = userInput(); 
  return passInput;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);