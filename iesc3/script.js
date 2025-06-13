function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao carregar conteúdo:", error);
            document.getElementById("content").innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        });
}
