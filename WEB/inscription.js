const elementDate = document.getElementById("dateNaissance");

function validateDateOfBirth() {
  const elementValue = new Date(elementDate.value);
  const currentDate = new Date();

  if (elementValue >= currentDate) {
    alert("Please enter a correct date that is before today!");
  } else {
    alert("Thank you for typing the date correctly!");
  }
}