const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://pptr.dev/');
    await page.waitForSelector('toolbar-component');
    await page.$eval('toolbar-component', (e) => e.style.background = '#1F54C0');

    await page.screenshot({ path: 'site.png', format: 'A4' });
  } catch (error) {
    console.log('Error', error);
  }

  await browser.close();
})();
