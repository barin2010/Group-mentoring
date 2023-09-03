// Найти все элементы аккордеона
const accordionItems = document.querySelectorAll('.accordion-item');

// Прикрепить обработчик клика к каждому элементу аккордеона
accordionItems.forEach((item) => {
  const collapse = item.querySelector('.accordeon-collapse');
  const accordionText = item.querySelector('.accordion-text');

  // При клике на "Подробнее"
  collapse.addEventListener('click', () => {
    if (accordionText.style.display === 'block') {
      // Если аккордеон уже открыт, закрыть его
      accordionText.style.display = 'none';
      collapse.querySelector('.accordeon-collapse-text').textContent = 'Подробнее';
      collapse.classList.remove('open');
    } else {
      // Если аккордеон закрыт, открыть его
      accordionText.style.display = 'block';
      collapse.querySelector('.accordeon-collapse-text').textContent = 'Закрыть';
      collapse.classList.add('open');
    }
  });
});