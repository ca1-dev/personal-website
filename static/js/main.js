const preferredTheme = localStorage.getItem("preferred-theme");
let html = document.querySelector("html");

if (preferredTheme === "dark") {
  html.dataset.theme = "dark";
} else if (preferredTheme === "light") {
  html.dataset.theme = "light";
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const html = document.querySelector("html");
    if (html.dataset.theme === "dark") {
      html.dataset.theme = "light";
      localStorage.setItem("preferred-theme", "light");
    } else {
      html.dataset.theme = "dark";
      localStorage.setItem("preferred-theme", "dark");
    }
  });
});
