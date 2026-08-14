"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useState } from "react";

function IconGlyph({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`glyph glyph-${name} ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

const whatsappNumber = "5554999102656";
const whatsappMessage = encodeURIComponent(
  "Olá, STRIKER. Quero solicitar uma análise gratuita para melhorar a presença digital da minha empresa.",
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navItems = [
  ["Soluções", "#solucoes"],
  ["Processo", "#processo"],
  ["Projetos", "#projetos"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

const problems = [
  {
    icon: "alert",
    title: "Sua empresa perde autoridade",
    text: "Uma apresentação digital fraca pode reduzir a percepção de valor do seu trabalho.",
  },
  {
    icon: "help",
    title: "Seus serviços não são compreendidos",
    text: "Sem uma estrutura clara, o visitante pode sair sem entender o que você oferece.",
  },
  {
    icon: "lock",
    title: "Você depende de plataformas que não controla",
    text: "Redes sociais são importantes, mas seu site é o espaço próprio da sua empresa.",
  },
  {
    icon: "send",
    title: "O contato não acontece",
    text: "Quando o próximo passo não está claro, oportunidades podem ser perdidas.",
  },
];

const solutionCards = [
  {
    icon: "target",
    title: "Estratégia e planejamento",
    text: "Definimos objetivos, público, posicionamento e estrutura ideal para o seu site.",
  },
  {
    icon: "devices",
    title: "Design personalizado",
    text: "Layouts exclusivos que refletem sua marca e criam uma experiência única.",
    featured: true,
  },
  {
    icon: "pen",
    title: "Conteúdo profissional",
    text: "Textos claros e objetivos que comunicam valor e geram confiança no visitante.",
  },
  {
    icon: "laptop",
    title: "Experiência responsiva",
    text: "Navegação perfeita em qualquer dispositivo, com velocidade e usabilidade.",
  },
  {
    icon: "chat",
    title: "Integração com WhatsApp",
    text: "Aproximação imediata com seus clientes para mais conversas e oportunidades.",
  },
  {
    icon: "chart",
    title: "Acompanhamento após a entrega",
    text: "Suporte contínuo para manter seu site seguro, atualizado e eficiente.",
  },
];

const benefits = [
  ["Mais autoridade", "Uma apresentação profissional aumenta a confiança em sua empresa.", "shield"],
  ["Mensagem mais clara", "O visitante entende seus serviços e diferenciais com facilidade.", "chat"],
  ["Mais oportunidades", "Cada seção orienta o usuário em direção ao contato.", "chart"],
  ["Presença própria", "Um espaço digital que pertence à sua empresa e trabalha todos os dias.", "home"],
];

const segments = [
  ["Dentistas", "tooth"],
  ["Advogados", "scale"],
  ["Médicos", "medical"],
  ["Psicólogos", "mind"],
  ["Consultores", "case"],
  ["Prestadores de serviço", "tool"],
];

const processSteps = [
  ["01", "Diagnóstico", "Entendemos sua empresa, seus serviços, seu público e seus objetivos."],
  ["02", "Estratégia", "Organizamos a mensagem, a estrutura das páginas e o caminho até o contato."],
  ["03", "Design e desenvolvimento", "Transformamos a estratégia em uma experiência profissional, responsiva e funcional."],
  ["04", "Entrega e acompanhamento", "Publicamos, orientamos sua equipe e permanecemos presentes após a entrega."],
];

const socialItems = [
  ["Planejamento de conteúdo", "Organizamos temas e publicações alinhados aos seus objetivos.", "calendar"],
  ["Identidade visual consistente", "Mantemos a comunicação alinhada à sua marca em todos os canais.", "palette"],
  ["Comunicação alinhada ao negócio", "Conteúdo que reforça sua autoridade e gera conexões reais.", "chat"],
];

const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O prazo médio é de 7 a 15 dias úteis, contado após o recebimento dos materiais necessários.",
  },
  {
    question: "Domínio e hospedagem estão incluídos?",
    answer: "Sim, domínio e hospedagem entram na publicação inicial. Após o período incluído, a renovação é paga pelo cliente.",
  },
  {
    question: "A STRIKER também produz os textos e as imagens?",
    answer: "Sim. A estrutura, textos e direção visual podem ser desenvolvidos com base nas informações reais da empresa.",
  },
  {
    question: "Quantas revisões estão incluídas?",
    answer: "Estão incluídas duas rodadas de revisões para ajustar conteúdo, layout e detalhes antes da publicação.",
  },
  {
    question: "Existe suporte após a entrega?",
    answer: "Sim. O projeto inclui 30 dias de suporte técnico após a entrega.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento pode ser parcelado por contrato, Pix ou cartão, conforme alinhamento comercial.",
  },
];

function handleAnchorClick() {
  setTimeout(() => {
    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }
  }, 0);
}

function BrowserMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "browser-mock compact" : "browser-mock"}>
      <div className="mock-top">
        <span />
        <span />
        <span />
        <i />
        <IconGlyph name="menu" />
      </div>
      <div className="mock-body">
        <div className="mock-visual">
          <div className="mock-sun" />
          <div className="mock-mountain one" />
          <div className="mock-mountain two" />
        </div>
        <div className="mock-copy">
          <b />
          <b />
          <p />
          <p />
          <button aria-label="Botão ilustrativo" />
        </div>
      </div>
      <div className="mock-features">
        <span><IconGlyph name="shield" /> <i /></span>
        <span><IconGlyph name="check" /> <i /></span>
        <span><IconGlyph name="spark" /> <i /></span>
      </div>
    </div>
  );
}

function DeviceHero() {
  return (
    <div className="device-stage" aria-label="Mockups de site responsivo">
      <div className="laptop">
        <div className="device-screen">
          <div className="mini-nav"><b>STRIKER</b><span>Soluções</span><span>Projetos</span><button>Falar com especialista</button></div>
          <div className="mini-layout">
            <div>
              <h3>Estratégia. Design. Resultado.</h3>
              <p>Sites pensados para comunicar com clareza, gerar confiança e impulsionar seu crescimento.</p>
              <button>Falar com especialista</button>
            </div>
            <div className="blue-building" />
          </div>
        </div>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-header"><b>S</b><IconGlyph name="menu" /></div>
          <div className="phone-photo" />
          <h4>Soluções digitais com foco em resultado.</h4>
          <p>Clareza, design e tecnologia para gerar oportunidades.</p>
          <button>Conhecer soluções</button>
        </div>
      </div>
    </div>
  );
}

function SocialMockup() {
  return (
    <div className="social-mock" aria-label="Mockup de gestão de redes sociais">
      <div className="calendar-card">
        <b>Calendário editorial</b>
        <div className="calendar-grid">
          {Array.from({ length: 35 }, (_, index) => (
            <span key={index} className={index === 17 ? "active" : ""}>{index + 1 <= 30 ? index + 1 : ""}</span>
          ))}
        </div>
      </div>
      <div className="metric-card"><b>Desempenho</b><strong>12,8K</strong><small>+18%</small><i /></div>
      <div className="post-phone">
        <div className="post-top"><span /><i /><i /><i /><i /></div>
        <div className="post-image"><div /></div>
        <div className="post-actions"><IconGlyph name="chat" /><IconGlyph name="send" /><span /></div>
      </div>
      <div className="planning-card"><b>Planejamento</b><span><IconGlyph name="check" /> Definição de temas</span><span><IconGlyph name="check" /> Criação de conteúdo</span><span>Revisão e ajustes</span></div>
    </div>
  );
}

function ProjectPlaceholder({ large = false }: { large?: boolean }) {
  return (
    <article className={large ? "project-card large" : "project-card"}>
      <BrowserMockup compact />
      <div className="project-info">
        <div>
          <h3>Projeto em preparação</h3>
          <p>Estudo de caso será adicionado em breve.</p>
        </div>
        <a href="#contato" onClick={handleAnchorClick}>Ver projeto <IconGlyph name="arrow" /></a>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("menu-locked", menuOpen);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-locked");
    };
  }, [menuOpen]);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    ["nome", "empresa", "whatsapp", "email", "servico", "mensagem"].forEach((field) => {
      const value = String(data.get(field) ?? "").trim();
      if (!value) nextErrors[field] = "Preencha este campo.";
    });
    if (!data.get("consentimento")) nextErrors.consentimento = "Confirme o consentimento para contato.";
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Informe um e-mail válido.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      body.append("form-name", "contato-striker");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error("Falha no envio");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function menuKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "Enter" || event.key === " ") setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio" aria-label="STRIKER início" onClick={handleAnchorClick}>
          <img src="/assets/striker-logo-horizontal.jpg" alt="STRIKER" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={handleAnchorClick}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contato" onClick={handleAnchorClick}>Solicitar análise gratuita</a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <IconGlyph name="close" /> : <IconGlyph name="menu" />}
        </button>
        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} id="mobile-menu">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} onKeyDown={menuKeyDown}>{label}</a>
          ))}
          <a className="mobile-menu-cta" href="#contato" onClick={() => setMenuOpen(false)}>Solicitar análise gratuita</a>
        </div>
      </header>

      <section className="hero section-light">
        <div className="hero-copy">
          <p className="slogan">Sites que posicionam. Experiências que convertem.</p>
          <h1>Uma presença digital à altura do seu negócio.</h1>
          <p className="lead">Desenvolvemos sites estratégicos que valorizam sua empresa, fortalecem sua autoridade e transformam visitantes em oportunidades comerciais.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contato" onClick={handleAnchorClick}>Solicitar análise gratuita</a>
            <a className="button secondary" href="#solucoes" onClick={handleAnchorClick}>Conhecer nossas soluções</a>
          </div>
        </div>
        <DeviceHero />
        <div className="hero-feature-strip" aria-label="Diferenciais da STRIKER">
          <span><IconGlyph name="target" /> Estratégia antes do design</span>
          <span><IconGlyph name="shield" /> Experiência pensada para conversão</span>
          <span><IconGlyph name="devices" /> Estrutura profissional e responsiva</span>
        </div>
      </section>

      <section className="diagnosis section-light" aria-labelledby="diagnostico-title">
        <div className="container diagnosis-grid">
          <div>
            <p className="eyebrow">Presença digital</p>
            <h2 id="diagnostico-title">Ser excelente no que você faz pode não ser suficiente se o mercado não consegue perceber isso.</h2>
            <p className="section-text">Antes de entrar em contato, muitas pessoas pesquisam sua empresa, analisam sua apresentação e comparam suas opções.</p>
          </div>
          <div className="problem-grid">
            {problems.map(({ icon, title, text }) => (
              <article className="problem-card" key={title}>
                <IconGlyph name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-transition">
        <div className="container narrow">
          <h2>Seu trabalho já possui valor. Sua presença digital precisa demonstrá-lo.</h2>
          <p>A STRIKER transforma experiência e diferenciais em uma estrutura digital profissional, organizada e preparada para conduzir o visitante até o contato.</p>
          <a className="button primary" href="#contato" onClick={handleAnchorClick}>Quero melhorar minha presença digital</a>
        </div>
      </section>

      <section className="solutions section-light" id="solucoes">
        <div className="container split">
          <div>
            <p className="eyebrow">Desenvolvimento de sites</p>
            <h2>Seu site deve trabalhar pelo crescimento da sua empresa.</h2>
            <p className="section-text">Criamos uma presença digital que organiza sua mensagem, valoriza seus diferenciais e conduz o visitante até o próximo passo.</p>
          </div>
          <div className="solution-grid">
            {solutionCards.map(({ icon, title, text, featured }) => (
              <article className={featured ? "solution-card featured" : "solution-card"} key={title}>
                <IconGlyph name={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="container mobile-solution-visual">
          <BrowserMockup />
          <ul className="feature-lines">
            <li><IconGlyph name="target" /> Estratégia antes do design</li>
            <li><IconGlyph name="user" /> Experiência pensada para conversão</li>
            <li><IconGlyph name="devices" /> Estrutura profissional e responsiva</li>
          </ul>
          <a className="button primary" href="#contato" onClick={handleAnchorClick}>Solicitar análise gratuita</a>
        </div>
      </section>

      <section className="benefits section-tint">
        <div className="container centered">
          <p className="eyebrow">O que muda</p>
          <h2>Uma presença digital que trabalha a favor da sua empresa.</h2>
          <div className="benefit-grid">
            {benefits.map(([title, text, icon]) => (
              <article className="benefit-card" key={String(title)}>
                <IconGlyph name={String(icon)} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience section-light">
        <div className="container audience-grid">
          <div>
            <p className="eyebrow">Para quem é</p>
            <h2>Para profissionais que querem ser reconhecidos pelo valor do próprio trabalho.</h2>
            <p className="section-text">A STRIKER atende empresas e especialistas que precisam transformar competência em uma presença digital clara, confiável e preparada para gerar oportunidades.</p>
          </div>
          <div className="segment-grid">
            {segments.map(([label, icon]) => (
              <span key={String(label)}><IconGlyph name={String(icon)} />{label}</span>
            ))}
            <a href="#contato" onClick={handleAnchorClick}>Quero posicionar minha empresa <IconGlyph name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="process" id="processo">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Um processo claro, estratégico e acompanhado do início ao fim.</h2>
            <p>Antes de desenvolver, entendemos o negócio, o público e os objetivos da empresa. Assim, cada decisão possui uma razão.</p>
          </div>
          <div className="timeline">
            {processSteps.map(([number, title, text]) => (
              <article className="timeline-step" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{number} — {title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="process-footer">
            <span><IconGlyph name="calendar" /> Prazo médio: 7 a 15 dias úteis</span>
            <a className="button primary" href="#contato" onClick={handleAnchorClick}>Quero começar meu projeto</a>
          </div>
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="container project-layout">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2>Cada projeto começa com um problema real a ser resolvido.</h2>
            <p>Os trabalhos da STRIKER serão apresentados aqui com contexto, decisões e resultados verificáveis.</p>
            <ProjectPlaceholder large />
          </div>
          <div className="project-stack">
            <ProjectPlaceholder />
            <ProjectPlaceholder />
          </div>
        </div>
        <p className="project-note">Em breve, novos projetos e histórias reais por aqui.</p>
      </section>

      <section className="social section-tint">
        <div className="container social-grid">
          <SocialMockup />
          <div>
            <p className="eyebrow">Presença digital completa</p>
            <h2>Seu site apresenta. Suas redes sociais mantêm sua empresa presente.</h2>
            <p className="section-text">A STRIKER também oferece gerenciamento estratégico de redes sociais para empresas que precisam manter uma comunicação profissional e consistente.</p>
            <div className="social-list">
              {socialItems.map(([title, text, icon]) => (
                <article key={String(title)}>
                  <IconGlyph name={String(icon)} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <a className="button outline-blue" href={whatsappUrl} target="_blank" rel="noreferrer">Falar sobre gestão de redes <IconGlyph name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="founder section-light" id="sobre">
        <div className="container founder-grid">
          <img src="/assets/rafael-gomes-fundador.png" alt="Rafael Gomes Lago, fundador da STRIKER" />
          <div>
            <p className="eyebrow">Quem está por trás</p>
            <h2>Tecnologia, estratégia e envolvimento de verdade.</h2>
            <h3>Rafael Gomes Lago</h3>
            <p className="role">Fundador da STRIKER</p>
            <p>Especialista em Marketing Digital e Analista e Desenvolvedor de Sistemas, Rafael sempre teve uma ligação intensa com a tecnologia. Foi dessa paixão que surgiu a vontade de ajudar empresas a apresentarem melhor o próprio valor e conquistarem novas oportunidades.</p>
            <p>A STRIKER nasceu da satisfação de transformar problemas em soluções e acompanhar cada cliente mesmo depois da entrega.</p>
            <blockquote>Não se trata apenas de entregar um site, mas de entender o negócio e permanecer presente.</blockquote>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container testimonial-grid">
          <div>
            <p className="eyebrow">Experiência do cliente</p>
            <h2>Resultados reais merecem ser contados por quem viveu a experiência.</h2>
            <p>Este espaço está preparado para receber o depoimento em vídeo de uma cliente da STRIKER.</p>
          </div>
          <div>
            <div className="video-placeholder" aria-label="Placeholder de vídeo em breve">
              <span><IconGlyph name="play" /></span>
              <strong>Depoimento em vídeo — em breve</strong>
            </div>
            <p>Nenhum depoimento fictício será utilizado.</p>
          </div>
        </div>
        <div className="container"><a className="button primary full-mobile" href="#contato" onClick={handleAnchorClick}>Quero conversar sobre meu projeto</a></div>
      </section>

      <section className="faq section-light" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Dúvidas antes de começar?</p>
            <h2 id="faq-title">Tudo o que você precisa saber antes do primeiro passo.</h2>
            <p>Reunimos as respostas para as principais dúvidas sobre o desenvolvimento do seu site.</p>
          </div>
          <div className="accordion">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="faq-item" key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{index + 1}. {item.question}</span>
                    {isOpen ? <span aria-hidden="true">−</span> : <span aria-hidden="true">+</span>}
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container conditions">
          {["2 rodadas de revisões", "30 dias de suporte técnico", "Pagamento parcelado por contrato, Pix ou cartão", "Após o período incluído, domínio e hospedagem são renovados pelo cliente."].map((item) => (
            <span key={item}><IconGlyph name="check" />{item}</span>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <p className="eyebrow">O próximo passo</p>
          <h2>Sua empresa já possui valor. Agora é hora de apresentá-lo da forma certa.</h2>
          <p>Solicite uma análise gratuita e descubra como uma presença digital mais estratégica pode fortalecer seu posicionamento e gerar novas oportunidades.</p>
          <div className="cta-actions">
            <a className="button primary" href="#contato" onClick={handleAnchorClick}>Solicitar análise gratuita</a>
            <a className="button dark-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
          </div>
          <small>A análise inicial não obriga a contratação.</small>
        </div>
      </section>

      <section className="contact section-tint" id="contato">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Conte-nos um pouco sobre sua empresa.</h2>
            <p>Preencha o formulário ao lado e nossa equipe entrará em contato para entender suas necessidades e sugerir os próximos passos.</p>
            <div className="contact-methods">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><IconGlyph name="chat" /> <span><strong>WhatsApp</strong>Fale com nossa equipe</span></a>
              <a href="mailto:rafael.gomeslago1@gmail.com"><IconGlyph name="mail" /> <span><strong>E-mail</strong>Responda quando for melhor para você</span></a>
            </div>
          </div>
          <form
            className="contact-form"
            name="contato-striker"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={submitForm}
            noValidate
          >
            <input type="hidden" name="form-name" value="contato-striker" />
            <p className="hidden-field"><label>Não preencha: <input name="bot-field" /></label></p>
            <label>Nome<input name="nome" placeholder="Seu nome" aria-invalid={Boolean(errors.nome)} /></label>
            {errors.nome && <small>{errors.nome}</small>}
            <label>Empresa<input name="empresa" placeholder="Nome da empresa" aria-invalid={Boolean(errors.empresa)} /></label>
            {errors.empresa && <small>{errors.empresa}</small>}
            <label>WhatsApp<input name="whatsapp" placeholder="(11) 99999-9999" aria-invalid={Boolean(errors.whatsapp)} /></label>
            {errors.whatsapp && <small>{errors.whatsapp}</small>}
            <label>E-mail<input name="email" type="email" placeholder="seu@email.com" aria-invalid={Boolean(errors.email)} /></label>
            {errors.email && <small>{errors.email}</small>}
            <label className="wide">Serviço de interesse
              <select name="servico" defaultValue="" aria-invalid={Boolean(errors.servico)}>
                <option value="" disabled>Selecione uma opção</option>
                <option>Desenvolvimento de site</option>
                <option>Gestão de redes sociais</option>
                <option>Site e redes sociais</option>
              </select>
            </label>
            {errors.servico && <small className="wide">{errors.servico}</small>}
            <label className="wide">Sobre o projeto
              <textarea name="mensagem" placeholder="Conte-nos brevemente sobre o que sua empresa precisa." aria-invalid={Boolean(errors.mensagem)} />
            </label>
            {errors.mensagem && <small className="wide">{errors.mensagem}</small>}
            <label className="consent wide">
              <input type="checkbox" name="consentimento" value="sim" />
              <span>Ao enviar, você concorda em ser contatado pela STRIKER sobre esta solicitação.</span>
            </label>
            {errors.consentimento && <small className="wide">{errors.consentimento}</small>}
            <button className="button primary wide" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando..." : "Enviar solicitação"}
            </button>
            {status === "success" && <p className="form-message success"><IconGlyph name="check" /> Solicitação enviada. A STRIKER entrará em contato em breve.</p>}
            {status === "error" && <p className="form-message error">Não foi possível enviar agora. Use o WhatsApp direto ou tente novamente.</p>}
            <p className="privacy wide">Seus dados serão utilizados apenas para responder ao seu contato.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="/assets/striker-logo-horizontal.jpg" alt="STRIKER" />
            <p>Sites que posicionam. Experiências que convertem.</p>
            <small>Desenvolvemos sites estratégicos que comunicam com clareza, geram confiança e impulsionam resultados reais.</small>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            <a href="#inicio" onClick={handleAnchorClick}>Início</a>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={handleAnchorClick}>{label}</a>)}
          </nav>
          <div>
            <h3>Contato</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><IconGlyph name="chat" /> WhatsApp</a>
            <a href="mailto:rafael.gomeslago1@gmail.com"><IconGlyph name="mail" /> E-mail</a>
          </div>
          <div>
            <h3>Atendimento</h3>
            <p><IconGlyph name="pin" /> Todo o Brasil</p>
            <p>Projetos selecionados no exterior</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {year} Striker Soluções Digitais. Todos os direitos reservados.</span>
          <a href="#contato" onClick={handleAnchorClick}>Política de Privacidade</a>
        </div>
      </footer>
    </main>
  );
}
