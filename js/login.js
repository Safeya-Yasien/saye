document.addEventListener("DOMContentLoaded", function () {
  // Select the form and add a submit event listener
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Get the email and password inputs
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Basic validation for email and password fields
    if (validateEmail(email) && validatePassword(password)) {
      alert("تم تسجيل الدخول بنجاح!");
      // You can now proceed with form submission, API call, or redirect
      // form.submit();
    } else {
      alert("يرجى إدخال البريد الإلكتروني وكلمة المرور بشكل صحيح.");
    }
  });

  // Email validation function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  // Password validation function (example: check if it's at least 6 characters)
  function validatePassword(password) {
    return password.length >= 6;
  }
});
