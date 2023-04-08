import { homePage } from '../pages/homepage';
import { aboutUs } from '../pages/aboutUs'

describe("Hompage and maintabs", () => {
  beforeEach(async () => {
    page.setDefaultNavigationTimeout(0)
  });

  test('Maintabs should exist and be clickable on homepage', async () => {
    await page.goto(URL);
    await page.waitForSelector(homePage.maintabsSelector);
    let tabNames = await page.$$eval(homePage.maintabsSelector, tabsArray => {
      return tabsArray.map(tab => tab.textContent)
    });
    await expect(tabNames).toEqual(homePage.maintabs);
  });

  test('About us page should contain stuff linkedin links', async () => {
    await page.goto(`${URL}/about`);
    await page.waitForSelector(aboutUs.stufflinks);
    let stuffLinkedinLinks = await page.$$eval(aboutUs.stufflinks, linksArray => {
      return linksArray.map(link => link.href)
    });
    stuffLinkedinLinks.forEach(link => {
      expect(link).toContain('https://www.linkedin.com')
    })
  })
});
