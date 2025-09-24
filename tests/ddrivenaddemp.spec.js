import { test, expect } from '@playwright/test';

const credentials = {
    username: "Admin",
    password: "admin123"     
};

const addemployees = {
    emp1: {
        empfullname: "Lakshmi",
        middlename: 'mohan',
        lastname: 'N',
        employeeID: '12345'
    },
    emp2: {
        empfullname: "Nandini",
        middlename: 'rolla',
        lastname: 'S',
        employeeID: '67890'
    },
    emp3: {
        empfullname: "Anu",
        middlename: 'kumar',
        lastname: 'R',
        employeeID: '11223'
    }
};
for(let addemp in addemployees)
{


    test(`Add Employee Details using datadriven ${addemp}`, async ({ page }) => {
        //Login
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("//input[@name='username']").fill(credentials.username);
        await page.locator('//input[@type="password"]').fill(credentials.password);
        await page.locator("//button[@type='submit']").click();
        

        // Navigate to Add Employee page
        await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click();
        await page.locator("//a[text()='Add Employee']").click();

        // Fill employee details
        await page.locator("//input[@name='firstName']").fill(addemployees[addemp].empfullname);
        await page.locator("//input[@name='middleName']").fill(addemployees[addemp].middlename);
        await page.locator("//input[@name='lastName']").fill(addemployees[addemp].lastname);
        await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(addemployees[addemp].employeeID);
        await page.locator("//button[@type='submit']").click();

       
    });
};