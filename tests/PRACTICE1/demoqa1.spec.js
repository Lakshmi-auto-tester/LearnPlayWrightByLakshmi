import { test, expect } from '@playwright/test';
import data from  "../../testdata/demoqa1.json";

test('Verify demo qa text bos fields', async ({ page }) => {


    await page.goto("https://demoqa.com/")
    await page.locator("//h5[text()='Elements']").click()
    //await page.locator("https://demoqa.com/elements").toBeVisible()
    await page.locator("//span[text()='Text Box']").click()

    await page.locator("//input[@id='userName']").fill(data.username)
    await page.locator("//input[@placeholder='name@example.com']").fill(data.email)
    await page.locator("//textarea[@placeholder='Current Address']").fill(data.currentaddress)
    await page.locator("//textarea[@id='permanentAddress']").fill(data.permanentaddress)
    //await page.locator("//textarea[@placeholder='Current Address']").fill(data.Currentaddress)
    //await page.locator("//textarea[@id='permanentAddress']").fill(data.permanentaddress)
    await page.locator("//button[@id='submit']").click()

    await expect(page.locator(""))
})
