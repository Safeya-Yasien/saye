const faqItems = document.querySelectorAll('.faq-item');
    const faqContainer = document.getElementById('faqContainer');

    let draggedItem = null;

    faqItems.forEach(item => {
        item.addEventListener('dragstart', function () {
            draggedItem = item;
            setTimeout(() => {
                item.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', function () {
            setTimeout(() => {
                draggedItem = null;
                item.classList.remove('dragging');
            }, 0);
        });

        faqContainer.addEventListener('dragover', function (e) {
            e.preventDefault();
            const afterElement = getDragAfterElement(faqContainer, e.clientY);
            if (afterElement == null) {
                faqContainer.appendChild(draggedItem);
            } else {
                faqContainer.insertBefore(draggedItem, afterElement);
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.faq-item:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }