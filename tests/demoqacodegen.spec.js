import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://demoqa.com/',{timeout:60000});
  
  await page.locator('svg').first().click();
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Lakshmi');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('lucky89@gmail.com');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').fill('blore');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});