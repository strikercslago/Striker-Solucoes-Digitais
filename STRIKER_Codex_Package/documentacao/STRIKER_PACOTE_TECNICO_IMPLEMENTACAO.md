# STRIKER — Pacote técnico de implementação

Versão: 1.0  
Status: direção visual desktop e mobile aprovada  
Projeto: Striker Soluções Digitais

## 1. Objetivo

Desenvolver a landing page institucional e comercial da Striker Soluções Digitais com alta fidelidade às referências aprovadas. O site deve educar prestadores de serviço sobre a importância de uma presença digital profissional, aumentar a percepção de autoridade da STRIKER e conduzir o visitante à solicitação de uma análise gratuita pelo formulário ou WhatsApp.

O resultado não deve ser apenas visualmente semelhante. Deve preservar hierarquia, ritmo, proporções, conteúdo, composição responsiva, acessibilidade, desempenho e funcionamento comercial.

## 2. Contexto do negócio

- Nome: Striker Soluções Digitais
- Slogan: Sites que posicionam. Experiências que convertem.
- Serviço principal: desenvolvimento de sites
- Serviço secundário: gestão de redes sociais
- Público inicial: dentistas, advogados, médicos, psicólogos, consultores e demais prestadores de serviço
- Atendimento: todo o Brasil, com possibilidade de atendimento internacional
- CTA principal: Solicitar análise gratuita
- CTA secundário: Conhecer nossas soluções
- WhatsApp: 55 54 99910-2656
- E-mail: rafael.gomeslago1@gmail.com
- Prazo médio: 7 a 15 dias úteis após o recebimento dos materiais
- Revisões: duas rodadas
- Suporte: 30 dias após a entrega
- Pagamento: parcelado por contrato, Pix ou cartão
- Domínio e hospedagem: incluídos inicialmente; a renovação posterior é paga pelo cliente
- Publicação inicial: Netlify

## 3. Posicionamento

A STRIKER desenvolve sites estratégicos para tornar empresas mais vistas, respeitadas, bem posicionadas e preparadas para gerar oportunidades comerciais. O diferencial é entender o negócio antes de construir e permanecer presente após a entrega.

O site deve transmitir competência, clareza, segurança e envolvimento real. Não deve parecer uma agência genérica, uma fábrica de templates ou uma empresa que promete resultados sem comprovação.

## 4. Fontes de verdade

### Ordem de prioridade

1. Referências mobile e desktop aprovadas.
2. Este documento e os textos exatos aqui registrados.
3. Assets originais da marca e fotografia real do fundador.
4. Arquitetura, componentes e padrões existentes no repositório, quando houver.
5. Inferências mínimas necessárias para preencher lacunas sem mudar materialmente o resultado.

Em caso de conflito, preserve a funcionalidade e registre a diferença. Não substitua silenciosamente um asset central nem invente conteúdo.

### Referências desktop aprovadas

- Hero: `../referencias/desktop/01-hero-desktop.png`
- Diagnóstico e transição: `../referencias/desktop/02-diagnostico-transicao-desktop.png`
- Solução, benefícios e público: `../referencias/desktop/03-solucoes-beneficios-publico-desktop.png`
- Processo e portfólio: `../referencias/desktop/04-processo-portfolio-desktop.png`
- Redes, fundador e depoimento: `../referencias/desktop/05-redes-fundador-depoimento-desktop.png`
- FAQ, CTA, formulário e rodapé: `../referencias/desktop/06-faq-contato-rodape-desktop.png`

### Referências mobile aprovadas

- Hero: `../referencias/mobile/01-hero-mobile.png`
- Diagnóstico e transição: `../referencias/mobile/02-diagnostico-transicao-mobile.png`
- Solução, benefícios e público: `../referencias/mobile/03-solucoes-beneficios-publico-mobile.png`
- Processo e portfólio: `../referencias/mobile/04-processo-portfolio-mobile.png`
- Redes, fundador e depoimento: `../referencias/mobile/05-redes-fundador-depoimento-mobile.png`
- FAQ, CTA, formulário e rodapé: `../referencias/mobile/06-faq-contato-rodape-mobile.png`

### Assets originais

- Logo horizontal: `../assets/striker-logo-horizontal.jpg`
- Símbolo S: `../assets/striker-simbolo.jpg`
- Retrato real de Rafael: `../assets/rafael-gomes-fundador.png`

Não utilizar o retrato gerado por IA com marca-d'água. Os JPGs do logo possuem fundo branco; se necessário, faça recorte técnico ou reconstrução vetorial fiel, sem redesenhar a marca.

## 5. Sistema visual

### Direção

Minimalismo premium, claro e preciso, inspirado na clareza editorial da Apple, mas com composição original. O visual deve equilibrar grandes áreas brancas, superfícies cinza-frio, contraste escuro e uso controlado do azul.

### Paleta-base

- Texto e fundos escuros: `#0B0D12`
- Azul principal: `#2563EB`
- Azul profundo: `#102A56`
- Texto secundário: `#60646C`
- Superfície clara: `#F5F7FA`
- Bordas: `#E4E7EC`
- Branco: `#FFFFFF`

### Tipografia

- Títulos: Manrope ou equivalente geométrico de alta legibilidade
- Corpo e interface: Inter ou equivalente neutro
- Títulos: peso 650–750, tracking ligeiramente negativo
- Corpo: peso 400–500, line-height confortável
- Eyebrows: caixa alta, azul, peso 700, tracking positivo

### Componentes

- Container desktop máximo aproximado: 1200px
- Gutter desktop: 32–48px conforme viewport
- Gutter mobile: 20px
- Botões: altura mínima de 48px no mobile; azul sólido para CTA principal; contorno discreto para secundário
- Cards: borda de 1px, raio moderado, sombra mínima
- Seções claras alternam branco e `#F5F7FA`
- Seções de impacto usam `#0B0D12` ou `#102A56`
- Ícones: lineares, simples e coerentes; não misturar famílias
- Animações: discretas; respeitar `prefers-reduced-motion`

## 6. Estrutura e conteúdo

### 6.1 Navegação e Hero

Navegação: Início, Soluções, Processo, Projetos, Sobre, Contato. CTA: Solicitar análise gratuita.

Eyebrow/slogan: **Sites que posicionam. Experiências que convertem.**

Título: **Uma presença digital à altura do seu negócio.**

Texto: a abertura deve explicar que a STRIKER cria sites estratégicos para transformar a qualidade do trabalho do cliente em uma presença digital clara, profissional e preparada para gerar oportunidades.

CTAs: **Solicitar análise gratuita** e **Conhecer nossas soluções**.

Visual: mockup refinado de dispositivos/telas, sem métricas ou marcas fictícias.

### 6.2 Diagnóstico

Eyebrow: **PRESENÇA DIGITAL**

Título: **Ser excelente no que você faz pode não ser suficiente se o mercado não consegue perceber isso.**

Texto: **Antes de entrar em contato, muitas pessoas pesquisam sua empresa, analisam sua apresentação e comparam suas opções.**

Problemas:

1. **Sua empresa perde autoridade** — Uma apresentação digital fraca pode reduzir a percepção de valor do seu trabalho.
2. **Seus serviços não são compreendidos** — Sem uma estrutura clara, o visitante pode sair sem entender o que você oferece.
3. **Você depende de plataformas que não controla** — Redes sociais são importantes, mas seu site é o espaço próprio da sua empresa.
4. **O contato não acontece** — Quando o próximo passo não está claro, oportunidades podem ser perdidas.

### 6.3 Transição escura

Título: **Seu trabalho já possui valor. Sua presença digital precisa demonstrá-lo.**

Texto: **A STRIKER transforma experiência e diferenciais em uma estrutura digital profissional, organizada e preparada para conduzir o visitante até o contato.**

CTA: **Quero melhorar minha presença digital**.

### 6.4 Desenvolvimento de sites

Eyebrow: **DESENVOLVIMENTO DE SITES**

Título: **Seu site deve trabalhar pelo crescimento da sua empresa.**

Texto: **Criamos uma presença digital que organiza sua mensagem, valoriza seus diferenciais e conduz o visitante até o próximo passo.**

Diferenciais: Estratégia antes do design; Experiência pensada para conversão; Estrutura profissional e responsiva.

CTA: **Solicitar análise gratuita**.

### 6.5 Benefícios

Eyebrow: **MAIS DO QUE UM SITE**

Título: **Uma estrutura criada para fortalecer sua presença digital.**

- Mais autoridade — Uma apresentação profissional aumenta a confiança em sua empresa.
- Mensagem mais clara — O visitante entende seus serviços e diferenciais com facilidade.
- Mais oportunidades — Cada seção orienta o usuário em direção ao contato.
- Presença própria — Um espaço digital que pertence à sua empresa e trabalha todos os dias.

### 6.6 Público

Eyebrow: **PARA QUEM É**

Título: **Para profissionais que querem ser reconhecidos pelo valor do próprio trabalho.**

Texto: **A STRIKER atende empresas e especialistas que precisam transformar competência em uma presença digital clara, confiável e preparada para gerar oportunidades.**

Segmentos: Dentistas, Advogados, Médicos, Psicólogos, Consultores e Prestadores de serviço.

CTA: **Quero posicionar minha empresa**.

### 6.7 Processo

Eyebrow: **COMO TRABALHAMOS**

Título: **Um processo claro, estratégico e acompanhado do início ao fim.**

Texto: **Antes de desenvolver, entendemos o negócio, o público e os objetivos da empresa. Assim, cada decisão possui uma razão.**

1. Diagnóstico — Entendemos sua empresa, seus serviços, seu público e seus objetivos.
2. Estratégia — Organizamos a mensagem, a estrutura das páginas e o caminho até o contato.
3. Design e desenvolvimento — Transformamos a estratégia em uma experiência profissional, responsiva e funcional.
4. Entrega e acompanhamento — Publicamos, orientamos sua equipe e permanecemos presentes após a entrega.

Destaque: **Prazo médio: 7 a 15 dias úteis**. CTA: **Quero começar meu projeto**.

### 6.8 Projetos

Eyebrow: **PROJETOS**

Título: **Cada projeto começa com um problema real a ser resolvido.**

Texto: **Os trabalhos da STRIKER serão apresentados aqui com contexto, decisões e resultados verificáveis.**

Enquanto não houver seleção aprovada, usar três placeholders honestos com: **Projeto em preparação** e **Estudo de caso será adicionado em breve.** Não inventar empresas, imagens de clientes, resultados, métricas ou depoimentos.

### 6.9 Gestão de redes sociais

Eyebrow: **GESTÃO DE REDES SOCIAIS**

Título: **Sua presença digital também precisa continuar ativa.**

Texto: **Para empresas que precisam manter uma comunicação consistente, a STRIKER também oferece gestão estratégica de redes sociais.**

Itens: Planejamento de conteúdo; Identidade visual consistente; Comunicação alinhada ao negócio.

CTA: **Falar sobre gestão de redes**.

### 6.10 Fundador

Eyebrow: **QUEM ESTÁ POR TRÁS**

Título: **Tecnologia, estratégia e envolvimento de verdade.**

Nome: **Rafael Gomes Lago**. Cargo: **Fundador da STRIKER**.

Texto: **Especialista em Marketing Digital e Analista e Desenvolvedor de Sistemas, Rafael sempre teve uma ligação intensa com a tecnologia. Foi dessa paixão que surgiu a vontade de ajudar empresas a apresentarem melhor o próprio valor e conquistarem novas oportunidades.**

Texto complementar: **A STRIKER nasceu da satisfação de transformar problemas em soluções e acompanhar cada cliente mesmo depois da entrega.**

Destaque: **Não se trata apenas de entregar um site, mas de entender o negócio e permanecer presente.**

### 6.11 Depoimento

Eyebrow: **EXPERIÊNCIA DO CLIENTE**

Título: **Resultados reais merecem ser contados por quem viveu a experiência.**

Até o vídeo real ser entregue, exibir um placeholder claramente identificado: **Depoimento em vídeo — em breve**. Não usar rosto, frase ou nome fictício.

### 6.12 FAQ e condições

Perguntas:

1. Quanto tempo leva para desenvolver um site?
2. Domínio e hospedagem estão incluídos?
3. A STRIKER também produz os textos e as imagens?
4. Quantas revisões estão incluídas?
5. Existe suporte após a entrega?
6. Como funciona o pagamento?

Condições: duas rodadas de revisões; 30 dias de suporte; pagamento parcelado por contrato, Pix ou cartão; renovação posterior de domínio e hospedagem paga pelo cliente.

### 6.13 CTA final e formulário

Título: **Sua empresa já possui valor. Agora é hora de apresentá-lo da forma certa.**

Texto: **Solicite uma análise gratuita e descubra como uma presença digital mais estratégica pode fortalecer seu posicionamento e gerar novas oportunidades.**

Formulário: Nome, Empresa, WhatsApp, E-mail, Serviço de interesse, Sobre o projeto, consentimento de contato e botão **Enviar solicitação**.

O envio deve funcionar de verdade. A solução preferencial é integração compatível com Netlify Forms ou endpoint existente, com validação, estados de envio, sucesso e erro. Disponibilizar também o link direto do WhatsApp com mensagem inicial contextual.

### 6.14 Rodapé

Logo, slogan, navegação, WhatsApp, e-mail e **Atendimento em todo o Brasil**. Não exibir Instagram, CNPJ ou domínio enquanto não existirem. Copyright: **© 2026 Striker Soluções Digitais. Todos os direitos reservados.**

## 7. Responsividade

- Desktop de validação: 1440px de largura.
- Mobile de validação: 390px de largura.
- Viewports adicionais: 1280px, 1024px, 768px e 360px.
- Não escalar o desktop proporcionalmente para mobile.
- No mobile, textos e elementos devem ser reordenados em fluxo vertical intencional.
- Cards largos tornam-se pilhas ou grids compactos quando houver espaço.
- CTAs principais ocupam largura total no mobile.
- Mockups devem reduzir complexidade sem perder função visual.
- Timeline do processo torna-se vertical.
- Formulário permanece em uma coluna.
- Navegação mobile usa menu acessível, com foco gerenciado e fechamento por Escape.
- Nenhum viewport pode apresentar overflow horizontal, texto cortado ou alvos de toque pequenos.

## 8. Funcionalidades

- Navegação por âncoras com scroll suave, respeitando movimento reduzido.
- Menu mobile funcional e acessível.
- Acordeão do FAQ operável por teclado e com atributos ARIA.
- Formulário validado e funcional.
- WhatsApp para `https://wa.me/5554999102656` com mensagem inicial apropriada.
- Agendamento: preparar CTA/estrutura, mas não inventar ferramenta ou URL. Usar WhatsApp até existir solução aprovada.
- SEO básico: title, description, Open Graph, headings corretos e dados estruturados de Organization/ProfessionalService somente com dados verdadeiros.
- Analytics e Meta Pixel não devem ser instalados até os respectivos IDs e consentimento serem fornecidos.

## 9. Regras de integridade

- Não criar métricas, número de clientes, faturamento, resultados, selos ou avaliações.
- Não criar depoimentos, nomes de empresas ou projetos fictícios.
- Não alegar aumento garantido de vendas.
- Não inserir texto essencial dentro de imagens.
- Não usar o retrato artificial com marca-d'água.
- Não copiar literalmente o site da Apple; usar apenas a direção de clareza e refinamento.
- Não alterar o rosto ou a aparência do fundador.

## 10. Processo de implementação e validação

1. Auditar repositório, instruções, stack, worktree e assets.
2. Confirmar que todas as referências estão legíveis; sinalizar qualquer arquivo corrompido.
3. Criar tokens de cor, tipo, spacing, container, borda, raio e sombra.
4. Implementar shell, navegação e seções em ordem.
5. Implementar responsividade usando as referências mobile como composição própria.
6. Implementar menu, FAQ, formulário e WhatsApp.
7. Rodar lint, typecheck, testes e build.
8. Capturar screenshots em 1440px e 390px com zoom de 100%.
9. Comparar por seção, não apenas a página inteira.
10. Corrigir P0/P1 e os P2 visualmente perceptíveis; repetir capturas.

Prioridades de comparação:

- P0: quebra funcional, overflow, conteúdo cortado ou estrutura inválida.
- P1: composição, asset, tipografia ou hierarquia significativamente diferente.
- P2: spacing, dimensão, alinhamento, peso, raio ou cor perceptivelmente diferente.
- P3: sombra, nuance, animação ou microajuste.

## 11. Critérios de aceite

- Desktop e mobile comparados às referências aprovadas.
- Nenhuma diferença P0 ou P1 restante.
- Nenhum overflow horizontal.
- Assets reais usados corretamente.
- Formulário, WhatsApp, menu, FAQ e links funcionando.
- Build, lint e typecheck aprovados.
- Acessibilidade básica, foco visível e reduced-motion atendidos.
- Lighthouse sem falhas críticas de acessibilidade, SEO ou boas práticas.
- Nenhum conteúdo fictício apresentado como real.

---

# PROMPT MESTRE PARA O CODEX

Você atuará como engenheiro front-end sênior e especialista em implementação de interfaces com alta fidelidade visual. Desenvolva o site da **Striker Soluções Digitais** no repositório atual usando o arquivo `STRIKER_PACOTE_TECNICO_IMPLEMENTACAO.md` como especificação principal.

## Objetivo

Reproduzir com alta fidelidade as referências desktop e mobile listadas no pacote técnico, preservando arquitetura, padrões e funcionalidades existentes. O site deve ser comercialmente convincente, acessível, rápido e totalmente responsivo.

## Fontes de verdade

1. Referências desktop e mobile aprovadas e listadas no pacote técnico.
2. Assets originais em `upload/`.
3. Conteúdo, regras e tokens do pacote técnico.
4. Padrões existentes no repositório.

Não escolha silenciosamente em caso de conflito. Preserve funcionalidade e arquitetura, registre o conflito e adote a solução de maior fidelidade que não quebre o projeto. Pare somente se faltar algo que altere materialmente o resultado.

## Fase 1 — Auditoria obrigatória

Antes de editar:

1. Leia as instruções do repositório.
2. Inspecione framework, package manager, rotas, componentes, tokens, estilos, bibliotecas e integrações.
3. Verifique o worktree e preserve alterações do usuário.
4. Abra todas as referências e assets. Confirme dimensões, legibilidade e função de cada arquivo.
5. Identifique qualquer referência ausente ou corrompida.
6. Resuma o que será reutilizado, alterado e criado, incluindo suposições mínimas.

Se um asset central ou uma referência indispensável estiver ausente, informe exatamente qual arquivo é necessário antes de implementar. Lacunas pequenas podem ser resolvidas com a alternativa mais simples e devem ser registradas.

## Fase 2 — Mapa visual mensurável

Extraia e registre antes do código:

- ordem das seções;
- containers, grids, gutters e alinhamentos;
- alturas e espaçamentos principais;
- tokens de cor;
- tipografia, pesos, tamanhos, line-height e tracking;
- botões, cards, campos, menu, acordeão e estados;
- recortes e proporções dos assets;
- bordas, raios, sombras e gradientes;
- diferenças estruturais entre desktop e mobile.

Valores estimados a partir das imagens são hipóteses e devem ser validados por screenshots.

## Fase 3 — Plano curto

Organize o trabalho em: base/tokens; navegação; seções; responsividade; interações; integrações; validação técnica; validação visual. Em seguida, implemente sem esperar confirmação, salvo decisão realmente bloqueante.

## Fase 4 — Implementação

- Reutilize padrões existentes; não crie um sistema paralelo sem necessidade.
- Implemente macroestrutura antes de efeitos e microinterações.
- Use HTML semântico, foco visível, teclado, labels, contraste e reduced-motion.
- Use os textos como HTML, nunca embutidos em screenshots.
- Use a fotografia real de Rafael e os logos originais.
- Não use dados, métricas, projetos, depoimentos ou resultados fictícios.
- Mantenha os placeholders honestos de projetos e vídeo.
- Implemente mobile como composição intencional conforme as referências mobile.
- Formulário deve ter validação, loading, sucesso e erro.
- WhatsApp deve apontar para `https://wa.me/5554999102656`.
- Não instalar Analytics ou Pixel sem IDs.

## Fase 5 — Verificação técnica

Execute os comandos adequados de instalação, lint, typecheck, testes e build. Corrija erros causados pelas alterações. Verifique console, links, menu, FAQ, formulário e WhatsApp.

## Fase 6 — Validação visual obrigatória

1. Rode o site em navegador real.
2. Capture a página em 1440px e 390px, depois verifique 1280px, 1024px, 768px e 360px.
3. Use zoom de 100% e aguarde fontes e assets.
4. Compare referência e implementação por seção.
5. Classifique diferenças em P0, P1, P2 e P3 conforme o pacote.
6. Corrija todos os P0/P1 e P2 perceptíveis.
7. Gere novas screenshots e repita até atingir o aceite.

Não declare fidelidade visual apenas porque o projeto compila. Caso a captura automatizada seja impossível, informe a limitação e entregue um checklist manual exato.

## Entrega

Ao concluir, informe:

1. resultado alcançado;
2. arquivos principais alterados;
3. comandos e verificações executados;
4. viewports comparados;
5. diferenças restantes;
6. suposições adotadas;
7. pendências externas.
