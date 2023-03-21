document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const input = document.getElementById("inputText");

  input.addEventListener("input", (e) => {
    result.textContent = e.target.value;
  });

  const buttons = document.querySelectorAll("[data-style]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      result.classList.toggle(button.dataset.style);
    });
  });
});
