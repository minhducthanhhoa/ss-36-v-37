var studentForm = document.getElementById("studentForm");
var studentInfo = document.getElementById("studentInfo");

studentForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form submit

  var studentId = document.getElementById("studentId").value;
  var studentName = document.getElementById("studentName").value;
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var isValid = true;
  var errorMessage = "";

  // Kiểm tra điều kiện

  if (studentId.length !== 6) {
    isValid = false;
    errorMessage += "Độ dài của Student ID phải là 6 ký tự.\n";
  }

  if (studentName.trim() === "") {
    isValid = false;
    errorMessage += "Student Name không được để trống.\n";
  }

  if (age < 18) {
    isValid = false;
    errorMessage += "Age phải lớn hơn hoặc bằng 18.\n";
  }

  var phoneRegex = /^0[0-9]{9}$/;
  if (!phoneRegex.test(phone)) {
    isValid = false;
    errorMessage += "Phone phải có định dạng số điện thoại ở Việt Nam (bắt đầu bằng số 0 và có 10 chữ số).\n";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    errorMessage += "Email phải có định dạng email hợp lệ.\n";
  }

  if (isValid) {
    var studentInfoText =
      "Student ID: " + studentId + "<br>" +
      "Student Name: " + studentName + "<br>" +
      "Age: " + age + "<br>" +
      "Phone: " + phone + "<br>" +
      "Email: " + email;

    studentInfo.innerHTML = studentInfoText;
  } else {
    alert(errorMessage);
  }
});