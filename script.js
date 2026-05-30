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

  // Maximum 16 digits
  numbersOnly = numbersOnly.slice(0, 16);

  // Add spaces after every 4 digits
  for (let i = 0; i < numbersOnly.length; i++) {
    formattedNumber += numbersOnly[i];

    if ((i + 1) % 4 === 0 && i !== numbersOnly.length - 1) {
      formattedNumber += " ";
    }
  }

  cardNumber.value = formattedNumber;
  cardNumberDisplay.textContent =
    formattedNumber || "0000 0000 0000 0000";
});