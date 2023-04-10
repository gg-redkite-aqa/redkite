import { homePage } from '../pages/homepage';
import { submitForm} from '../pages/start_now';

describe("Start now page", () => {
  beforeEach(async () => {
    page.setDefaultNavigationTimeout(0)
  });
  
  test('Submitting the form', async () => {
    await page.goto(URL);
    await page.waitForSelector(homePage.startNowBtn);
    await page.click(homePage.startNowBtn);
    await page.waitForSelector(submitForm.firstName);
    await page.type(submitForm.firstName, "First Name");
    await page.type(submitForm.lastName, "Last Name");
    await page.type(submitForm.contactNumber, "123456789");
    await page.type(submitForm.email, "test@test.com");
    await page.type(submitForm.companyName, "Test Company");
    await page.type(submitForm.message, "Test message");
    await page.click(submitForm.signCheckBox);
  })
});