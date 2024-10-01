import { test } from '@playwright/test';

test('Youtube search', async ({ page }) => {
  
    await page.goto("https://www.youtube.com/");

    //await page.waitForTimeout(3000);

    let searchBox = page.locator("//input[@id='search']");

    await searchBox.click();
    
    await searchBox.fill("Cydeo");
    //await page.waitForTimeout(3000);

    await searchBox.press("Enter");
    //await page.waitForTimeout(3000);

    let firstResult = page.locator("(//a[@id='video-title'])[1]");
    await firstResult.click();
    
   // await page.waitForTimeout(3000);

    
});

/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Пошук" aria-label="Пошук" role="combobox" aria-haspopup="false" aria-autocomplete="list" class="gsfi ytd-searchbox" dir="ltr" style="border: none; padding: 0px; margin: 0px; height: auto; width: 100%; outline: none;">
*/

//input[@name='search_query' and @id='search']