/*------------------------ Cached Element References ------------------------*/
const inputBox = document.getElementById("input-box");
const outputText = document.getElementById("output-text");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");

/*----------------------------- Event Listeners -----------------------------*/

addButton.addEventListener("click", () => {
  currentValue += parseInt(inputBox.value);
  outputText.textContent = currentValue;
});

subtractButton.addEventListener("click", () => {
  currentValue -= parseInt(inputBox.value);
  outputText.textContent = currentValue;
});

let currentValue = parseInt(outputText.textContent);
