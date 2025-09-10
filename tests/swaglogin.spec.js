import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("//input[@placeholder='Username']").fill("standard_user")

    await page.locator("//input[@placeholder='Password']").fill("secret_sauce")

    await page.locator("//input[@value='LOGIN']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

    //or

    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

})


test('Verify with valid username and Invalid password ', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("//input[@placeholder='Username']").fill("standard_user")

    await page.locator("//input[@placeholder='Password']").fill("bvchdsgfdbg")

    await page.locator("//input[@value='LOGIN']").click()

  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


    //or

    //await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

})

test('Verify login with Invalid username and valid password', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("//input[@placeholder='Username']").fill("cshgchsc")

await page.locator("//input[@type='password']").fill("secret_sauce")

await page.locator("//input[@value='LOGIN']").click()


await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})

test('Verify login with Invalid username and Invalid password', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/v1/");

  await page.locator("//input[@placeholder='Username']").fill("cshgchsc")

await page.locator("//input[@type='password']").fill("chsfcsgafg")

await page.locator("//input[@value='LOGIN']").click()


await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()



})

