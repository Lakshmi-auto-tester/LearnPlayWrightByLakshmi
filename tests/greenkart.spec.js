import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    await page.locator('//h4[text()="Brocolli - 1 Kg"]/../div[3]/button').click()
    await page.locator('//h4[text()="Cucumber - 1 Kg"]/../div[3]/button').click()
    await page.locator('//h4[text()="Cauliflower - 1 Kg"]/../div[3]/button').click()
    await page.locator('//h4[text()="Beetroot - 1 Kg"]/../div[3]/button').click()

    const price1= await page.locator("//h4[text()='Brocolli - 1 Kg']/../p[@class='product-price']").textContent();
    console.log(price1)
   
      const price2= await page.locator("//h4[text()='Cauliflower - 1 Kg']/../p[@class='product-price']").textContent();
      console.log(price2)
        const price3= await page.locator("//h4[text()='Cucumber - 1 Kg']/../p[@class='product-price']").textContent();
        console.log(price3)
       const price4= await page.locator("//h4[text()='Beetroot - 1 Kg']/../p[@class='product-price']").textContent();
    console.log(price4)

    console.log(Number(price1)+Number(price2))
    console.log(Number(price1)+Number(price2)+Number(price3)+Number(price4))

    const total=await page.locator("//td[text()='Price']/../td[3]/strong").textContent()
     const total1=await page.locator("//td[text()='Price']/../td[3]/strong").innerText()
     await expect(Number(price1)+Number(price2)).toBe(Number(260))
    // )
    //console.log(Number(price1)+(price2)+(price3)+price1(4))
});
  