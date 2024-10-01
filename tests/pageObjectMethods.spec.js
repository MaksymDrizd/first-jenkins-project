import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
   // goto https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');
    let actualTitle = await page.title();
    console.log(actualTitle);
    expect(actualTitle).toBe("Practice");
});


test("Getting the current url of the page", async ({ page }) => {
    // get the url of the page'
    await page.goto('https://practice.cydeo.com/');
    let actualUrl = page.url();
    console.log(actualUrl);

  });


  test("Set the window size", async ({ page }) => {
    // set the window size
    await page.goto('https://practice.cydeo.com/');
    await page.setViewportSize({ width: 1500, height: 1080 });
  });

  