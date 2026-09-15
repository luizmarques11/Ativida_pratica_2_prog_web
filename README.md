# Página pessoal

Página pessoal de Luiz Felipe de Souza Marques, desenvolvida em duas versões para comparar o uso dos frameworks CSS **Bootstrap** e **Bulma**. Ambas apresentam informações sobre formação, habilidades, projeto, interesses e formas de contato.

## Versões

| Versão | Arquivo principal | Framework |
| --- | --- | --- |
| Bootstrap | [`bootstrap/index.html`](bootstrap/index.html) | Bootstrap 5.3.3 |
| Bulma | [`bulma/index.html`](bulma/index.html) | Bulma 1.0.2 |

Cada versão possui seus próprios arquivos de CSS, JavaScript e imagem de perfil na pasta `assets/`. O `index.html` da raiz está vazio; abra o arquivo da versão desejada.

## Como executar

Clone ou baixe o repositório e abra `bootstrap/index.html` ou `bulma/index.html` em um navegador. Não é necessário instalar dependências nem executar um processo de build. Os frameworks são carregados por CDN, portanto é preciso ter conexão com a internet para que seus estilos sejam aplicados.

Se preferir usar um servidor local, execute na raiz do projeto:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000/bootstrap/` ou `http://localhost:8000/bulma/`.

## Funcionalidades

- Layout responsivo com navegação pelas seções da página.
- Alternância entre tema claro e escuro, com preferência salva no armazenamento local do navegador quando disponível.
- Menu adaptado para telas menores.
- Links para GitHub, LinkedIn, projeto e contato por e-mail.
- Link para pular diretamente ao conteúdo principal e ano atualizado automaticamente no rodapé.

## Estrutura

```text
bootstrap/
  index.html
  assets/css/styles.css
  assets/js/script.js
  assets/img/perfil.jpeg
bulma/
  index.html
  assets/css/styles.css
  assets/js/script.js
  assets/img/perfil.jpeg
```
