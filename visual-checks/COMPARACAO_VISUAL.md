# Comparação visual STRIKER

Data: 2026-08-18  
Ambiente: produção local `http://localhost:3000/`  
Capturas geradas:

- `desktop-1440-full.png`
- `mobile-390-full.png`
- `report.json`
- Capturas auxiliares de inspeção mobile: `mobile-390-finalcta-viewport.png`, `mobile-390-contact-viewport.png`, `mobile-390-footer-viewport.png`

## Viewports verificados

- 1440px: screenshot full-page, sem overflow horizontal.
- 390px: screenshot full-page, sem overflow horizontal.
- 1280px: sem overflow horizontal.
- 1024px: sem overflow horizontal.
- 768px: sem overflow horizontal.
- 360px: sem overflow horizontal.

## Interações verificadas

- Menu mobile abre, fecha por Escape e preserva navegação por âncoras.
- FAQ abre por botão com `aria-expanded`.
- Formulário valida campos obrigatórios, não simula sucesso falso e abre WhatsApp com mensagem preenchida.
- Links de WhatsApp usam o número real `54999102656` em formato internacional para abertura externa.
- Âncoras desktop verificadas: `#solucoes`, `#processo`, `#projetos`, `#sobre` e `#contato`.
- Console verificado sem erros nos viewports testados.

## Comparação por seção

- Header: estático, com uma única instância e sem comportamento fixed/sticky.
- Hero: composição com navegação, slogan, H1, CTAs e mockups responsivos preservada. Diferença P2: mockups são construídos em HTML/CSS e não reproduzem a perspectiva fotográfica exata das referências.
- Diagnóstico e transição: cards com ícones lineares legíveis, transição escura compacta e mobile empilhado sem cortes laterais.
- Soluções, benefícios e público: grid desktop preservado, seis benefícios obrigatórios implementados e chips mobile em largura integral, incluindo "Prestadores de serviço".
- Processo e projetos: timeline desktop com 7 etapas e linhas sem cruzar texto; mobile em lista vertical legível; placeholders honestos mantidos.
- Redes sociais: removidos números e métricas fictícias; mockup usa elementos neutros de calendário, conteúdo, publicações e planejamento.
- Fundador e depoimento: foto real de Rafael sem distorção, bloco do fundador em fluxo mobile correto e depoimento mantido como placeholder honesto.
- FAQ, CTA, formulário e rodapé: acordeão funcional, CTA compacta, formulário com validação/WhatsApp e rodapé com WhatsApp/e-mail reais.

## Resultado

Nenhuma diferença P0 ou P1 foi encontrada após a segunda rodada. Permanecem apenas diferenças P2/P3 ligadas a nuances de mockup, ícones e microespaçamentos, sem quebrar conteúdo, responsividade ou funcionalidade.

## Verificações técnicas

- `npm run lint`: aprovado com 3 avisos conhecidos de `<img>` em `app/page.tsx`.
- `npm test`: aprovado com Node 24 do runtime do Codex.
- `node scripts\visual-check.mjs`: aprovado em 1440, 1280, 1024, 768, 390 e 360px.
