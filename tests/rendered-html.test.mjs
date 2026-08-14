import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the STRIKER landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /STRIKER Soluções Digitais/i);
  assert.match(html, /Uma presença digital à altura do seu negócio\./i);
  assert.match(html, /Sites que posicionam\. Experiências que convertem\./i);
  assert.match(html, /Projeto em preparação/i);
  assert.match(html, /Depoimento em vídeo — em breve/i);
  assert.match(html, /https:\/\/wa\.me\/5554999102656/i);
  assert.match(html, /contato-striker/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps approved assets and package documentation in place", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.match(page, /rafael-gomes-fundador\.png/);
  assert.match(page, /striker-logo-horizontal\.jpg/);
  assert.match(page, /Nenhum depoimento fictício será utilizado\./);
  assert.match(layout, /ProfessionalService/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
