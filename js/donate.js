// Toggle active class for donation frequency buttons
const onceBtn = document.getElementById("onceBtn");
const monthlyBtn = document.getElementById("monthlyBtn");
const donationForm = document.getElementById("donationForm");

onceBtn.addEventListener("click", function () {
  onceBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});

monthlyBtn.addEventListener("click", function () {
  monthlyBtn.classList.add("active");
  onceBtn.classList.remove("active");
});

// Update donation amount based on selected radio button or custom input
const donationAmountRadios =
  document.querySelectorAll(".donation-amount");
const amountInput = document.getElementById("amountInput");

donationAmountRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      amountInput.value = radio.value;
    }
  });
});

// Form validation and submission
donationForm.addEventListener("submit", function (event) {
  // Prevent form submission if inputs are invalid
  if (!donationForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  donationForm.classList.add("was-validated");
});

// Real-time validation for phone and email
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

emailInput.addEventListener("input", function () {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity("يرجى إدخال بريد إلكتروني صحيح.");
  } else {
    emailInput.setCustomValidity("");
  }
});

phoneInput.addEventListener("input", function () {
  if (!/^\d+$/.test(phoneInput.value)) {
    phoneInput.setCustomValidity("يرجى إدخال رقم هاتف صحيح.");
  } else {
    phoneInput.setCustomValidity("");
  }
});
const companies = [];
const companySelect = document.getElementById('company');

companies.forEach(company => {
    const option = document.createElement('option');
    option.value = company.toLowerCase().replace(/\s+/g, '-');
    option.textContent = company;
    companySelect.appendChild(option);
});
