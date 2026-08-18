# Comparação visual STRIKER

Data: 2026-08-18  
Ambiente: produção local `http://localhost:3000/`  
Capturas geradas:

- `report.json`
- `scale/hero-1900x914.png`
- `scale/hero-1536x730.png`
- `scale/hero-1440x800.png`
- `scale/hero-1366x768.png`
- `scale/hero-1280x720.png`
- `scale/hero-768x1024.png`
- `scale/hero-390x844.png`
- `scale/hero-360x800.png`
- `scale/benefits-1440x800.png`
- `scale/audience-1440x800.png`
- `scale/before-benefits-1536x730.png`
- `scale/benefits-1536x730.png`
- `scale/benefits-top-1536x730.png`
- `scale/audience-1536x730.png`
- `scale/benefits-390x844.png`
- `scale/audience-390x844.png`
- Capturas auxiliares desktop da evolução visual: `scale/diagnosis-1440x800.png`, `scale/solutions-1440x800.png`, `scale/process-projects-1440x800.png`, `scale/social-founder-1440x800.png`, `scale/testimonial-final-1440x800.png`, `scale/contact-footer-1440x800.png`
- Capturas auxiliares mobile da evolução visual: `scale/mobile-diagnosis-390x844.png`, `scale/mobile-solutions-390x844.png`, `scale/mobile-final-390x844.png`
- Capturas auxiliares de inspeção mobile: `mobile-390-finalcta-viewport.png`, `mobile-390-contact-viewport.png`, `mobile-390-footer-viewport.png`

## Viewports verificados

- 1900 x 914 CSS: `innerWidth=1900`, `innerHeight=914`, `devicePixelRatio=1`, sem overflow horizontal.
- 1536 x 730 CSS: `innerWidth=1536`, `innerHeight=730`, `devicePixelRatio=1`, sem overflow horizontal.
- 1440 x 800 CSS: `innerWidth=1440`, `innerHeight=800`, `devicePixelRatio=1`, sem overflow horizontal.
- 1366 x 768 CSS: `innerWidth=1366`, `innerHeight=768`, `devicePixelRatio=1`, sem overflow horizontal.
- 1280 x 720 CSS: `innerWidth=1280`, `innerHeight=720`, `devicePixelRatio=1`, sem overflow horizontal.
- 768 x 1024 CSS: `innerWidth=768`, `innerHeight=1024`, `devicePixelRatio=1`, sem overflow horizontal.
- 390 x 844 CSS: `innerWidth=390`, `innerHeight=844`, `devicePixelRatio=1`, sem overflow horizontal.
- 360 x 800 CSS: `innerWidth=360`, `innerHeight=800`, `devicePixelRatio=1`, sem overflow horizontal.

## Interações verificadas

- Menu mobile abre, fecha por Escape e preserva navegação por âncoras.
- FAQ abre por botão com `aria-expanded`.
- Formulário valida campos obrigatórios, não simula sucesso falso e abre WhatsApp com mensagem preenchida.
- Links de WhatsApp usam o número real `54999102656` em formato internacional para abertura externa.
- Âncoras desktop verificadas: `#solucoes`, `#processo`, `#projetos`, `#sobre` e `#contato`.
- Console verificado sem erros nos viewports testados.

## Comparação por seção

- Header: estático, com uma única instância e sem comportamento fixed/sticky.
- Hero: composição reescalada para notebook Full HD em zoom 100%. Em 1900 x 914, 1536 x 730, 1440 x 800, 1366 x 768 e 1280 x 720, cabeçalho, slogan, H1, parágrafo, CTAs, mockup principal e faixa de benefícios aparecem na mesma primeira tela. No viewport 1900 x 914, a faixa termina no fundo do viewport, eliminando o espaço vazio abaixo dela. No mobile 390 x 844, mensagem, CTAs e mockup principal aparecem como uma composição única; a faixa começa logo abaixo.
- Diagnóstico e transição: cards com ícones lineares legíveis, transição escura compacta e mobile empilhado sem cortes laterais.
- Soluções: grid desktop preservado, card destacado mantido e conteúdo aprovado sem alterações de integração.
- O que muda: seção reconstruída em HTML/CSS com fundo azul-marinho, grade 3 x 2 no desktop, cards glassmorphism, cápsulas de ícones SVG, linhas de destaque e transição curva para a seção clara. No mobile, os seis cards empilham com ícones à esquerda, sem cortes ou overflow.
- Para quem é: seção reconstruída em fundo frio claro, texto à esquerda e seis chips 3 x 2 no desktop; em mobile, chips 2 x 3, incluindo "Prestadores de serviço", sem recorte de texto.
- Processo e projetos: timeline desktop com 7 etapas e linhas sem cruzar texto; mobile em lista vertical legível; placeholders honestos mantidos.
- Redes sociais: removidos números e métricas fictícias; mockup usa elementos neutros de calendário, conteúdo, publicações e planejamento.
- Fundador e depoimento: foto real de Rafael sem distorção, bloco do fundador em fluxo mobile correto e depoimento mantido como placeholder honesto.
- FAQ, CTA, formulário e rodapé: acordeão funcional, CTA compacta, formulário com validação/WhatsApp e rodapé com WhatsApp/e-mail reais.

## Rodada de evolução visual premium

- Hero: faixa de benefícios convertida para uma tira premium em azul-marinho profundo, com brilho central azul, separadores translúcidos, ícones em cápsulas e sombra difusa. A composição desktop permanece encaixada na primeira tela, sem voltar ao espaço vazio abaixo da faixa.
- Diagnóstico: cards receberam gradiente branco sutil, borda azul-acinzentada, iluminação superior e um único destaque escuro controlado para reforçar hierarquia sem comprometer contraste.
- Soluções: seis cards receberam volume, cápsulas de ícone e hover discreto; o card destacado foi preservado em gradiente azul-marinho com texto branco e brilho moderado.
- Processo, projetos e social: círculos numerados, linhas, mockups e cards ganharam sombra/overlap mais realista sem inserir métricas, depoimentos ou empresas fictícias.
- Depoimento, CTA e formulário: depoimento segue como placeholder honesto com botão de play volumétrico; CTA final recebeu gradiente navy e textura sutil; formulário ficou com elevação leve e foco claro.
- Movimento: entrada por viewport com `IntersectionObserver`, deslocamento curto e stagger rápido; hover apenas em dispositivos com ponteiro fino. Com `prefers-reduced-motion: reduce`, 39 elementos animáveis foram verificados como visíveis e sem transformações.

## Resultado

Nenhuma diferença P0 ou P1 foi encontrada após a segunda rodada. Permanecem apenas diferenças P2/P3 ligadas a nuances de mockup, ícones e microespaçamentos, sem quebrar conteúdo, responsividade ou funcionalidade.

## Reconstrução O que muda / Para quem é

- Estrutura preservada em `app/page.tsx`: os dados aprovados continuam nas coleções `benefits` e `segments`; os IDs e âncoras existentes permanecem ativos.
- Ícones usados: `shield`, `messageMore`, `spark`, `trending`, `panelHome`, `blocks`, `tooth`, `scale`, `stethoscope`, `mind`, `case` e `tool`, todos como SVG inline no componente `IconGlyph`.
- A implementação não usa prints ou imagens rasterizadas das referências para montar as seções.
- Comparação visual obrigatória: P0/P1 corrigidos; não há seção duplicada, conteúdo cortado, overflow horizontal, ícone ausente, CTA/formulário quebrado ou texto ilegível nos viewports testados.
- Diferenças residuais P2/P3: a intensidade do blur e do brilho dos cards varia entre navegadores por limitação normal de `backdrop-filter`; quando o navegador reduz o efeito, o fallback mantém gradiente, borda e contraste.

## Correção de escala O que muda / Para quem é

- Captura antes da correção: `scale/before-benefits-1536x730.png`.
- Capturas depois da correção: `scale/benefits-1536x730.png`, `scale/benefits-top-1536x730.png`, `scale/audience-1536x730.png`, `scale/benefits-390x844.png` e `scale/audience-390x844.png`.
- Em 1536 x 730 CSS, a seção "O que muda" passou de 907px para 632px de altura. Com a seção alinhada no topo, a próxima seção começa em `top=654`, portanto aparece dentro do viewport de 730px.
- O container segue o padrão do site: `width: min(var(--container), calc(100% - 64px))`, com `--container: 1200px`; no viewport 1536 x 730 o container computado é 1200px.
- A correção não usa `transform: scale()` nem `zoom`; os ajustes foram feitos em padding, gaps, tamanhos, alturas, sombras e elementos decorativos.

Valores antes e depois em 1536 x 730 CSS:

| Item | Antes | Depois |
| --- | --- | --- |
| Container | 1200px | 1200px |
| Padding vertical de "O que muda" | 82px / 78px computados, com curva/padding original gerando 907px totais | 58px / 68px, 632px totais |
| Título de "O que muda" | 48px, line-height 51.84px, max-width 940px, margin-bottom 66px | 41.472px, line-height 44.7898px, max-width 780px, margin-bottom 38px |
| Grade de cards | 1188px, gap 24px, altura 539px | 1200px, gap 20px x 22px, altura 352px |
| Cards | 380px x 258px, padding 34px, gap 26px, radius 22px | 385px x 166px, padding 20px 22px, gap 18px, radius 18px |
| Cápsulas | 92px x 92px | 64px x 64px |
| Ícones | 44px x 44px | 28px x 28px |
| Chips de "Para quem é" | 181px x 78px, padding lateral 18px, gap 12px, ícone 32px | 195px x 68px, padding 14px 18px, gap 12px, ícone 28px |

## Correção de escala

- Header reduzido e mantido como elemento estático no fluxo da página.
- Hero removido de uma altura mínima fixa grande e recalculado com `clamp()` para título, espaçamentos, botões e mockup.
- Adicionada media query por altura para viewports desktop com menos de 850px úteis.
- A faixa de benefícios passou a fechar o hero na primeira tela desktop; o espaço extra foi distribuído antes da faixa, com o mockup ampliado para manter a composição coesa.
- Seções internas receberam compactação de padding e gaps em desktop para evitar alongamento artificial.
- O mockup deixou de se comportar visualmente como uma segunda tela separada do texto principal.

## Correção cirúrgica da primeira dobra

- Capturas antes da correção: `hero-fold/before-hero-1536x730.png`, `hero-fold/before-hero-1440x800.png`, `hero-fold/before-hero-1366x768.png`, `hero-fold/before-hero-1280x720.png` e `hero-fold/before-hero-1920x900.png`.
- Capturas depois da correção: `hero-fold/after-hero-1536x730.png`, `hero-fold/after-hero-1440x800.png`, `hero-fold/after-hero-1366x768.png`, `hero-fold/after-hero-1280x720.png` e `hero-fold/after-hero-1920x900.png`.
- O diagnóstico encontrou o cabeçalho no fluxo normal, hero sem `overflow` vertical e barra no fluxo; a soma de texto, mockup e barra era maior que a altura útil nos desktops testados.
- A correção ficou limitada ao hero desktop por altura: espaçamentos verticais, altura real do mockup, dimensões internas do mockup e padding/iconografia da barra. A versão mobile 390 x 844 permaneceu sem alteração nos valores medidos.

Valores antes e depois:

| Viewport CSS | Altura anterior do conjunto | Altura final do conjunto | Mockup antes | Mockup final | Barra antes | Barra final | `barBottom` final | Espaço restante |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1536 x 730 | 766.64px | 720px | 343.09px | 306.59px | 92px | 71px | 720px | 10px |
| 1440 x 800 | 797.88px | 784px | 376px | 336px | 91.11px | 71px | 784px | 16px |
| 1366 x 768 | 775.34px | 755.03px | 360.95px | 322.55px | 89.41px | 69.95px | 755.03px | 12.97px |
| 1280 x 720 | 744.06px | 710px | 338.39px | 302.39px | 87.44px | 68.31px | 710px | 10px |
| 1920 x 900 | 924.55px | 890.5px | 396px | 351px | 103.19px | 86.19px | 890.5px | 9.5px |

Espaços verticais reduzidos no desktop baixo: `padding-top` do hero de 16px para ~10-13px; slogan/título/descrição de 7px/10px/14px para 5px/8px/10px; botões de 40px para 38px; barra de 16px por lado para 12px por lado; ícones da barra reduzidos proporcionalmente. A barra ficou ancorada com margem inferior de 10px e `margin-top: auto`, mantendo pelo menos 8px de segurança.

## Verificações técnicas

- `npm run lint`: aprovado com 3 avisos conhecidos de `<img>` em `app/page.tsx`.
- `npx tsc --noEmit`: aprovado após adicionar declarações locais para os bindings Cloudflare usados pelo projeto.
- `npm test`: aprovado com Node 24 do runtime do Codex.
- `node scripts\visual-check.mjs`: aprovado em 1900 x 914, 1536 x 730, 1440 x 800, 1366 x 768, 1280 x 720, 768 x 1024, 390 x 844 e 360 x 800.
- Checagem Playwright com movimento reduzido: `prefers-reduced-motion=true`, 39 elementos verificados, 0 ocultos por animação.

## Rodada restrita: Processo e FAQ

- Capturas antes: `process-faq/before-process-1536x730.png`, `process-faq/before-process-viewport-1536x730.png`, `process-faq/before-faq-first-open-1536x730.png`, `process-faq/before-faq-third-open-1536x730.png`, `process-faq/before-faq-first-open-390x844.png`.
- Capturas depois: `process-faq/after-process-1536x730.png`, `process-faq/after-process-viewport-1536x730.png`, `process-faq/after-faq-first-open-1536x730.png`, `process-faq/after-faq-third-open-1536x730.png`, `process-faq/after-faq-first-open-390x844.png`.
- Viewports CSS medidos: 1536 x 730, 1440 x 800, 1366 x 768, 390 x 844 e 360 x 800; todos com `devicePixelRatio=1` e sem overflow horizontal.
- A seção "Como trabalhamos" ficou restrita às sete etapas existentes, com números brancos em todos os círculos, timeline em 4 + 3 no desktop e vertical no mobile.
- O FAQ passou a usar `button.faq-trigger`, `span.faq-question`, `span.faq-icon` e `div.faq-answer`, preservando `aria-expanded`, `aria-controls`, `role="region"` e navegação por teclado nativa.

Valores antes e depois em 1536 x 730 CSS:

| Item | Antes | Depois |
| --- | ---: | ---: |
| Altura total de "Como trabalhamos" | 916.77px | 584.33px |
| Padding superior da seção | 78px | 38px |
| Padding inferior computado via footer | 62px | 24px |
| Título da seção | 50px, line-height 56px, altura 168px | 42px, line-height 45.36px, altura 90.72px |
| Timeline | 337.28px, gap 48px x 34px | 287.69px, gap 16px x 24px |
| Círculos | 58px x 58px, número 22px | 58px x 58px, número 18px |
| Cor dos números | 01 branco; 02-07 azul | 01-07 branco |
| Prazo + CTA | footer 110px, margin-top 50px | footer 76px, margin-top 16px |
| FAQ trigger desktop | 64px, padding 0 | 76px, padding 0 20px 0 24px |
| FAQ trigger mobile | 64px, padding 26px | 72px, padding 0 16px 0 18px |

Diferença restante: em 1536 x 730 a seção seguinte começa no DOM logo após 584.33px, mas o `IntersectionObserver` global de `reveal` ainda mantém "Projetos" transparente até uma fração adicional de rolagem. Não alterei a seção "Projetos" nem o comportamento global de reveal nesta rodada porque a solicitação restringia as mudanças a "Como trabalhamos" e FAQ.
