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
- `scale/hero-390x844.png`
- Capturas auxiliares desktop da evolução visual: `scale/diagnosis-1440x800.png`, `scale/solutions-1440x800.png`, `scale/process-projects-1440x800.png`, `scale/social-founder-1440x800.png`, `scale/testimonial-final-1440x800.png`, `scale/contact-footer-1440x800.png`
- Capturas auxiliares mobile da evolução visual: `scale/mobile-diagnosis-390x844.png`, `scale/mobile-solutions-390x844.png`, `scale/mobile-final-390x844.png`
- Capturas auxiliares de inspeção mobile: `mobile-390-finalcta-viewport.png`, `mobile-390-contact-viewport.png`, `mobile-390-footer-viewport.png`

## Viewports verificados

- 1900 x 914 CSS: `innerWidth=1900`, `innerHeight=914`, `devicePixelRatio=1`, sem overflow horizontal.
- 1536 x 730 CSS: `innerWidth=1536`, `innerHeight=730`, `devicePixelRatio=1`, sem overflow horizontal.
- 1440 x 800 CSS: `innerWidth=1440`, `innerHeight=800`, `devicePixelRatio=1`, sem overflow horizontal.
- 1366 x 768 CSS: `innerWidth=1366`, `innerHeight=768`, `devicePixelRatio=1`, sem overflow horizontal.
- 1280 x 720 CSS: `innerWidth=1280`, `innerHeight=720`, `devicePixelRatio=1`, sem overflow horizontal.
- 390 x 844 CSS: `innerWidth=390`, `innerHeight=844`, `devicePixelRatio=1`, sem overflow horizontal.

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
- Soluções, benefícios e público: grid desktop preservado, seis benefícios obrigatórios implementados e chips mobile em largura integral, incluindo "Prestadores de serviço".
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

## Correção de escala

- Header reduzido e mantido como elemento estático no fluxo da página.
- Hero removido de uma altura mínima fixa grande e recalculado com `clamp()` para título, espaçamentos, botões e mockup.
- Adicionada media query por altura para viewports desktop com menos de 850px úteis.
- A faixa de benefícios passou a fechar o hero na primeira tela desktop; o espaço extra foi distribuído antes da faixa, com o mockup ampliado para manter a composição coesa.
- Seções internas receberam compactação de padding e gaps em desktop para evitar alongamento artificial.
- O mockup deixou de se comportar visualmente como uma segunda tela separada do texto principal.

## Verificações técnicas

- `npm run lint`: aprovado com 3 avisos conhecidos de `<img>` em `app/page.tsx`.
- `npm test`: aprovado com Node 24 do runtime do Codex.
- `node scripts\visual-check.mjs`: aprovado em 1900 x 914, 1536 x 730, 1440 x 800, 1366 x 768, 1280 x 720 e 390 x 844.
- Checagem Playwright com movimento reduzido: `prefers-reduced-motion=true`, 39 elementos verificados, 0 ocultos por animação.
