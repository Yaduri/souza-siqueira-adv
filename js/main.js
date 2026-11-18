/**
 * Souza Siqueira Sociedade de Advogados — Comportamento e Interatividade
 * Vanilla ES6+ sem dependências externas
 */

(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5511937137822';
  const CONTACT_EMAIL = 'contato@souzasiqueira.com.br';

  const PUBLICATION_DETAILS = {
    'aime': {
      tag: 'Direito Eleitoral',
      date: '19/03/2020',
      title: 'Do Litisconsórcio Passivo Necessário na Ação de Impugnação de Mandato Eletivo',
      author: 'Por Dr. Luciano de Souza Siqueira',
      paragraphs: [
        'O artigo analisa os requisitos constitucionais e processuais da Ação de Impugnação de Mandato Eletivo (AIME), prevista no art. 14, §§ 10 e 11, da Constituição Federal, com foco na obrigatoriedade de formação do litisconsórcio passivo necessário entre os candidatos eleitos aos cargos de titular e vice.',
        'Em razão da indivisibilidade da chapa majoritária e da natureza desconstitutiva do mandato eletivo, a ausência de citação de qualquer dos integrantes da chapa no prazo decadencial compromete a regularidade processual e conduz à extinção do feito, em observância ao devido processo legal e à segurança jurídica do resultado das urnas.'
      ],
      pdfUrl: 'assets/docs/artigo-luciano-aime.pdf'
    },
    'vinculo-desportivo': {
      tag: 'Direito Desportivo',
      date: '14/10/2024',
      title: 'Evolução do Vínculo Federativo de Atletas Não Profissionais',
      author: 'Coautoria · Parceria ESA / Comissão de Direito Desportivo da OAB-SP',
      paragraphs: [
        'Contribuição doutrinária publicada em obra coletiva em parceria com a Escola Superior de Advocacia (ESA) e a Comissão de Direito Desportivo da OAB-SP, examinando o histórico normativo do vínculo desportivo e federativo aplicável a atletas não profissionais.',
        'O estudo aborda o equilíbrio jurídico entre a proteção integral de jovens atletas em formação, as exigências da Lei Geral do Esporte e a segurança contratual e formativa das entidades de prática desportiva.'
      ]
    },
    'habitacao-stj': {
      tag: 'Direito Civil e Sucessões',
      date: '01/10/2024',
      title: 'Direito Real de Habitação: Distinção entre Sucessão Hereditária e Divórcio',
      author: 'Informativo Jurisprudencial · Superior Tribunal de Justiça (STJ)',
      paragraphs: [
        'Nota técnica sobre o posicionamento consolidado do Superior Tribunal de Justiça acerca do art. 1.831 do Código Civil: o direito real de habitação possui natureza estritamente sucessória e visa assegurar moradia ao cônjuge ou companheiro sobrevivente após o falecimento do titular do imóvel residencial da família.',
        'Em contrapartida, nos casos de separação ou divórcio em vida, não incide o direito real de habitação previsto no direito das sucessões, devendo a ocupação e a partilha do patrimônio imobiliário observar as regras próprias do regime de bens e eventual arbitramento de aluguel pelo uso exclusivo.'
      ]
    },
    'responsabilidade-pais': {
      tag: 'Direito Civil e Sucessões',
      date: '27/09/2025',
      title: 'Responsabilidade Civil Objetiva dos Pais pelos Atos de Filhos Menores',
      author: 'Informativo Técnico · Código Civil (Art. 932, I) e ECA',
      paragraphs: [
        'Síntese informativa sobre a responsabilidade civil objetiva dos genitores pelos danos materiais ou morais causados por filhos menores que estiverem sob sua autoridade e em sua companhia, conforme dispõem os arts. 932, inciso I, e 933 do Código Civil.',
        'O dever de indenizar independe da comprovação de culpa direta dos pais pelo ato praticado pelo menor, reforçando a importância da orientação familiar contínua e da análise preventiva de riscos nas relações civis e digitais.'
      ]
    },
    'internet-sociedade': {
      tag: 'Direito Digital',
      date: '24/06/2016',
      title: 'O Fim da Internet Ilimitada: Novas Formas de Controle da Internet na Era da Sociedade da Informação',
      author: 'Por Christiany Pegorari Conte (Autora convidada)',
      paragraphs: [
        'O texto examina os desdobramentos jurídicos da sociedade da informação diante das tentativas de limitação comercial de pacotes de dados e mecanismos de controle de acesso à rede mundial de computadores.',
        'À luz dos princípios do Marco Civil da Internet — especialmente a neutralidade de rede, a liberdade de expressão e a garantia de acesso à informação como vetor de cidadania — o estudo discute os limites regulatórios aplicáveis a provedores e plataformas digitais.'
      ]
    },
    'autonomia-esportiva': {
      tag: 'Direito Desportivo',
      date: '23/05/2016',
      title: 'Considerações sobre a Autonomia Esportiva e Atletas Profissionais vs. Amadores',
      author: 'Acervo Técnico · Souza Siqueira Sociedade de Advogados',
      paragraphs: [
        'Reúne análises do acervo de Direito Desportivo do escritório sobre a autonomia constitucional das entidades dirigentes do desporto, os pontos de tensão com a soberania estatal na realização de grandes eventos internacionais e as distinções jurídicas entre o atleta profissional e o atleta amador.',
        'Os estudos detalham as implicações trabalhistas, contratuais, previdenciárias e disciplinares decorrentes de cada modalidade de vínculo esportivo.'
      ]
    },
    'tributo-em-foco': {
      tag: 'Direito Tributário',
      date: 'Série Tributo em Foco',
      title: 'Planejamento Tributário Preventivo e Competitividade Empresarial',
      author: 'Coluna Tributo em Foco · Acervo Souza Siqueira',
      paragraphs: [
        'Compilação temática da série de artigos publicados originalmente na coluna Tributo em Foco (Bragança Jornal Diário), dedicada a traduzir conceitos complexos do Sistema Tributário Nacional para gestores e empresários.',
        'Os textos destacam a elisão fiscal lícita, a revisão contínua de enquadramentos tributários nos âmbitos federal, estadual e municipal e a importância de diagnósticos preventivos diante de constantes alterações legislativas.'
      ]
    },
    'chardon-group': {
      tag: 'Institucional',
      date: '12/04/2026',
      title: 'Presença Institucional na Inauguração da Sede LATAM/África do Chardon Group',
      author: 'Atuação Corporativa em Bragança Paulista',
      paragraphs: [
        'Registro da participação institucional da Souza Siqueira Sociedade de Advogados na inauguração da nova sede regional América Latina e África da multinacional Chardon Group em Bragança Paulista.',
        'Com trinta anos de atuação na região bragantina e atendimento jurídico em todo o Estado de São Paulo e capitais, o escritório acompanha de perto o desenvolvimento industrial, empresarial e de investimentos internacionais instalados no município.'
      ]
    }
  };

  /**
   * Remove acentos e normaliza texto para filtragem
   */
  function normalizeText(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * 1. Status em tempo real (Fuso America/Sao_Paulo) e destaque do dia na tabela de horários
   */
  function initOfficeStatus() {
    const badge = document.getElementById('office-status-badge');
    const hoursTable = document.getElementById('hours-table');

    let dayIndex = new Date().getDay();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    try {
      const now = new Date();
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).formatToParts(now);

      const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
      const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      if (map.weekday && weekdayMap[map.weekday] !== undefined) {
        dayIndex = weekdayMap[map.weekday];
      }
      hour = parseInt(map.hour, 10);
      minute = parseInt(map.minute, 10);
    } catch (_) {
      // Fallback mantém horário local do navegador
    }

    const totalMinutes = hour * 60 + minute;
    const isWeekday = dayIndex >= 1 && dayIndex <= 5;
    const isOpenNow = isWeekday && totalMinutes >= 8 * 60 && totalMinutes < 18 * 60;

    if (badge) {
      const textEl = badge.querySelector('.status-pill__text');
      badge.classList.toggle('is-open', isOpenNow);
      badge.classList.toggle('is-closed', !isOpenNow);
      if (textEl) {
        textEl.textContent = isOpenNow
          ? 'Aberto agora · Atendimento até 18h00'
          : 'Fechado agora · Atendimento Seg. a Sex. 08h às 18h';
      }
    }

    if (hoursTable) {
      const todayRow = hoursTable.querySelector(`tr[data-day="${dayIndex}"]`);
      if (todayRow) {
        todayRow.classList.add('is-today');
        const th = todayRow.querySelector('th');
        if (th && !th.querySelector('.today-badge')) {
          const span = document.createElement('span');
          span.className = 'today-badge';
          span.textContent = 'Hoje';
          th.appendChild(span);
        }
      }
    }
  }

  /**
   * 2. Cabeçalho fixo com sombra ao rolar e Menu Mobile acessível
   */
  function initNavigation() {
    const header = document.getElementById('site-header');
    const waFloat = document.querySelector('.whatsapp-float');
    const toggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

    const updateHeaderScroll = () => {
      if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 12);
      }
      if (waFloat) {
        waFloat.classList.toggle('is-visible', window.scrollY > 240);
      }
    };

    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();

    if (toggle && mobileNav) {
      const setMenuState = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        mobileNav.hidden = !open;
      };

      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
      });

      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setMenuState(false);
          toggle.focus();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1120 && toggle.getAttribute('aria-expanded') === 'true') {
          setMenuState(false);
        }
      });
    }
  }

  /**
   * 3. Vitrine Fotográfica Interativa da Sede (Hero)
   */
  function initOfficeGallery() {
    const mainImg = document.getElementById('gallery-main-img');
    const caption = document.getElementById('gallery-caption');
    const buttons = document.querySelectorAll('.showcase-btn[data-gallery-src]');
    if (!mainImg || !caption || !buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextSrc = btn.getAttribute('data-gallery-src');
        const nextAlt = btn.getAttribute('data-gallery-alt') || '';
        const nextCaption = btn.getAttribute('data-gallery-caption') || '';

        buttons.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        if (mainImg.getAttribute('src') === nextSrc) return;

        mainImg.classList.add('is-switching');
        window.setTimeout(() => {
          mainImg.src = nextSrc;
          mainImg.alt = nextAlt;
          caption.textContent = nextCaption;
          mainImg.classList.remove('is-switching');
        }, 120);
      });
    });
  }

  /**
   * 4. Dossiê Interativo das 8 Áreas de Atuação + Busca + Navegação por Teclado + Atalhos do Rodapé
   */
  function initPracticeAreasDossier() {
    const grid = document.getElementById('dossier-grid');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('.dossier-item'));
    const searchInput = document.getElementById('area-search');
    const searchClear = document.getElementById('area-search-clear');
    const searchStatus = document.getElementById('area-search-status');
    const emptyState = document.getElementById('dossier-empty');
    const resetBtn = document.getElementById('dossier-reset-btn');
    const jumpLinks = document.querySelectorAll('[data-jump-area]');

    const isDesktopLayout = () => window.innerWidth >= 900;

    function activateItem(targetItem, allowToggleCollapse = false) {
      if (!targetItem) return;
      const wasActive = targetItem.classList.contains('is-active');

      if (allowToggleCollapse && !isDesktopLayout() && wasActive) {
        targetItem.classList.remove('is-active');
        const btn = targetItem.querySelector('.dossier-tab');
        const panel = targetItem.querySelector('.dossier-panel');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
        return;
      }

      items.forEach((item) => {
        const isMatch = item === targetItem;
        item.classList.toggle('is-active', isMatch);
        const btn = item.querySelector('.dossier-tab');
        const panel = item.querySelector('.dossier-panel');
        if (btn) btn.setAttribute('aria-expanded', String(isMatch));
        if (panel) panel.hidden = !isMatch;
      });
    }

    // Garante que no desktop exista sempre um painel ativo visível
    window.addEventListener('resize', () => {
      if (isDesktopLayout()) {
        const visibleItems = items.filter((item) => !item.hidden);
        const anyActive = visibleItems.some((item) => item.classList.contains('is-active'));
        if (!anyActive && visibleItems.length > 0) {
          activateItem(visibleItems[0], false);
        }
      }
    });

    items.forEach((item) => {
      const btn = item.querySelector('.dossier-tab');
      if (!btn) return;

      btn.addEventListener('click', () => {
        activateItem(item, true);
      });

      btn.addEventListener('keydown', (event) => {
        const visibleButtons = items
          .filter((i) => !i.hidden)
          .map((i) => i.querySelector('.dossier-tab'))
          .filter(Boolean);
        const idx = visibleButtons.indexOf(btn);
        if (idx === -1) return;

        let nextIdx = null;
        if (event.key === 'ArrowDown') nextIdx = (idx + 1) % visibleButtons.length;
        else if (event.key === 'ArrowUp') nextIdx = (idx - 1 + visibleButtons.length) % visibleButtons.length;
        else if (event.key === 'Home') nextIdx = 0;
        else if (event.key === 'End') nextIdx = visibleButtons.length - 1;

        if (nextIdx !== null) {
          event.preventDefault();
          const nextBtn = visibleButtons[nextIdx];
          nextBtn.focus();
          const nextItem = nextBtn.closest('.dossier-item');
          activateItem(nextItem, false);
        }
      });
    });

    function applyFilter() {
      if (!searchInput) return;
      const query = normalizeText(searchInput.value.trim());

      if (searchClear) {
        searchClear.hidden = query.length === 0;
      }

      let matchCount = 0;
      let firstMatch = null;

      items.forEach((item) => {
        const keywords = normalizeText(item.getAttribute('data-keywords'));
        const contentText = normalizeText(item.textContent);
        const matches = !query || keywords.includes(query) || contentText.includes(query);
        item.hidden = !matches;
        if (matches) {
          matchCount += 1;
          if (!firstMatch) firstMatch = item;
        }
      });

      if (emptyState) {
        emptyState.hidden = matchCount > 0;
      }
      grid.hidden = matchCount === 0;

      if (searchStatus) {
        if (!query) {
          searchStatus.textContent = '';
        } else if (matchCount === 0) {
          searchStatus.textContent = 'Nenhuma especialidade encontrada para este filtro.';
        } else if (matchCount === 1) {
          searchStatus.textContent = '1 especialidade correspondente exibida.';
        } else {
          searchStatus.textContent = `${matchCount} especialidades correspondentes exibidas.`;
        }
      }

      const activeVisible = items.some((item) => !item.hidden && item.classList.contains('is-active'));
      if (!activeVisible && firstMatch) {
        activateItem(firstMatch, false);
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilter);
    }

    const resetFilter = () => {
      if (!searchInput) return;
      searchInput.value = '';
      applyFilter();
      searchInput.focus();
    };

    if (searchClear) {
      searchClear.addEventListener('click', resetFilter);
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilter);
    }

    // Links do rodapé selecionam automaticamente a área correspondente no Dossiê
    jumpLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const areaId = link.getAttribute('data-jump-area');
        if (searchInput && searchInput.value.trim()) {
          searchInput.value = '';
          applyFilter();
        }
        const targetItem = items.find((i) => i.getAttribute('data-area-id') === areaId);
        if (targetItem) {
          activateItem(targetItem, false);
        }
      });
    });
  }

  /**
   * 5. Filtro de Publicações e Modal Acessível de Leitura
   */
  function initPublications() {
    const filterButtons = document.querySelectorAll('.filter-pill[data-pub-filter]');
    const cards = document.querySelectorAll('.pub-card[data-category]');
    const modal = document.getElementById('publication-modal');
    const modalTag = document.getElementById('modal-pub-tag');
    const modalDate = document.getElementById('modal-pub-date');
    const modalTitle = document.getElementById('modal-pub-title');
    const modalAuthor = document.getElementById('modal-pub-author');
    const modalBody = document.getElementById('modal-pub-body');
    const modalFooter = document.getElementById('modal-pub-footer');
    const modalClose = document.getElementById('modal-pub-close');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-pub-filter');

        filterButtons.forEach((b) => {
          const isCurrent = b === btn;
          b.classList.toggle('is-active', isCurrent);
          b.setAttribute('aria-pressed', String(isCurrent));
        });

        cards.forEach((card) => {
          const category = card.getAttribute('data-category');
          card.hidden = filter !== 'todos' && category !== filter;
        });
      });
    });

    if (!modal) return;

    let lastFocusedEl = null;

    function openModal(pubKey, triggerEl) {
      const data = PUBLICATION_DETAILS[pubKey];
      if (!data) return;

      lastFocusedEl = triggerEl || document.activeElement;

      if (modalTag) modalTag.textContent = data.tag;
      if (modalDate) modalDate.textContent = data.date;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalAuthor) modalAuthor.textContent = data.author;

      if (modalBody) {
        modalBody.innerHTML = '';
        data.paragraphs.forEach((text) => {
          const p = document.createElement('p');
          p.textContent = text;
          modalBody.appendChild(p);
        });
      }

      if (modalFooter) {
        modalFooter.innerHTML = '';

        if (data.pdfUrl) {
          const pdfLink = document.createElement('a');
          pdfLink.href = data.pdfUrl;
          pdfLink.target = '_blank';
          pdfLink.rel = 'noopener noreferrer';
          pdfLink.className = 'btn btn--primary btn--sm';
          pdfLink.textContent = 'Abrir Artigo Completo (PDF)';
          modalFooter.appendChild(pdfLink);
        }

        const waLink = document.createElement('a');
        const waMsg = encodeURIComponent(`Olá, li a publicação "${data.title}" no site da Souza Siqueira Sociedade de Advogados e gostaria de conversar com a equipe.`);
        waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
        waLink.target = '_blank';
        waLink.rel = 'noopener noreferrer';
        waLink.className = data.pdfUrl ? 'btn btn--secondary btn--sm' : 'btn btn--primary btn--sm';
        waLink.textContent = 'Consultar sobre este tema via WhatsApp';
        modalFooter.appendChild(waLink);
      }

      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }

      if (modalClose) {
        modalClose.focus();
      }
    }

    function closeModal() {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus();
      }
    }

    document.querySelectorAll('[data-open-pub]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openModal(btn.getAttribute('data-open-pub'), btn);
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    modal.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeModal();
    });
  }

  /**
   * 6. Formulário de Triagem com Máscara de Telefone e Integração WhatsApp / E-mail
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nomeInput = document.getElementById('nome');
    const empresaInput = document.getElementById('empresa');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');
    const areaSelect = document.getElementById('area');
    const mensagemInput = document.getElementById('mensagem');

    const feedbackBox = document.getElementById('form-feedback');
    const feedbackWaLink = document.getElementById('feedback-whatsapp-link');
    const feedbackEmailLink = document.getElementById('feedback-email-link');

    function formatBrazilianPhone(raw) {
      const digits = raw.replace(/\D/g, '').slice(0, 11);
      if (digits.length <= 2) return digits;
      if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      }
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    if (telefoneInput) {
      telefoneInput.addEventListener('input', () => {
        telefoneInput.value = formatBrazilianPhone(telefoneInput.value);
      });
    }

    function setFieldError(input, errorId, message) {
      const errorEl = document.getElementById(errorId);
      if (message) {
        input.setAttribute('aria-invalid', 'true');
        if (errorEl) errorEl.textContent = message;
      } else {
        input.removeAttribute('aria-invalid');
        if (errorEl) errorEl.textContent = '';
      }
    }

    const trackedFields = [
      { el: nomeInput, errId: 'error-nome' },
      { el: telefoneInput, errId: 'error-telefone' },
      { el: emailInput, errId: 'error-email' },
      { el: areaSelect, errId: 'error-area' },
      { el: mensagemInput, errId: 'error-mensagem' }
    ];

    trackedFields.forEach(({ el, errId }) => {
      if (!el) return;
      el.addEventListener('input', () => setFieldError(el, errId, ''));
      el.addEventListener('change', () => setFieldError(el, errId, ''));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let firstInvalid = null;

      const nome = nomeInput.value.trim();
      const empresa = empresaInput ? empresaInput.value.trim() : '';
      const telefone = telefoneInput.value.trim();
      const phoneDigits = telefone.replace(/\D/g, '');
      const email = emailInput.value.trim();
      const area = areaSelect.value.trim();
      const mensagem = mensagemInput.value.trim();

      if (nome.length < 3) {
        setFieldError(nomeInput, 'error-nome', 'Informe seu nome completo.');
        firstInvalid = firstInvalid || nomeInput;
      } else {
        setFieldError(nomeInput, 'error-nome', '');
      }

      if (phoneDigits.length < 10) {
        setFieldError(telefoneInput, 'error-telefone', 'Informe um telefone ou WhatsApp válido com DDD.');
        firstInvalid = firstInvalid || telefoneInput;
      } else {
        setFieldError(telefoneInput, 'error-telefone', '');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setFieldError(emailInput, 'error-email', 'Informe um endereço de e-mail válido.');
        firstInvalid = firstInvalid || emailInput;
      } else {
        setFieldError(emailInput, 'error-email', '');
      }

      if (!area) {
        setFieldError(areaSelect, 'error-area', 'Selecione a área jurídica relacionada à sua demanda.');
        firstInvalid = firstInvalid || areaSelect;
      } else {
        setFieldError(areaSelect, 'error-area', '');
      }

      if (mensagem.length < 10) {
        setFieldError(mensagemInput, 'error-mensagem', 'Descreva brevemente sua necessidade (mínimo de 10 caracteres).');
        firstInvalid = firstInvalid || mensagemInput;
      } else {
        setFieldError(mensagemInput, 'error-mensagem', '');
      }

      if (firstInvalid) {
        if (feedbackBox) feedbackBox.hidden = true;
        firstInvalid.focus();
        return;
      }

      const lines = [
        'Olá, equipe Souza Siqueira Sociedade de Advogados.',
        'Solicitação enviada pelo site institucional:',
        `• Nome: ${nome}`
      ];
      if (empresa) lines.push(`• Empresa/Organização: ${empresa}`);
      lines.push(`• Telefone/WhatsApp: ${telefone}`);
      lines.push(`• E-mail: ${email}`);
      lines.push(`• Área de Interesse: ${area}`);
      lines.push(`• Resumo da demanda: ${mensagem}`);

      const composedText = lines.join('\n');
      const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedText)}`;
      const emailSubject = encodeURIComponent(`Solicitação de Atendimento — ${area} (${nome})`);
      const emailBody = encodeURIComponent(composedText);
      const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

      if (feedbackWaLink) feedbackWaLink.href = waHref;
      if (feedbackEmailLink) feedbackEmailLink.href = mailtoHref;

      if (feedbackBox) {
        feedbackBox.hidden = false;
        feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /**
   * 7. Atualização do ano no rodapé (mínimo 2026)
   */
  function initFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (!yearEl) return;
    const currentYear = new Date().getFullYear();
    yearEl.textContent = String(Math.max(2026, currentYear));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initOfficeStatus();
    initNavigation();
    initOfficeGallery();
    initPracticeAreasDossier();
    initPublications();
    initContactForm();
    initFooterYear();
  });
})();
