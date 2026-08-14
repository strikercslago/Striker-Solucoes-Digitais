# Comparação visual STRIKER

Data: 2026-08-14  
Ambiente: produção local `http://localhost:3000/`  
Capturas geradas:

- `desktop-1440-full.png`
- `mobile-390-full.png`
- `report.json`

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
- Formulário aceita preenchimento válido e mantém botão habilitado.
- Links de WhatsApp apontam para `https://wa.me/5554999102656`.

## Comparação por seção

- Hero: composição com navegação, slogan, H1, CTAs e mockups responsivos preservada. Diferença P2: mockups são implementados em CSS/HTML e não reproduzem exatamente a perspectiva/fotografia das referências.
- Diagnóstico e transição: hierarquia, cards de problemas e bloco escuro preservados. Diferença P2: ícones leves em CSS diferem dos traços originais.
- Soluções, benefícios e público: estrutura desktop em grid e mobile em fluxo vertical preservada. Diferença P2: densidade dos cards varia levemente entre 1024px e 768px.
- Processo e projetos: timeline desktop clara e timeline mobile escura preservadas; placeholders honestos mantidos. Diferença P2: desktop usa 4 etapas principais conforme especificação textual, enquanto a referência desktop visual mostra 7 microetapas.
- Redes, fundador e depoimento: mockup social, retrato real de Rafael e placeholder de vídeo preservados. Diferença P2: mockup social é simplificado em CSS, sem reproduzir todos os cartões flutuantes da referência desktop.
- FAQ, CTA, formulário e rodapé: acordeão, condições, CTA escuro, formulário e rodapé preservados. Diferença P2: copy do FAQ segue a especificação textual mais recente em vez de algumas variações visuais da referência desktop.

## Resultado

Nenhuma diferença P0 ou P1 foi encontrada após a rodada final. Permanecem apenas diferenças P2/P3 ligadas a nuances de mockup, ícones e microespaçamentos, sem quebrar conteúdo, responsividade ou funcionalidade.
