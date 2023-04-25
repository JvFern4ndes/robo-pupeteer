const puppeteer = require('puppeteer');

console.log('Bem vindo ao Bot conversor');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const moedaBase = 'dolar'
  const moedaFinal = 'real'

  const URL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i512l9.2465j0j7&sourceid=chrome&ie=UTF-8`
  await page.goto(URL);
  await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('.lWzCpb.a61j6').value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)

  await browser.close();
}
  
robo();
