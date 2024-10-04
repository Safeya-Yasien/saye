document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      
      // Toggle between showing and hiding the active panel
      if (answer.classList.contains('collapse')) {
        answer.classList.remove('collapse');
      } else {
        // Hide all other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
          item.classList.add('collapse');
        });
        answer.classList.remove('collapse');
      }
    });
  });
  