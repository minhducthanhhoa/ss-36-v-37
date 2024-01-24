// Lấy tham chiếu đến các phần tử trong DOM
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var buttonMethod1 = document.getElementById("buttonMethod1");
var buttonMethod2 = document.getElementById("buttonMethod2");
var outputInput = document.getElementById("outputInput");

// Cách 1: Sử dụng sự kiện click trên nút Cách 1
buttonMethod1.addEventListener("click", function() {
  var value1 = parseFloat(input1.value); // Lấy giá trị từ ô input 1
  var value2 = parseFloat(input2.value); // Lấy giá trị từ ô input 2
  var sum = value1 + value2; // Tính tổng
  outputInput.value = sum; // Hiển thị tổng trong ô input kết quả
});

// Cách 2: Sử dụng sự kiện input trên cả hai ô input 1 và 2
input1.addEventListener("input", calculateSum);
input2.addEventListener("input", calculateSum);

function calculateSum() {
  var value1 = parseFloat(input1.value); // Lấy giá trị từ ô input 1
  var value2 = parseFloat(input2.value); // Lấy giá trị từ ô input 2
  var sum = value1 + value2; // Tính tổng
  outputInput.value = sum; // Hiển thị tổng trong ô input kết quả
}