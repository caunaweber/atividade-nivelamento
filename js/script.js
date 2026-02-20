const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (event) {
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

    try {
        const response = await fetch("data/users.json");
        const data = await response.json();

        const userFound = data.users.find(
            user => user.email === email && user.password === password
        );

        if (userFound) {
            window.location.href = "fake-news.html";
        } else {
            errorMessage.textContent = "E-mail ou senha inválidos.";
            errorMessage.classList.remove("d-none");
        }

    } catch (error) {
        errorMessage.textContent = "Erro ao validar login.";
        errorMessage.classList.remove("d-none");
        console.error(error);
    }
});