 const accordeonTitles = document.querySelectorAll('.accordeon-title');

  accordeonTitles.forEach(title => {
    title.addEventListener('click', () => {
      const accordionText = title.nextElementSibling;
      // const icon = title.querySelector('div:last-child');

      accordionText.classList.toggle('active');
      icon.textContent = accordionText.classList.contains('active') ? '-' : '+';
    });
  });
