const elementoHtml = document.documentElement;
const botaoTema = document.getElementById('alternar-tema');
const anoAtual = document.getElementById('ano-atual');

function aplicarTema(tema) {
    elementoHtml.setAttribute('data-bs-theme', tema);
    botaoTema.textContent = tema === 'light' ? 'Tema escuro' : 'Tema claro';
}

// O tema continua funcionando mesmo quando o navegador bloqueia o armazenamento.
let temaSalvo = null;
try {
    temaSalvo = localStorage.getItem('tema');
} catch {
    temaSalvo = null;
}

aplicarTema(temaSalvo === 'dark' ? 'dark' : 'light');

botaoTema.addEventListener('click', () => {
    const temaAtual = elementoHtml.getAttribute('data-bs-theme');
    const novoTema = temaAtual === 'light' ? 'dark' : 'light';

    aplicarTema(novoTema);

    try {
        localStorage.setItem('tema', novoTema);
    } catch {
        // Mantém o tema escolhido nesta página, mesmo sem persistência.
    }
});

anoAtual.textContent = new Date().getFullYear();
