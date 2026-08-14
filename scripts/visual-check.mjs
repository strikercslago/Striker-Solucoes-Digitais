import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "C:/Users/Tuwka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);

const outputDir = "visual-checks";
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [
  { name: "desktop-1440", width: 1440, height: 1100, screenshot: true },
  { name: "mobile-390", width: 390, height: 1200, screenshot: true },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "tablet-1024", width: 1024, height: 900 },
  { name: "tablet-768", width: 768, height: 1000 },
  { name: "mobile-360", width: 360, height: 1000 },
];

const browser = await chromium.launch();
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(800);

  const metrics = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    whatsappLinks: document.querySelectorAll('a[href^="https://wa.me/5554999102656"]').length,
  }));

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
      path: `${outputDir}/${viewport.name}-full.png`,
      fullPage: true,
    });
  }

  if (viewport.name === "mobile-390") {
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

  if (viewport.name === "desktop-1440") {
    await page.locator("input[name=nome]").fill("Teste STRIKER");
    await page.locator("input[name=empresa]").fill("Empresa de teste");
    await page.locator("input[name=whatsapp]").fill("(54) 99910-2656");
    await page.locator("input[name=email]").fill("teste@example.com");
    await page.locator("select[name=servico]").selectOption({ label: "Desenvolvimento de site" });
    await page.locator("textarea[name=mensagem]").fill("Gostaria de uma análise gratuita.");
    await page.locator("input[name=consentimento]").check();
    metrics.formReady = await page.locator("button[type=submit]").isEnabled();
  }

  results.push({ viewport, metrics, sections });
  await page.close();
}

await browser.close();

fs.writeFileSync(`${outputDir}/report.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
