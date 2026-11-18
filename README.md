# Souza Siqueira Sociedade de Advogados — Site Institucional

Prévia moderna do site institucional para **Souza Siqueira Sociedade de Advogados** (*"Advogando desde 1996"*), construída em **HTML5, CSS3 e JavaScript puro (Vanilla ES6+)** para deploy estático no **Cloudflare Pages** via GitHub.

## Estrutura do Projeto

- `index.html` — Página institucional semântica com dados estruturados JSON-LD (`LegalService`), Open Graph e acessibilidade WCAG.
- `css/styles.css` — Design system responsivo com variáveis CSS, tipografia editorial (`EB Garamond` + `Lato`), grid Master-Detail/acordeão mobile e suporte a `prefers-reduced-motion`.
- `js/main.js` — Status de funcionamento em tempo real (`America/Sao_Paulo`), dossiê interativo das 8 áreas de atuação com busca e navegação por teclado, filtro de publicações, modal acessível (`<dialog>`) e formulário de triagem integrado ao WhatsApp e e-mail.
- `_headers` — Cabeçalhos de segurança HTTP e políticas de cache para Cloudflare Pages.
- `assets/images/` — Logotipos oficiais, fotografias reais da sede em Bragança Paulista e imagem editorial complementar.
- `assets/docs/artigo-luciano-aime.pdf` — Artigo jurídico oficial em PDF disponibilizado na seção de Publicações.

## Dados Institucionais Incorporados

- **Escritório:** Souza Siqueira Sociedade de Advogados (desde 1996)
- **Localização:** Condomínio Edifício New York Trade Center — R. Santa Clara, 673 - Centro, Bragança Paulista - SP, 12900-470
- **Telefone:** (11) 4033-9279
- **WhatsApp:** +55 11 93713-7822 (`https://wa.me/5511937137822`)
- **Instagram:** [@souzasiqueiraadvogados](https://www.instagram.com/souzasiqueiraadvogados/)
- **Horário de funcionamento:** Segunda a Sexta-feira, `08:00–18:00` (Sábado e Domingo: Fechado)

## Publicação no Cloudflare Pages via GitHub

1. Conecte o repositório `https://github.com/Yaduri/souza-siqueira-adv.git` no painel **Workers & Pages** da Cloudflare.
2. Em **Build settings**:
   - **Framework preset:** `None`
   - **Build command:** *(deixe vazio)*
   - **Build output directory:** `/` (raiz do repositório)
3. O arquivo `_headers` será aplicado automaticamente pela Cloudflare Pages para cabeçalhos de segurança e cache de ativos estáticos.
