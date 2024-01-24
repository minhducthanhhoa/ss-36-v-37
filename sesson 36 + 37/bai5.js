// Lấy tham chiếu đến các phần tử trong DOM
var textInput = document.getElementById("textInput");
var addButton = document.getElementById("addButton");
var itemList = document.getElementById("itemList");

// Sự kiện input trên ô input
textInput.addEventListener("input", function() {
  if (textInput.value) {
    textInput.classList.remove("yellow-input"); // Xóa class "yellow-input"
    textInput.style.backgroundColor = "white"; // Đặt màu nền thành trắng
  } else {
    textInput.classList.add("yellow-input"); // Thêm class "yellow-input"
    textInput.style.backgroundColor = "yellow"; // Đặt màu nền thành màu vàng
  }
});

// Sự kiện click trên nút "Add"
addButton.addEventListener("click", function() {
  var inputValue = textInput.value; // Lấy giá trị từ ô input
  if (inputValue) {
    var listItem = document.createElement("li"); // Tạo phần tử <li>
    listItem.textContent = inputValue; // Đặt nội dung của <li>
    itemList.appendChild(listItem); // Thêm <li> vào danh sách
    textInput.value = ""; // Xóa nội dung trong ô input
    textInput.classList.add("yellow-input"); // Thêm class "yellow-input"
    textInput.style.backgroundColor = "yellow"; // Đặt màu nền thành màu vàng
  }
});g