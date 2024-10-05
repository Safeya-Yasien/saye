
AOS.init();

// ModalDetails
const modal = document.getElementById("modal-det");
const modalText = document.getElementById("modal-text-det");
function openModal(cardId) {
  if (cardId === 1) {
    modalText.innerHTML = `
            <strong>حملة التبرع بالدم </strong><br><br>
            <ul>
              <li>التاريخ: الجمعة 25 أكتوبر 2024</li>
              <li>المكان: مركز التبرع بالدم، القاهرة</li>
              <li>الهدف: جمع 200 كيس دم لدعم مرضى السرطان والحالات الطارئة</li>
            </ul>
            <p>"ساهم في إنقاذ الأرواح من خلال تبرعك بالدم. كل كيس دم يمكن أن ينقذ حياة شخص محتاج"</p>
          `;
  } else if (cardId === 2) {
    modalText.innerHTML = `
            <strong>حملة تشجير </strong><br><br>
            <ul>
              <li>التاريخ: حتى نهاية نوفمبر 2024</li>
              <li>المكان: مختلف أنحاء الجيزة</li>
              <li>الهدف: زراعة 500 شجرة للحفاظ على البيئة</li>
            </ul>
            <p>"التطوع مفتوح للجميع! انضم إلينا وساهم في جعل البيئة أكثر خضارًا وجمالاً"</p>
          `;
  } else if (cardId === 3) {
    modalText.innerHTML = `
            <strong>مشروع محو الأمية</strong><br><br>
            <ul>
              <li>التاريخ: كل يوم جمعة</li>
              <li>المكان: مراكز تعليم الكبار في القاهرة</li>
              <li>الهدف: تمكين الكبار من القراءة والكتابة من خلال جلسات تعليمية فردية وجماعية</li>
            </ul>
            <p>"ساعد في تمكين الأشخاص من اكتساب مهارات القراءة والكتابة والمساهمة في تحسين حياتهم"</p>
          `;
  }

  modal.style.display = "flex";
}

// RegistrationModal
const registrationModal = document.getElementById("registrationModal");
const registrationForm = document.getElementById("registrationForm");
function openRegistrationModal() {
  modal.style.display = "none";
  registrationModal.style.display = "flex";
}

function closeRegistrationModal() {
  registrationModal.style.display = "none";
}

registrationForm.onsubmit = function (event) {
  event.preventDefault();
  closeRegistrationModal();
  openSuccessModal();
};

// SuccessModal
const successModal = document.getElementById("successModal");

function openSuccessModal() {
  successModal.style.display = "flex";
}

function closeSuccessModal() {
  successModal.style.display = "none";
}

// Closing
function closeModal() {
  modal.style.display = "none";
  successModal.style.display = "none";
  registrationModal.style.display = "none";
}
window.onclick = function (event) {
  if (
    event.target === modal ||
    event.target === registrationModal ||
    event.target === successModal
  ) {
    closeModal();
  }
};
