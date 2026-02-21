const toggle = document.querySelector(".theme-toggle");
const toggleText = toggle.querySelector(".toggle-text"); // Target the span inside

const updateButtonText = (theme) => {
  
  toggleText.textContent = theme === "dark" ? "Light" : "Dark";
};


const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.dataset.theme = savedTheme;
updateButtonText(savedTheme);


toggle.addEventListener("click", () => {
  const current = 
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = current;
  localStorage.setItem("theme", current);
  

  updateButtonText(current);
});