# Souza Siqueira Sociedade de Advogados — Site Institucional Multi-Páginas

Site institucional completo para **Souza Siqueira Sociedade de Advogados** (*"Advogando desde 1996"*), desenvolvido em **HTML5, CSS3 e JavaScript puro (Vanilla ES6+)**, pronto para deploy estático no **Cloudflare Pages** via GitHub.

## Arquitetura de Páginas

- `index.html` — Página inicial com Hero editorial, vitrine fotográfica da sede, resumo institucional, panorama interligado das 8 áreas de atuação, destaque do corpo jurídico e últimas publicações.
- `o-escritorio.html` — História do escritório desde 1996, galeria da sede no Edifício New York Trade Center, Missão, Visão, Valores e linha do tempo.
- `areas-de-atuacao.html` — Dossiê interativo Master-Detail (com busca em tempo real e suporte a deep-linking por hash `#tributario`, `#empresarial`, `#trabalho`, `#civil`, `#eleitoral`, `#desportivo`, `#ambiental`, `#digital`) e metodologia em 4 etapas.
- `corpo-juridico.html` — Perfil técnico do sócio Dr. Luciano de Souza Siqueira, estrutura multidisciplinar associada e pilares de governança.
- `publicacoes.html` — Destaque do artigo completo em PDF (`assets/docs/artigo-luciano-aime.pdf`) e acervo filtrável com modal de leitura (`<dialog>`).
- `contato.html` — Canais diretos de atendimento, endereço no Condomínio Edifício New York Trade Center, tabela dinâmica de horário de funcionamento, mapa incorporado e formulário de triagem integrado ao WhatsApp e e-mail.

## Recursos Técnicos

- `css/styles.css` — Design system editorial (`EB Garamond` + `Lato`), paleta institucional (`#0B224C`), responsividade mobile-first e suporte a `prefers-reduced-motion`.
- `js/main.js` — Script modular com inicialização automática dos ícones Lucide (`lucide@0.469.0`), sprite vetorial oficial do WhatsApp (`#icon-whatsapp`), relógio de funcionamento (`America/Sao_Paulo`), filtro de áreas, deep-linking por hash, modal de publicações e máscara/validação de formulário.
- `_headers` — Cabeçalhos de segurança HTTP e cache de ativos para Cloudflare Pages.

## Dados Institucionais Incorporados

- **Escritório:** Souza Siqueira Sociedade de Advogados (desde 1996)
- **Localização:** Condomínio Edifício New York Trade Center — R. Santa Clara, 673 - Centro, Bragança Paulista - SP, 12900-470
- **Telefone:** (11) 4033-9279
- **WhatsApp:** +55 11 93713-7822 (`https://wa.me/5511937137822`)
- **E-mail:** contato@souzasiqueira.com.br
- **Instagram:** [@souzasiqueiraadvogados](https://www.instagram.com/souzasiqueiraadvogados/)
- **Horário de funcionamento:** Segunda a Sexta-feira, `08:00–18:00` (Sábado e Domingo: Fechado)

## Publicação no Cloudflare Pages via GitHub

1. Conecte o repositório `https://github.com/Yaduri/souza-siqueira-adv.git` no painel **Workers & Pages** da Cloudflare.
2. Em **Build settings**:
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** *(deixe vazio)*
   - **Build output directory:** `/` (raiz do repositório)
3. O arquivo `_headers` será aplicado automaticamente pela Cloudflare Pages.
