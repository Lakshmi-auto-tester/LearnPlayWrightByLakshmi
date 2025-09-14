import { test, expect } from '@playwright/test';
import data from  '../testdata/demoqa.json'
//import data from "../testdata/demoqa.json"
//import data from '../testdata/demoqa.json'
//import data from '../../testdata/demoqa.json' assert{type: 'json' 
  //  };
//import data from '../../testdata/demoqa.json' assert { type: 'json' };

test('Verify demo qa text bos fields', async ({ page }) => {

    await page.goto("https://demoqa.com/")

    await  page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()

    await page.locator("(//li[@id='item-0'])[1]").click()
    await expect(page).toHaveURL("https://demoqa.com/text-box")
    await page.locator("//input[@placeholder='FullName']").fill("data.FullName")
    //await page.locator("//input[@placeholder='FullName']").pressSequentially("data.FullName",{delay:5000})
    await page.locator("//input[@id='userEmail']").fill("data.email")
    await page.locator("(#currentaddress").fill("data.currentaddress")
    await page.locator("#permanentaddress").fill("data.permanentaddress")
    await page.locator("#submit").click()
    await expect(page.locator("#name")).toContainText("Lucky")
    await expect(page.locator("#email")).toContainText("Lucky89@gmail.com")
    await expect(page.locator("#currentAddress")).toBeVisible()
    await expect(page.locator("#permanentAddress")).toContainText("Bangalore")

})