// Lấy tham chiếu đến các phần tử trong DOM
var textInput = document.getElementById("textInput");
var buttonMethod1 = document.getElementById("buttonMethod1");
var buttonMethod2 = document.getElementById("buttonMethod2");
var outputDiv = document.getElementById("outputDiv");

// Cách 1: Sử dụng sự kiện click trên nút Cách 1
buttonMethod1.addEventListener("click", function() {
  var inputText = textInput.value; // Lấy giá trị từ ô input
  outputDiv.textContent = inputText; // Hiển thị nội dung trong thẻ div
});

// Cách 2: Sử dụng sự kiện input trên ô input
textInput.addEventListener("input", function() {
  var inputText = textInput.value; // Lấy giá trị từ ô input
  outputDiv.textContent = inputText; // Hiển thị nội dung trong thẻ div
});