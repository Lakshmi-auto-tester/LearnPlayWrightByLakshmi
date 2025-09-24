import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Lucky');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Colors:').selectOption('green');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});