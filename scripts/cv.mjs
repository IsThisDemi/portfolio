/**
 * Prints the résumé page (src/pages/cv.astro) to public/cv.pdf with the local Google Chrome.
 *
 * The PDF is tagged (structure for screen readers and parsers), keeps real selectable text with
 * embedded fonts, and gets title, author, subject and keywords in its metadata, which applicant
 * tracking systems read along with the text.
 */
import { writeFile } from 'node:fs/promises';
import { dev } from 'astro';
import { PDFDocument } from 'pdf-lib';
import { chromium } from 'playwright-core';

const root = new URL('..', import.meta.url);
const port = 4398;
const output = new URL('public/cv.pdf', root);

const server = await dev({ root, logLevel: 'error', server: { port }, devToolbar: { enabled: false } });

try {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/cv`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const meta = await page.evaluate(() => ({
    title: document.title,
    author: document.querySelector('meta[name="author"]')?.content ?? '',
    subject: document.querySelector('meta[name="description"]')?.content ?? '',
    keywords: (document.querySelector('meta[name="keywords"]')?.content ?? '').split(', ').filter(Boolean),
  }));

  const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
  await browser.close();

  const doc = await PDFDocument.load(pdf);
  doc.setTitle(meta.title, { showInWindowTitleBar: true });
  doc.setAuthor(meta.author);
  doc.setSubject(meta.subject);
  // One comma-separated string: pdf-lib would join an array with spaces, merging multi-word names.
  doc.setKeywords([meta.keywords.join(', ')]);
  doc.setLanguage('en');
  doc.setCreator('riccardo.martinello.dev');
  await writeFile(output, await doc.save());

  console.log(`Wrote ${output.pathname} (${doc.getPageCount()} pages)`);
} finally {
  await server.stop();
}
