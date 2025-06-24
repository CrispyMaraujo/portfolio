const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

// Checa se o tema está salvo no localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Ao clicar no botão, troca o tema
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
// Atualiza o texto do botão
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }

  // Salva no localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Função para verificar o tema atual e aplicar o estilo correspondente
function applyTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}