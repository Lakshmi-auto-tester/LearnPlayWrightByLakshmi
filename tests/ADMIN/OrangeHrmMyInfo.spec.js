import { test, expect } from '@playwright/test';

test('My Info page', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

 // await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  //await page.getByRole('button', { name: 'Login' }).click();
  //await page.getByRole('link', { name: 'My Info' }).click();

  //await page.getByRole('textbox', { name: 'First Name' }).click();
  a
  await page.getByRole('textbox', { name: 'First Name' }).fill('Mohan');
  //await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('kumar');
 // await page.getByRole('textbox', { name: 'Last Name' }).click();
 // await page.getByRole('textbox', { name: 'Last Name' }).fill('J');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: '2024' }).locator('i').click();
  await page.locator('form').filter({ hasText: 'Blood TypeA+Test_Field Save' }).getByRole('separator').click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: '2024' }).locator('i').click();
  await page.getByText('2025', { exact: true }).click();
  await page.getByText('25', { exact: true }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
  await page.getByRole('option', { name: 'Indian' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await expect(page.getByRole('heading', { name: 'Custom Fields' })).toBeVisible();
});