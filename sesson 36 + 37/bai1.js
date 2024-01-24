// Lấy tham chiếu đến các phần tử trong DOM
var answerInput = document.getElementById("answerInput");
var answerButton = document.getElementById("answerButton");
var messageDiv = document.getElementById("message");

// Gắn sự kiện input vào ô input
answerInput.addEventListener("input", function() {
  var answer = answerInput.value; // Lấy giá trị từ ô input

  if (answer.length > 10) {
    answerButton.disabled = true; // Vô hiệu hóa nút Answer
    messageDiv.textContent = "Câu trả lời không hợp lệ!";
    messageDiv.style.color = "red";
  } else {
    answerButton.disabled = false; // Kích hoạt nút Answer
    messageDiv.textContent = "Câu trả lời thành công!";
    messageDiv.style.color = "green";
  }
});