function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");
});
