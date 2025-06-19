// 🔥 Função para alternar a visibilidade da sidebar (menu lateral)
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    // 🔍 Seleciona o elemento com a classe 'sidebar'

    sidebar.classList.toggle('hidden');
    // 🔥 Adiciona ou remove a classe 'hidden'
    // Se 'hidden' está presente → oculta o menu
    // Se 'hidden' não está presente → mostra o menu
}

// 🔥 Função para carregar conteúdo dinâmico na área <main> usando fetch
function loadContent(page) {
    fetch(page) // 🔍 Faz uma requisição HTTP para o arquivo (ex.: 'topico1.html')
        .then(response => {
            if (!response.ok) {
                // 🚩 Se a resposta não for OK (erro 404, etc.)
                throw new Error('Página não encontrada');
            }
            return response.text(); // 🔥 Converte o conteúdo da resposta em texto
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            // 🔥 Insere o conteúdo carregado dentro da div <main id="content">
        })
        .catch(error => {
            // ⚠️ Trata erros na requisição (arquivo não encontrado, erro de rede, etc.)
            document.getElementById('content').innerHTML = "<p>Erro ao carregar a página.</p>";
            console.error(error); // 🔍 Mostra o erro no console para depuração
        });
}
