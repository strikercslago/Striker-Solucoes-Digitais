import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "C:/Users/Tuwka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);

const label = process.argv[2] ?? "check";
const outputDir = "visual-checks/process-faq";
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [
  { width: 1536, height: 730 },
  { width: 1440, height: 800 },
  { width: 1366, height: 768 },
  { width: 390, height: 844 },
  { width: 360, height: 800 },
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

  const metrics = await page.evaluate(() => {
    const read = (selector) => {
      const element = document.querySelector(selector);
      if (!element) return null;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        selector,
        width: Number(rect.width.toFixed(2)),
        height: Number(rect.height.toFixed(2)),
        top: Number(rect.top.toFixed(2)),
        bottom: Number(rect.bottom.toFixed(2)),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        marginTop: style.marginTop,
        marginBottom: style.marginBottom,
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        maxWidth: style.maxWidth,
        gap: style.gap,
        color: style.color,
        background: style.backgroundImage,
        display: style.display,
        alignItems: style.alignItems,
        justifyContent: style.justifyContent,
        gridTemplateColumns: style.gridTemplateColumns,
      };
    };

    const process = document.querySelector(".process");
    const projects = document.querySelector(".projects");
    const processRect = process?.getBoundingClientRect();
    const projectsRect = projects?.getBoundingClientRect();
    const circles = [...document.querySelectorAll(".timeline-step > span")].map((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        text: element.textContent,
        width: Number(rect.width.toFixed(2)),
        height: Number(rect.height.toFixed(2)),
        top: Number(rect.top.toFixed(2)),
        left: Number(rect.left.toFixed(2)),
        color: style.color,
        fontSize: style.fontSize,
        background: style.backgroundImage,
        display: style.display,
        placeItems: style.placeItems,
        zIndex: style.zIndex,
      };
    });

    const faqButtons = [...document.querySelectorAll(".faq-item button")].map((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const firstSpan = element.querySelector("span:first-child");
      const lastSpan = element.querySelector("span:last-child");
      const firstRect = firstSpan?.getBoundingClientRect();
      const lastRect = lastSpan?.getBoundingClientRect();
      return {
        text: firstSpan?.textContent,
        expanded: element.getAttribute("aria-expanded"),
        height: Number(rect.height.toFixed(2)),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        display: style.display,
        alignItems: style.alignItems,
        gap: style.gap,
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        textCenterOffset: firstRect ? Number(((firstRect.top + firstRect.height / 2) - (rect.top + rect.height / 2)).toFixed(2)) : null,
        iconCenterOffset: lastRect ? Number(((lastRect.top + lastRect.height / 2) - (rect.top + rect.height / 2)).toFixed(2)) : null,
      };
    });

    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      container: read(".container"),
      process: read(".process"),
      processHeading: read(".process .section-heading"),
      processEyebrow: read(".process .eyebrow"),
      processTitle: read(".process h2"),
      processIntro: read(".process .section-heading p:last-child"),
      timeline: read(".timeline"),
      timelineStep: read(".timeline-step"),
      timelineTitle: read(".timeline-step h3"),
      timelineDescription: read(".timeline-step p"),
      processFooter: read(".process-footer"),
      processDeadline: read(".process-footer > span"),
      processCta: read(".process-footer .button"),
      processHeight: processRect ? Number(processRect.height.toFixed(2)) : null,
      projectsTopRelativeToProcess: processRect && projectsRect ? Number((projectsRect.top - processRect.top).toFixed(2)) : null,
      circles,
      faq: read(".faq"),
      faqGrid: read(".faq-grid"),
      faqTrigger: read(".faq-item button"),
      faqQuestion: read(".faq-item button span:first-child"),
      faqIcon: read(".faq-item button span:last-child"),
      faqAnswer: read(".faq-item div"),
      faqButtons,
    };
  });

  await page.locator(".process").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.locator(".process").screenshot({
    path: `${outputDir}/${label}-process-${viewport.width}x${viewport.height}.png`,
  });

  if (viewport.width >= 861) {
    await page.evaluate(() => window.scrollTo(0, document.querySelector(".process").offsetTop));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `${outputDir}/${label}-process-viewport-${viewport.width}x${viewport.height}.png`,
      fullPage: false,
    });
  }

  await page.locator(".faq").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: `${outputDir}/${label}-faq-first-open-${viewport.width}x${viewport.height}.png`,
    fullPage: false,
  });

  await page.locator("#faq-button-2").click();
  await page.waitForTimeout(250);
  await page.screenshot({
    path: `${outputDir}/${label}-faq-third-open-${viewport.width}x${viewport.height}.png`,
    fullPage: false,
  });

  results.push({ viewport, metrics });
  await page.close();
}

await browser.close();

fs.writeFileSync(`${outputDir}/${label}-report.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
