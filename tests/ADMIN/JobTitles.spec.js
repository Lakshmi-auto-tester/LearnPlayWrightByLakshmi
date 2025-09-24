import { test, expect } from '@playwright/test';

test('Adding Job Titles', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  //await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  //await page.getByRole('textbox', { name: 'password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('automation tester');
 // await page.getByRole('textbox').nth(1).press('Tab');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('playwright tests');
  await page.getByRole('button', { name: 'Save' }).click();
});