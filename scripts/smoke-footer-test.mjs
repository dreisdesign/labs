#!/usr/bin/env node
import puppeteer from 'puppeteer';

async function run() {
  const url = 'http://localhost:8000/tracker/';
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE:', msg.text()));

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 12000 });

    // Wait for the tracker app to initialize
    await page.waitForSelector('labs-footer-with-settings', { timeout: 5000 });

    // Get count of list items before clicking Add
    const before = await page.$$eval('labs-list-item', els => els.length);
    console.log('Before items:', before);

    // Click the Add button inside the footer's shadow DOM
    const footer = await page.$('labs-footer-with-settings');
    if (!footer) throw new Error('Footer element not found');

    await page.evaluate((el) => {
      const addBtn = el.shadowRoot && el.shadowRoot.querySelector('#add-btn');
      if (!addBtn) throw new Error('Add button not found in footer shadowRoot');
      addBtn.click();
    }, footer);

    // Wait for a new labs-list-item to appear
    await page.waitForFunction((prev) => document.querySelectorAll('labs-list-item').length > prev, { timeout: 5000 }, before);
    const after = await page.$$eval('labs-list-item', els => els.length);
    console.log('After items:', after);

    if (after > before) {
      console.log('SMOKE TEST PASSED: Add button created a new list item.');
      await browser.close();
      process.exit(0);
    } else {
      throw new Error('No new item detected after clicking Add');
    }
  } catch (err) {
    console.error('SMOKE TEST FAILED:', err && err.message ? err.message : err);
    try { await page.screenshot({ path: 'smoke-footer-failure.png', fullPage: true }); console.log('Saved failure screenshot: smoke-footer-failure.png'); } catch (e) {}
    await browser.close();
    process.exit(2);
  }
}

run();
