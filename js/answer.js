//  const answersToggle = document.querySelector('.answers-toggle');
//   const answersSvg = document.querySelector('.answers-svg');
//   const answersText = document.querySelector('.answers-text');

//   answersToggle.addEventListener('click', function() {
//     const isHidden = answersText.style.display === 'none';

//     answersText.style.display = isHidden ? 'block' : 'none';
//     answersSvg.innerHTML = isHidden ?
//       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
//         <path d="M9 0.5V16.5" stroke="#E1016E" stroke-linecap="round"/>
//         <path d="M17 8.5L0.999999 8.5" stroke="#E1016E" stroke-linecap="round"/>
//       </svg>
//      :
//       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <path d="M24 16L8 16" stroke="#E1016E" stroke-linecap="round"/>
//       </svg>
//     ;
//   });

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