import { test, expect } from '@playwright/test';


test('demonstration of condiotional statements', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    await page.locator("input[name^='chk_altemaile']").check()
    await page.waitForTimeout(4000)

    const checkbox_status=await page.locator("input[name^='chk_altemaile']").isChecked()

    console.log(checkbox_status)
    if(!checkbox_status)
    {
        await page.locator("input[name^='chk_altemaile']".check())
    }








})