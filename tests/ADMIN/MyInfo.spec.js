import { test, expect } from '@playwright/test';

test('My Info', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  //await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
  await page.getByRole('option', { name: 'Albanian' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
});