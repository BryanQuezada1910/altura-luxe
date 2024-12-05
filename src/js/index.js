// Detectar tema del sistema
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const themeSwitcher = document.getElementById("themeSwitcher");

// Función para aplicar el tema
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    // Detectar automáticamente
    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", "system");
  }
}

const savedTheme = localStorage.getItem("theme") || "system";
themeSwitcher.value = savedTheme;
applyTheme(savedTheme);

themeSwitcher.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (localStorage.getItem("theme") === "system") {
      applyTheme("system");
    }
  });


// Menú
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
