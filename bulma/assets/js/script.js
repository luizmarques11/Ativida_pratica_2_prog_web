const elementoHtml = document.documentElement;
const botaoTema = document.getElementById('alternar-tema');
const botaoMenu = document.getElementById('menu-burger');
const menu = document.getElementById('menu-principal');
const anoAtual = document.getElementById('ano-atual');

function aplicarTema(tema) {
    elementoHtml.setAttribute('data-theme', tema);
    botaoTema.textContent = tema === 'light' ? 'Tema escuro' : 'Tema claro';
}

function definirMenuAberto(aberto) {
    botaoMenu.classList.toggle('is-active', aberto);
    menu.classList.toggle('is-active', aberto);
    botaoMenu.setAttribute('aria-expanded', String(aberto));
}

let temaSalvo = null;
try {
    temaSalvo = localStorage.getItem('tema');
} catch {
    temaSalvo = null;
}

aplicarTema(temaSalvo === 'dark' ? 'dark' : 'light');

botaoTema.addEventListener('click', () => {
    const novoTema = elementoHtml.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    aplicarTema(novoTema);

    try {
        localStorage.setItem('tema', novoTema);
    } catch {
        // A escolha continua ativa nesta página mesmo sem armazenamento.
    }
});

botaoMenu.addEventListener('click', () => {
    definirMenuAberto(!menu.classList.contains('is-active'));
});

menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => definirMenuAberto(false));
});

anoAtual.textContent = new Date().getFullYear();
