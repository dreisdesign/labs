#!/usr/bin/env node
// scripts/unregister-sws.js
// Usage: node scripts/unregister-sws.js http://localhost:8000 http://localhost:6006
const urls = process.argv.slice(2);
if (!urls.length) {
    console.error('Provide one or more URLs: node scripts/unregister-sws.js http://localhost:8000');
    process.exit(1);
}
(async () => {
    const puppeteer = await import('puppeteer').then(m => m.default || m).catch(e => { console.error('puppeteer import failed:', e); process.exit(1); });
    const browser = await puppeteer.launch({ headless: true });
    for (const url of urls) {
        console.log('Processing', url);
        try {
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'load', timeout: 20000 }).catch(() => { });
            const result = await page.evaluate(async () => {
                try {
                    const regs = await navigator.serviceWorker.getRegistrations();
                    for (const r of regs) {
                        try { await r.unregister(); } catch (e) { /* ignore */ }
                    }
                    const keys = await caches.keys();
                    for (const k of keys) {
                        try { await caches.delete(k); } catch (e) { /* ignore */ }
                    }
                    return { workers: regs.length, caches: keys.length };
                } catch (e) {
                    return { error: String(e) };
                }
            });
            console.log(url, '=>', result);
            await page.close();
        } catch (e) {
            console.error('Error processing', url, e);
        }
    }
    await browser.close();
    console.log('Done.');
})();
