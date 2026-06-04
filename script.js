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
    formattedNumber || "0000 0000 0000 0000"; // return back this if the formattednumber is false
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

  // Keep only numbers
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") {
      yearOnly += value[i];
    }
  }

  // Limit to 2 digits
  yearOnly = yearOnly.slice(0, 2);

  expYear.value = yearOnly;

  updateExpiryDisplay();
});

// Update card display
function updateExpiryDisplay() {
  const month = expMonth.value || "00";
  const year = expYear.value || "00";

  cardExpDisplay.textContent = `${month}/${year}`;
}
const cvc = document.getElementById("cvc");
const cardCvcDisplay = document.getElementById("card-cvc-display");

cvc.addEventListener("input", () => {
  let value = cvc.value;

  let cvcOnly = "";

  // Keep only numbers
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") {
      cvcOnly += value[i];
    }
  }

  // Limit to 3 digits
  cvcOnly = cvcOnly.slice(0, 3);

  cvc.value = cvcOnly;

  // Update card display
  cardCvcDisplay.textContent = cvcOnly || "000";
});
const form = document.getElementById("card-form");
const formState = document.getElementById("form-state");
const completeState = document.getElementById("complete-state");

const errorName = document.getElementById("error-name");
const errorNumber = document.getElementById("error-number");
const errorExp = document.getElementById("error-exp");
const errorCvc = document.getElementById("error-cvc");

form.addEventListener("submit", (e) => {
  // Prevent page refresh
  e.preventDefault();

  let isFormValid = true;

  // Clear previous errors
  errorName.textContent = "";
  errorNumber.textContent = "";
  errorExp.textContent = "";
  errorCvc.textContent = "";

  errorName.classList.add("hidden");
  errorNumber.classList.add("hidden");
  errorExp.classList.add("hidden");
  errorCvc.classList.add("hidden");

  // NAME
  if (cardHolderName.value.trim() === "") {
    errorName.textContent = "Can't be blank";
    errorName.classList.remove("hidden");
    isFormValid = false;
  }

  // CARD NUMBER
  if (cardNumber.value.trim().length < 19) {
    errorNumber.textContent = "Enter a valid card number";
    errorNumber.classList.remove("hidden");
    isFormValid = false;
  }

  // EXPIRY
 const currentYear = 26;

if (
  expMonth.value.trim() === "" ||
  expYear.value.trim() === ""
) {
  errorExp.textContent = "Can't be blank";
  errorExp.classList.remove("hidden");
  isFormValid = false;
} else if (Number(expYear.value) <= currentYear) {
  errorExp.textContent = "Year must be greater than 26";
  errorExp.classList.remove("hidden");
  isFormValid = false;
}

  // CVC
  if (cvc.value.length !== 3) {
    errorCvc.textContent = "Enter a valid CVC";
    errorCvc.classList.remove("hidden");
    isFormValid = false;
  }

  // SUCCESS
  if (isFormValid) {
    formState.classList.add("hidden");
    completeState.classList.remove("hidden");
  }
});
const continueBtn = document.getElementById("continue-btn");

continueBtn.addEventListener("click", () => {
  form.reset();

  formState.classList.remove("hidden");
  completeState.classList.add("hidden");

  cardNumberDisplay.textContent = "0000 0000 0000 0000";
  cardNameDisplay.textContent = "JANE APPLESEED";
  cardExpDisplay.textContent = "00/00";
  cardCvcDisplay.textContent = "000";
});