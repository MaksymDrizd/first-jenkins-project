import {expect, test} from '@playwright/test';
test.describe("@smoke Test Group1", () => {

    test.beforeEach(async ({page}) => {
        
        await page.goto('https://practice.cydeo.com/');
    });

    test.afterEach(async ({page}) => {
    
        //await page.waitForTimeout(3000);
    });

    test("Getting the title of the page", async ({ page }) => {
        let actualTitle = await page.title();
        console.log(actualTitle);
        expect(actualTitle).toBe("Practice");
    });

    test("Getting the current url of the page", async ({ page }) => {
        let actualUrl = page.url();
        console.log(actualUrl);

    });

});