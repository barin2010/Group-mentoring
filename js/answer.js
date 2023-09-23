// Отримуємо список усіх SVG-елементів
const svgs = document.querySelectorAll(".answers-svg");

// Додаємо обробник події для кожного SVG
svgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    // Знаходимо батьківський елемент li, який містить SVG
    const listItem = svg.closest(".answers-item");

    // Знаходимо answers-content для цього елемента li
    const content = listItem.querySelector(".answers-content");

    // Змінюємо стиль answers-content на "display: block" або "display: none"
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      svg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M24 16L8 16" stroke="#E1016E" stroke-linecap="round"/>
        </svg>`;
    } else {
      content.style.display = "none";
      svg.innerHTML = `
        <svg
          class="answers-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
        >
          <path
            d="M9 0.5V16.5"
            stroke="#E1016E"
            stroke-linecap="round"
          />
          <path
            d="M17 8.5L0.999999 8.5"
            stroke="#E1016E"
            stroke-linecap="round"
          />
        </svg>`;
    }
  });
});
