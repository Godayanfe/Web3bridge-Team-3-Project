const cardHolderName = document.getElementById("cardholder-name");
const cardNameDisplay = document.getElementById("card-name-display");

cardHolderName.addEventListener("input", () => {
  cardNameDisplay.textContent =
    cardHolderName.value || "JANE APPLESEED";
});

const cardNumber = document.getElementById("card-number");
const cardNumberDisplay = document.getElementById("card-number-display");

cardNumber.addEventListener("input", () => {
  let value = cardNumber.value;
  let numbersOnly = "";
  let formattedNumber = "";

  // Keep only numbers
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") {
      numbersOnly += value[i];
    }
  }
// numbersOnly = 12348667777888865567
  // Maximum 16 digits
  numbersOnly = numbersOnly.slice(0, 16); //1234567891234567 length - 16 while our index stop at 15

  // Add spaces after every 4 digits
  for (let i = 0; i < numbersOnly.length; i++) {  
    formattedNumber += numbersOnly[i]; // stop all index from 0 to index 15 into the variable formattedNumber

    if ((i + 1) % 4 === 0 && i !== numbersOnly.length - 1) { // for and condition all statement must true to produce true
      formattedNumber += " ";   // 4/4 = 1 rem 0 then after typing the element that falls undex index 3 include a space after
    }                            //1234 
  }

  cardNumber.value = formattedNumber;
  cardNumberDisplay.textContent =
    formattedNumber || "0000 0000 0000 0000";
});

const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const cardExpDisplay = document.getElementById("card-exp-display");

// Month input
expMonth.addEventListener("input", () => {
  let value = expMonth.value; // value here refer to the value we input in the exp month input box
//// value = 1234asht234
  // Keep only numbers
  let monthOnly = ""; 
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") {
      monthOnly += value[i]; //1234234
    }
  }

  // Limit to 2 digits
  monthOnly = monthOnly.slice(0, 2);

  // Maximum month is 12
  if (Number(monthOnly) > 12) {
    monthOnly = "12";
  }

  expMonth.value = monthOnly;

  updateExpiryDisplay();
});
// Year input
expYear.addEventListener("input", () => {
  let value = expYear.value;

  let yearOnly = "";
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") {
      yearOnly += value[i];
    }
  }
yearOnly.value = yearOnly.slice(0, 2);

  // if (Number(yearOnly) <= 26) {
  //   yearOnly = "27";
  // }
  const currentYear = 26; // 2026

if (Number(expYear.value) < currentYear) {
  alert("Year cannot be less than 26");
}
   expYear.value = yearOnly

  updateExpiryDisplay();
});

// Update card display
function updateExpiryDisplay() {
  const month = expMonth.value || "00";
  const year = expYear.value || "00";

  cardExpDisplay.textContent = `${month}/${year}`;
}