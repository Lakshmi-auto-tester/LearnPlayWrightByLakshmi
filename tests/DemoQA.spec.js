import { test, expect } from '@playwright/test';
import data from  '../testdata/demoqa.json'

test('Verify demo qa text bos fields', async ({ page }) => {

    await page.goto("https://demoqa.com/")

    await  page.locator("//h5[text()='Elements']").click()
    await page.locator("//span[text()='Text Box']").click()

    
    //await page.locator("//input[@placeholder='Full Name']").fill(data.FullName)

    await page.locator("//input[@placeholder='Full Name']").pressSequentially(data.FullName,{delay:5000})
    await page.locator("//input[@placeholder='name@example.com']").fill(data.email)
    await page.locator("//textarea[@placeholder='Current Address']").fill(data.currentaddress)
    await page.locator("//textarea[@id='permanentAddress']").fill(data.permanentaddress)
    await page.locator("//button[@id='submit']").click()
    // Check output section is visible and contains correct data
    const output = page.locator('.border');
    await expect(output).toBeVisible();
    
    // Check if the output contains the submitted data
    await expect(page.locator('p#name')).toContainText(`Name:${data.FullName}`);
    await expect(page.locator('p#email')).toContainText(`Email:${data.email}`);
    await expect(page.locator('p#currentAddress')).toContainText(`Current Address :${data.currentaddress}`);
    await expect(page.locator('p#permanentAddress')).toContainText(`Permananet Address :${data.permanentaddress}`);

})