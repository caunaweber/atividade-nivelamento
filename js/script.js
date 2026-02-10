
const form = document.getElementById("loginForm");

const USER_EMAIL = "admin@site.com";
const USER_PASSWORD = "123";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.classList.add("d-none");
    errorMessage.textContent = "";

    if (email === "" || password === "") {
        errorMessage.textContent = "Preencha todos os campos.";
        errorMessage.classList.remove("d-none");
        return;
    }

    if (email === USER_EMAIL && password === USER_PASSWORD) {
        window.location.href = "fake-news.html";
    } else {
        errorMessage.textContent = "E-mail ou senha inválidos.";
        errorMessage.classList.remove("d-none");
    }
});
