const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://pptr.dev/', {
      waitUntil: 'networkidle2',
    });

    await page.waitForSelector('toolbar-component');

    await page.type('input[type=search]', 'pdf');

    await page.keyboard.press('Enter');

    await page.pdf({
      path: 'site.pdf',
      displayHeaderFooter: true,
      printBackground: true,
      format: 'A3',
    });
  } catch (error) {
    console.log('Error', error);
  }

  await browser.close();
})();
