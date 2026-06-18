const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1900, height: 1100 }, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const el = await page.$('.services-cards-wrapper');
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  await el.screenshot({ path: 'C:/Users/Nitesh/AppData/Local/Temp/services-check3.png' });
  await browser.close();
  console.log('done');
})();
