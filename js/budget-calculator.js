function getInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerAmount = getInputFieldValue("per-player-amount");
  const NewPerPlayerExpences = perPlayerAmount * 5;
  const previousPerPlayerExpences = document.getElementById("expences");
  previousPerPlayerExpences.innerText = NewPerPlayerExpences;
});

document.getElementById("total").addEventListener("click", function () {
  const coach = getInputFieldValue("coach");
  const manager = getInputFieldValue("manager");
  const perPlayerExpencesString = document.getElementById("expences").innerText;
  const perPlayerExpences = parseFloat(perPlayerExpencesString);
  const NewTotalAmount = perPlayerExpences + coach + manager;
  const previousTotalAmount = document.getElementById("total-amount");
  previousTotalAmount.innerText = NewTotalAmount;
});
