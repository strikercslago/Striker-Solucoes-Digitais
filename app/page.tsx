"use client";

import { FormEvent, KeyboardEvent, ReactNode, useEffect, useMemo, useState } from "react";

const iconPaths: Record<string, ReactNode> = {
  alert: <><path d="M12 3 3.7 6.5v5.8c0 5.1 3.5 8 8.3 9.7 4.8-1.7 8.3-4.6 8.3-9.7V6.5L12 3Z" /><path d="M12 8v5" /><path d="M12 17h.01" /></>,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M4 10h16" /></>,
  case: <><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 7V5h6v2" /><path d="M4 12h16" /></>,
  chart: <><path d="M4 18 9 13l4 3 7-9" /><path d="M15 7h5v5" /></>,
  chat: <><path d="M5 5h14v10H9l-4 4V5Z" /><path d="M8 9h8" /><path d="M8 12h5" /></>,
  blocks: <><rect x="4" y="4" width="6" height="6" rx="1.2" /><rect x="14" y="4" width="6" height="6" rx="1.2" /><rect x="4" y="14" width="6" height="6" rx="1.2" /><rect x="14" y="14" width="6" height="6" rx="1.2" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  devices: <><rect x="3" y="5" width="13" height="10" rx="1.5" /><rect x="17" y="9" width="4" height="8" rx="1" /><path d="M8 19h6" /><path d="M11 15v4" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.7 2.7 0 1 1 4.6 2c-1.2.9-2.2 1.4-2.2 3" /><path d="M12 18h.01" /></>,
  home: <><path d="M4 11 12 4l8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-6h4v6" /></>,
  laptop: <><rect x="5" y="5" width="14" height="10" rx="1.5" /><path d="M3 19h18" /></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  mail: <><rect x="4" y="6" width="16" height="12" rx="2" /><path d="m4 8 8 6 8-6" /></>,
  medical: <><path d="M12 5v14" /><path d="M5 12h14" /><circle cx="12" cy="12" r="8" /></>,
  messageMore: <><path d="M5 5h14v11H9l-4 4V5Z" /><path d="M9 11h.01" /><path d="M12 11h.01" /><path d="M15 11h.01" /></>,
  menu: <><path d="M5 7h14" /><path d="M5 12h14" /><path d="M5 17h14" /></>,
  minus: <path d="M5 12h14" />,
  mind: <><path d="M9 18H7a4 4 0 0 1-1-7.9A5.5 5.5 0 0 1 16.5 8c2.4.4 4.2 2.5 4.2 5 0 2.8-2.2 5-5 5H15" /><path d="M9 18c0-3 6-3 6 0" /></>,
  palette: <><path d="M12 4a8 8 0 0 0 0 16h1.5a2 2 0 0 0 1.7-3l-.2-.3a1.7 1.7 0 0 1 1.5-2.6H18a4 4 0 0 0 3.7-4.9A10 10 0 0 0 12 4Z" /><path d="M7.5 11h.01" /><path d="M10 7.5h.01" /><path d="M14 7.5h.01" /></>,
  pen: <><path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z" /><path d="m13 7 4 4" /></>,
  pin: <><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  panelHome: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 9h16" /><path d="m8 15 4-3 4 3" /><path d="M10 18v-4h4v4" /></>,
  post: <><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M8 9h8" /><path d="M8 13h8" /><path d="M8 17h5" /></>,
  scale: <><path d="M12 4v16" /><path d="M5 7h14" /><path d="M7 7l-3 6h6L7 7Z" /><path d="M17 7l-3 6h6l-3-6Z" /></>,
  send: <><path d="m21 3-8.5 18-3-8-7.5-3L21 3Z" /><path d="m9.5 12.5 4-4" /></>,
  shield: <><path d="M12 3 4.5 6.2v5.5c0 4.8 3.2 7.9 7.5 9.3 4.3-1.4 7.5-4.5 7.5-9.3V6.2L12 3Z" /><path d="m8.8 12 2.2 2.2 4.5-5" /></>,
  spark: <><path d="M12 3c1.6 4.5 4.5 7.4 9 9-4.5 1.6-7.4 4.5-9 9-1.6-4.5-4.5-7.4-9-9 4.5-1.6 7.4-4.5 9-9Z" /></>,
  stethoscope: <><path d="M6 4v5a4 4 0 0 0 8 0V4" /><path d="M4 4h4" /><path d="M12 4h4" /><path d="M14 9a5 5 0 0 0 5 5v2.5a3.5 3.5 0 0 1-7 0V15" /><circle cx="19" cy="14" r="1.5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3" /><path d="M21 12h-3" /></>,
  tool: <><path d="m14.7 6.3 3 3" /><path d="M5 19 16.5 7.5a3 3 0 0 0-4-4L11 5l3 3" /><path d="M4 20l1-4 3 3-4 1Z" /></>,
  tooth: <><path d="M8 4c1.5 0 2.5 1 4 1s2.5-1 4-1c2.2 0 4 1.8 4 4 0 4.6-2.8 12-5 12-1.2 0-1-4-3-4s-1.8 4-3 4c-2.2 0-5-7.4-5-12 0-2.2 1.8-4 4-4Z" /></>,
  trending: <><path d="M4 18h16" /><path d="M6 16v-3" /><path d="M11 16v-6" /><path d="M16 16V7" /><path d="m6 10 5-4 4 2 4-5" /><path d="M15 3h4v4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function IconGlyph({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={`icon icon-${name} ${className}`} aria-hidden="true" viewBox="0 0 24 24">
      {iconPaths[name] ?? iconPaths.spark}
    </svg>
  );
}

const whatsappLocalNumber = "54999102656";
const whatsappNumber = `55${whatsappLocalNumber}`;

function buildWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const whatsappUrl = buildWhatsappUrl(
  "Olá, STRIKER. Quero solicitar uma análise gratuita para melhorar a presença digital da minha empresa.",
);

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
  ["Comunicação mais clara", "O visitante entende seus serviços e diferenciais com facilidade.", "messageMore"],
  ["Melhor percepção de valor", "Sua empresa apresenta uma estrutura compatível com a qualidade do seu trabalho.", "spark"],
  ["Mais oportunidades de contato", "Cada seção orienta o usuário em direção ao próximo passo.", "trending"],
  ["Presença digital própria", "Um espaço digital que pertence à sua empresa e trabalha todos os dias.", "panelHome"],
  ["Estrutura preparada para crescer", "Uma base profissional para evoluir conteúdo, páginas e comunicação.", "blocks"],
];

const segments = [
  ["Dentistas", "tooth"],
  ["Advogados", "scale"],
  ["Médicos", "stethoscope"],
  ["Psicólogos", "mind"],
  ["Consultores", "case"],
  ["Prestadores de serviço", "tool"],
];

const processSteps = [
  ["01", "Diagnóstico", "Entendemos sua empresa, seus serviços, seu público e seus objetivos."],
  ["02", "Planejamento", "Definimos estratégia, escopo e prioridades do projeto."],
  ["03", "Direção visual", "Criamos a identidade visual e a experiência do site."],
  ["04", "Desenvolvimento", "Transformamos o design em um site funcional."],
  ["05", "Revisão", "Ajustamos cada detalhe com base no seu feedback."],
  ["06", "Publicação", "Colocamos seu site no ar com segurança e performance."],
  ["07", "Acompanhamento", "Monitoramos, atualizamos e apoiamos sua evolução."],
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
      <div className="content-card">
        <b>Criação de conteúdo</b>
        <span><IconGlyph name="post" /> Post institucional</span>
        <span><IconGlyph name="palette" /> Identidade visual</span>
        <span><IconGlyph name="calendar" /> Próximas publicações</span>
      </div>
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

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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

    const message = [
      "Olá, STRIKER. Quero solicitar uma análise gratuita.",
      "",
      `Nome: ${String(data.get("nome"))}`,
      `Empresa: ${String(data.get("empresa"))}`,
      `WhatsApp: ${String(data.get("whatsapp"))}`,
      `E-mail: ${String(data.get("email"))}`,
      `Serviço de interesse: ${String(data.get("servico"))}`,
      `Sobre o projeto: ${String(data.get("mensagem"))}`,
    ].join("\n");

    setStatus("loading");
    const opened = window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    if (opened) {
      setStatus("success");
      form.reset();
    } else {
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

      <section className="diagnosis section-light reveal" aria-labelledby="diagnostico-title">
        <div className="container diagnosis-grid">
          <div>
            <p className="eyebrow">Presença digital</p>
            <h2 id="diagnostico-title">Ser excelente no que você faz pode não ser suficiente se o mercado não consegue perceber isso.</h2>
            <p className="section-text">Antes de entrar em contato, muitas pessoas pesquisam sua empresa, analisam sua apresentação e comparam suas opções.</p>
          </div>
          <div className="problem-grid">
            {problems.map(({ icon, title, text }) => (
              <article className="problem-card reveal-child" key={title}>
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

      <section className="dark-transition reveal">
        <div className="container narrow">
          <h2>Seu trabalho já possui valor. Sua presença digital precisa demonstrá-lo.</h2>
          <p>A STRIKER transforma experiência e diferenciais em uma estrutura digital profissional, organizada e preparada para conduzir o visitante até o contato.</p>
          <a className="button primary" href="#contato" onClick={handleAnchorClick}>Quero melhorar minha presença digital</a>
        </div>
      </section>

      <section className="solutions section-light reveal" id="solucoes">
        <div className="container split">
          <div>
            <p className="eyebrow">Desenvolvimento de sites</p>
            <h2>Seu site deve trabalhar pelo crescimento da sua empresa.</h2>
            <p className="section-text">Criamos uma presença digital que organiza sua mensagem, valoriza seus diferenciais e conduz o visitante até o próximo passo.</p>
          </div>
          <div className="solution-grid">
            {solutionCards.map(({ icon, title, text, featured }) => (
              <article className={featured ? "solution-card featured reveal-child" : "solution-card reveal-child"} key={title}>
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

      <section className="benefits section-tint reveal" aria-labelledby="benefits-title">
        <div className="container benefits-inner">
          <p className="eyebrow">O que muda</p>
          <h2 id="benefits-title">Uma presença digital que trabalha a favor da sua empresa.</h2>
          <div className="benefit-grid">
            {benefits.map(([title, text, icon]) => (
              <article className="benefit-card reveal-child" key={String(title)}>
                <span className="benefit-icon">
                  <IconGlyph name={String(icon)} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <span className="benefit-rule" aria-hidden="true" />
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience section-light reveal" aria-labelledby="audience-title">
        <div className="container audience-grid">
          <div className="audience-copy">
            <p className="eyebrow">Para quem é</p>
            <h2 id="audience-title">Para profissionais que querem ser reconhecidos pelo valor do próprio trabalho.</h2>
            <p className="section-text">A STRIKER atende empresas e especialistas que precisam transformar competência em uma presença digital clara, confiável e preparada para gerar oportunidades.</p>
          </div>
          <div className="segment-grid" aria-label="Segmentos atendidos">
            {segments.map(([label, icon]) => (
              <span className="segment-chip reveal-child" key={String(label)}><IconGlyph name={String(icon)} />{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="process reveal" id="processo">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Um processo claro, estratégico e acompanhado do início ao fim.</h2>
            <p>Antes de desenvolver, entendemos o negócio, o público e os objetivos da empresa. Assim, cada decisão possui uma razão.</p>
          </div>
          <div className="timeline">
            {processSteps.map(([number, title, text]) => (
              <article className="timeline-step reveal-child" key={number}>
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

      <section className="projects reveal" id="projetos">
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

      <section className="social section-tint reveal">
        <div className="container social-grid">
          <SocialMockup />
          <div>
            <p className="eyebrow">Presença digital completa</p>
            <h2>Seu site apresenta. Suas redes sociais mantêm sua empresa presente.</h2>
            <p className="section-text">A STRIKER também oferece gerenciamento estratégico de redes sociais para empresas que precisam manter uma comunicação profissional e consistente.</p>
            <div className="social-list">
              {socialItems.map(([title, text, icon]) => (
                <article className="reveal-child" key={String(title)}>
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

      <section className="founder section-light reveal" id="sobre">
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

      <section className="testimonial reveal">
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

      <section className="faq section-light reveal" aria-labelledby="faq-title">
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
                    className="faq-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="faq-question">{index + 1}. {item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <IconGlyph name={isOpen ? "minus" : "plus"} />
                    </span>
                  </button>
                  <div
                    className="faq-answer"
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

      <section className="final-cta reveal">
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

      <section className="contact section-tint reveal" id="contato">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Conte-nos um pouco sobre sua empresa.</h2>
            <p>Preencha o formulário ao lado e nossa equipe entrará em contato para entender suas necessidades e sugerir os próximos passos.</p>
            <div className="contact-methods">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><IconGlyph name="chat" /> <span><strong>WhatsApp</strong>(54) 99910-2656</span></a>
              <a href="mailto:rafael.gomeslago1@gmail.com"><IconGlyph name="mail" /> <span><strong>E-mail</strong>rafael.gomeslago1@gmail.com</span></a>
            </div>
          </div>
          <form
            className="contact-form"
            name="contato-striker"
            onSubmit={submitForm}
            noValidate
          >
            <label>Nome<input name="nome" placeholder="Seu nome" aria-invalid={Boolean(errors.nome)} /></label>
            {errors.nome && <small>{errors.nome}</small>}
            <label>Empresa<input name="empresa" placeholder="Nome da empresa" aria-invalid={Boolean(errors.empresa)} /></label>
            {errors.empresa && <small>{errors.empresa}</small>}
            <label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" aria-invalid={Boolean(errors.whatsapp)} /></label>
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
            {status === "success" && <p className="form-message success"><IconGlyph name="check" /> Abrimos o WhatsApp com sua solicitação preenchida. Revise e envie a mensagem para concluir o contato.</p>}
            {status === "error" && <p className="form-message error">Não foi possível abrir o WhatsApp automaticamente. Use o botão direto ou tente novamente.</p>}
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><IconGlyph name="chat" /> WhatsApp: (54) 99910-2656</a>
            <a href="mailto:rafael.gomeslago1@gmail.com"><IconGlyph name="mail" /> rafael.gomeslago1@gmail.com</a>
          </div>
          <div>
            <h3>Atendimento</h3>
            <p><IconGlyph name="pin" /> Todo o Brasil</p>
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
