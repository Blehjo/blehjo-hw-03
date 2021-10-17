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

//Character bank that will hold the necessary tools when prompted
var charBank = "";

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
  if (passCharLow === true); {
    charBank.concat(lowerArr);
  }
  var passCharUp = confirm("Do you want uppercase to be included");
  if (passCharUp === true); {
    charBank.concat(upperArr);
  }
  var passCharNum = confirm("Do you want numbers to be included");
  if (passCharNum === true); {
    charBank.concat(numArr);
  }
  var passCharSpec = confirm("Do you want special characters to be included");
  if (passCharSpec === true); {
    charBank.concat(specArr);
  }
  //We want to create an object that contains our variables to return the object, so we expect it when we call user input.
  var passBank = {
    passLength: passLength,
    passCharLow: passCharLow,
    passCharUp: passCharUp,
    passCharNum: passCharNum,
    passCharSpec: passCharSpec,
  }; 
  return passBank;
}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  var passInput = userInput(); 
  console.log(passInput);
}



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password




// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
//When the button is clicked
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);