import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "C:/Users/Tuwka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);

const label = process.argv[2] ?? "check";
const outputDir = "visual-checks/hero-fold";
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [
  { width: 1536, height: 730 },
  { width: 1440, height: 800 },
  { width: 1366, height: 768 },
  { width: 1280, height: 720 },
  { width: 1920, height: 900 },
  { width: 390, height: 844 },
];

const browser = await chromium.launch();
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 0));

  const metrics = await page.evaluate(() => {
    const readBox = (selector) => {
      const element = document.querySelector(selector);
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        selector,
        top: Number(rect.top.toFixed(2)),
        bottom: Number(rect.bottom.toFixed(2)),
        width: Number(rect.width.toFixed(2)),
        height: Number(rect.height.toFixed(2)),
        marginTop: style.marginTop,
        marginBottom: style.marginBottom,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        position: style.position,
        minHeight: style.minHeight,
        heightStyle: style.height,
        overflow: `${style.overflowX} ${style.overflowY}`,
        transform: style.transform,
      };
    };

    const bar = document.querySelector(".hero-feature-strip");
    const barRect = bar?.getBoundingClientRect();
    const ancestors = [];
    let current = bar;
    while (current) {
      const rect = current.getBoundingClientRect();
      const style = getComputedStyle(current);
      ancestors.push({
        tag: current.tagName.toLowerCase(),
        className: current.className || null,
        top: Number(rect.top.toFixed(2)),
        bottom: Number(rect.bottom.toFixed(2)),
        height: Number(rect.height.toFixed(2)),
        position: style.position,
        minHeight: style.minHeight,
        heightStyle: style.height,
        overflow: `${style.overflowX} ${style.overflowY}`,
        marginTop: style.marginTop,
        marginBottom: style.marginBottom,
        transform: style.transform,
      });
      current = current.parentElement;
    }

    const header = readBox(".site-header");
    const hero = readBox(".hero");
    const copy = readBox(".hero-copy");
    const slogan = readBox(".slogan");
    const h1 = readBox("h1");
    const lead = readBox(".lead");
    const actions = readBox(".hero-actions");
    const mockup = readBox(".device-stage");
    const laptop = readBox(".laptop");
    const phone = readBox(".phone");
    const strip = readBox(".hero-feature-strip");

    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      scrollY: window.scrollY,
      header,
      headerTotalHeight: header ? Number(header.bottom.toFixed(2)) : null,
      textContentHeight: copy?.height ?? null,
      mockupHeight: mockup?.height ?? null,
      barHeight: strip?.height ?? null,
      barTop: barRect ? Number(barRect.top.toFixed(2)) : null,
      barBottom: barRect ? Number(barRect.bottom.toFixed(2)) : null,
      remainingSpace: barRect ? Number((window.innerHeight - barRect.bottom).toFixed(2)) : null,
      accepted: barRect ? barRect.bottom <= window.innerHeight - 8 : false,
      totalCompositionHeight: barRect ? Number(barRect.bottom.toFixed(2)) : null,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      hero,
      copy,
      slogan,
      h1,
      lead,
      actions,
      mockup,
      laptop,
      phone,
      strip,
      ancestors,
    };
  });

  const suffix = `${viewport.width}x${viewport.height}`;
  await page.screenshot({
    path: `${outputDir}/${label}-hero-${suffix}.png`,
    fullPage: false,
  });
  results.push({ viewport, metrics, screenshot: `${outputDir}/${label}-hero-${suffix}.png` });
  await page.close();
}

await browser.close();

fs.writeFileSync(`${outputDir}/${label}-report.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
