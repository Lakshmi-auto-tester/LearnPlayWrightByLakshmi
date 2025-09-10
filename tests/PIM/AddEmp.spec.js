import { test, expect } from '@playwright/test';
//import data from "../testdata/orangeHRM.json";
import data from "../../testdata/orangeHRM.json";

test('Add Employee Details', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill(data.username)

    await page.locator('//input[@type="password"]').fill(data.password)
    await page.locator("//button[@type='submit']").click()

    

await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click()
await page.locator("//a[text()='Add Employee']").click()
await page.locator("//input[@name='firstName']").fill(data.firstname)
await page.locator("//input[@name='middleName']").fill(data.middlename)
await page.locator("//input[@name='lastName']").fill(data.lastname)
await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill('987676')
await page.locator("//button[@type='submit']").click()
await expect(page).locator("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/218").toBeVisible()



})