const puppeteer = require('puppeteer');

console.log('Bem vindo ao Bot conversor');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
}
  
robo();
