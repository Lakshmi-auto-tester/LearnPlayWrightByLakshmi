// @ts-check
import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator('//input[@name="username"]').fill("Admin")

await page.locator("//input[@type='password']").fill('admin123')

await page.locator("//button[@type='submit']").click()

//Verify Method 1

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

//Or

await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()

})

test('Verify login with valid username and invalid password', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("//input[@placeholder='Username']").fill("Admin")

await page.locator("//input[@type='password']").fill("dhfhbddgdg")

await page.locator("//button[@type='submit']").click()


await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()



})

test('Verify login with Invalid username and valid password', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@placeholder='Username']").fill("cshgchsc")

await page.locator("//input[@type='password']").fill("admin123")

await page.locator("//button[@type='submit']").click()


await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()



})


test('Verify login with Invalid username and Invalid password', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("//input[@placeholder='Username']").fill("cshgchsc")

await page.locator("//input[@type='password']").fill("chsfcsgafg")

await page.locator("//button[@type='submit']").click()


await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()



})


