const puppeteer = require('puppeteer');
const { scrapeAmazonProduct } = require('./src/scrapers/amazonScraper');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await scrapeAmazonProduct(page);

    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
