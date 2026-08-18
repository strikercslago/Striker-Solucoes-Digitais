import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "C:/Users/Tuwka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);

const outputDir = "visual-checks";
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(`${outputDir}/scale`, { recursive: true });

const viewports = [
  { name: "user-wide-1900x914", width: 1900, height: 914, screenshot: true },
  { name: "notebook-1536x730", width: 1536, height: 730, screenshot: true },
  { name: "desktop-1440x800", width: 1440, height: 800, screenshot: true },
  { name: "notebook-1366x768", width: 1366, height: 768, screenshot: true },
  { name: "compact-1280x720", width: 1280, height: 720, screenshot: true },
  { name: "tablet-768x1024", width: 768, height: 1024, screenshot: true },
  { name: "mobile-390x844", width: 390, height: 844, screenshot: true },
  { name: "narrow-360x800", width: 360, height: 800, screenshot: true },
];

const browser = await chromium.launch();
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(800);

  const metrics = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    whatsappLinks: document.querySelectorAll('a[href^="https://wa.me/5554999102656"]').length,
    localWhatsappMentioned: document.body.textContent.includes("(54) 99910-2656"),
    headerPosition: getComputedStyle(document.querySelector(".site-header")).position,
    iconCount: document.querySelectorAll("svg.icon").length,
    benefitsCardCount: document.querySelectorAll(".benefits .benefit-card").length,
    segmentChipCount: document.querySelectorAll(".audience .segment-chip").length,
    scale: (() => {
      const read = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
          fontSize: style.fontSize,
          lineHeight: style.lineHeight,
          gap: style.gap,
          columnGap: style.columnGap,
          rowGap: style.rowGap,
          minHeight: style.minHeight,
          borderRadius: style.borderRadius,
        };
      };
      return {
        container: read(".container"),
        benefits: read(".benefits"),
        benefitsH2: read(".benefits h2"),
        benefitGrid: read(".benefits .benefit-grid"),
        benefitCard: read(".benefits .benefit-card"),
        benefitIcon: read(".benefits .benefit-icon"),
        benefitSvg: read(".benefits .benefit-icon .icon"),
        audience: read(".audience"),
        audienceH2: read(".audience h2"),
        segmentGrid: read(".audience .segment-grid"),
        segmentChip: read(".audience .segment-chip"),
        segmentIcon: read(".audience .segment-chip .icon"),
      };
    })(),
    hero: ["header", "slogan", "h1", "lead", "actions", "mockup", "strip"].reduce((acc, key) => {
      const selector = {
        header: ".site-header",
        slogan: ".slogan",
        h1: "h1",
        lead: ".lead",
        actions: ".hero-actions",
        mockup: ".device-stage",
        strip: ".hero-feature-strip",
      }[key];
      const element = document.querySelector(selector);
      const rect = element?.getBoundingClientRect();
      acc[key] = rect
        ? {
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            visible: rect.top < window.innerHeight && rect.bottom > 0,
          }
        : null;
      return acc;
    }, {}),
  }));
  metrics.hero.stripStartsInFirstView = metrics.hero.strip?.top < metrics.innerHeight;
  metrics.hero.mockupAndCtasShareFirstView =
    Boolean(metrics.hero.actions?.visible) && Boolean(metrics.hero.mockup?.visible);
  metrics.consoleErrors = consoleErrors;

  const sections = await page.evaluate(() =>
    ["inicio", "solucoes", "processo", "projetos", "sobre", "contato"].map((id) => {
      const element = document.getElementById(id);
      if (!element) return { id, missing: true };
      const rect = element.getBoundingClientRect();
      return {
        id,
        top: Math.round(rect.top + scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    }),
  );

  if (viewport.screenshot) {
    await page.screenshot({
      path: `${outputDir}/scale/hero-${viewport.width}x${viewport.height}.png`,
      fullPage: false,
    });
  }

  if (
    viewport.name === "notebook-1536x730" ||
    viewport.name === "desktop-1440x800" ||
    viewport.name === "mobile-390x844"
  ) {
    await page.locator(".benefits").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector(".benefits")?.classList.contains("is-visible"));
    await page.waitForTimeout(500);
    await page.locator(".benefits").screenshot({
      path: `${outputDir}/scale/benefits-${viewport.width}x${viewport.height}.png`,
    });
    await page.locator(".audience").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector(".audience")?.classList.contains("is-visible"));
    await page.waitForTimeout(500);
    await page.locator(".audience").screenshot({
      path: `${outputDir}/scale/audience-${viewport.width}x${viewport.height}.png`,
    });
  }

  if (viewport.name === "notebook-1536x730") {
    await page.evaluate(() => window.scrollTo(0, document.querySelector(".benefits").offsetTop));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `${outputDir}/scale/benefits-top-${viewport.width}x${viewport.height}.png`,
      fullPage: false,
    });
  }

  if (viewport.name === "mobile-390x844") {
    await page.getByRole("button", { name: /abrir menu/i }).click();
    metrics.menuVisible = await page
      .locator("#mobile-menu")
      .evaluate((element) => getComputedStyle(element).pointerEvents !== "none");
    await page.keyboard.press("Escape");
    metrics.menuClosed = await page
      .locator("#mobile-menu")
      .evaluate((element) => getComputedStyle(element).pointerEvents === "none");
  }

  await page.getByRole("button", { name: /2\. Domínio/i }).click().catch(() => {});
  metrics.faqOpen = await page.locator("#faq-panel-1").isVisible().catch(() => false);

  if (viewport.name === "desktop-1440x800") {
    await page.locator("input[name=nome]").fill("Teste STRIKER");
    await page.locator("input[name=empresa]").fill("Empresa de teste");
    await page.locator("input[name=whatsapp]").fill("(54) 99910-2656");
    await page.locator("input[name=email]").fill("teste@example.com");
    await page.locator("select[name=servico]").selectOption({ label: "Desenvolvimento de site" });
    await page.locator("textarea[name=mensagem]").fill("Gostaria de uma análise gratuita.");
    await page.locator("input[name=consentimento]").check();
    metrics.formReady = await page.locator("button[type=submit]").isEnabled();
    const popupPromise = page.waitForEvent("popup", { timeout: 5_000 }).catch(() => null);
    await page.locator("button[type=submit]").click();
    const popup = await popupPromise;
    metrics.formOpensWhatsapp = Boolean(popup);
    metrics.formPopupUrl = popup?.url() ?? null;
    await popup?.close().catch(() => {});
    for (const href of ["#solucoes", "#processo", "#projetos", "#sobre", "#contato"]) {
      const before = await page.evaluate(() => window.scrollY);
      await page.locator(`.desktop-nav a[href="${href}"]`).click();
      await page.waitForTimeout(250);
      const after = await page.evaluate(() => window.scrollY);
      metrics[`anchor_${href.slice(1)}`] = after !== before || href === "#solucoes";
    }
  }

  results.push({ viewport, metrics, sections });
  await page.close();
}

await browser.close();

fs.writeFileSync(`${outputDir}/report.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
