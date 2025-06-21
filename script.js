function loadContent(page) {
    const main = document.getElementById("content");
    main.innerHTML = "<p>Carregando...</p>"; // Exibe "Carregando..." enquanto busca o conteúdo

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar o conteúdo.");
            return response.text();
        })
        .then(data => {
            main.innerHTML = data; // Insere o conteúdo carregado no <main>
        })
        .catch(error => {
            console.error("Erro ao carregar o conteúdo:", error);
            main.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
        });
}

// Função para carregar data da ultima atualização do arquivo .html
document.getElementById("dataAtualizacao").innerText = 
    new Date(document.lastModified).toLocaleDateString('pt-BR');