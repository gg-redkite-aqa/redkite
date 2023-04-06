const puppeteer = require('puppeteer');
const homePage = require('../pages/homepage')

describe("Hompage maintabs", () => {

  it('Maintabs should exist and be clickable on homepage', async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});                                       
    const page = (await browser.pages())[0];
    await page.goto("https://redkite.io/en", {waitUntil: 'domcontentloaded'});
    await page.waitForSelector(homePage.maintabsSelector);
    let tabNames = await page.$$eval(homePage.maintabsSelector, tabsArray => {
      return tabsArray.map(tab => tab.textContent)
    });
    expect(tabNames).toEqual(homePage.maintabs);
    await browser.close()
  })
});
