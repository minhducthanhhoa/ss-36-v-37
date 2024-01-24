var resultElement = document.getElementById("result");
var clearButton = document.getElementById("clear");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");
var subtractButton = document.getElementById("subtract");
var addButton = document.getElementById("add");
var equalButton = document.getElementById("equal");

var numberButtons = document.querySelectorAll(".keypad button[id^='\\d']");

clearButton.addEventListener("click", function() {
  resultElement.value = "";
});

divideButton.addEventListener("click", function() {
  resultElement.value += "/";
});

multiplyButton.addEventListener("click", function() {
  resultElement.value += "*";
});

subtractButton.addEventListener("click", function() {
  resultElement.value += "-";
});

addButton.addEventListener("click", function() {
  resultElement.value += "+";
});

equalButton.addEventListener("click", function() {
  try {
    var result = eval(resultElement.value);
    resultElement.value = result;
  } catch (error) {
    resultElement.value = "Error";
  }
});

numberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    resultElement.value += button.textContent;
  });
});