// Lấy tham chiếu đến phần tử button
var myButton = document.getElementById("myButton");

// Gán sự kiện click vào button
myButton.addEventListener("click", function() {
  if (myButton.textContent === "OFF") {
    myButton.textContent = "ON";
  } else {
    myButton.textContent = "OFF";
  }
});