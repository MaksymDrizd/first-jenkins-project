import { test } from '@playwright/test';

test.describe('Test Group3', () => {

    // create a beforeEach test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
    });

  test('Check method checks the radio buttons and checkboxes if the havent been ckecked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkbox1 = page.locator('#box1');
    await checkbox1.check();
    

  });

  test('unchecked() unchecks the radio buttons and checkboxes if they havent been unchecked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();
    
    let checkbox2 = page.locator('#box2');
    await checkbox2.uncheck();
  

  });

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    let dropdownsLink = page.locator("text='Dropdown'");
    await dropdownsLink.click();

    let simpleDropdown = page.locator('#dropdown');

    // select by value
    //await simpleDropdown.selectOption("1")

    // select by visible text
    await simpleDropdown.selectOption({label: "Option 1"});

    // select by index
    //await simpleDropdown.selectOption({ index: 1 });

    await page.waitForTimeout(3000);

  });

  
  test('innerText() retrives the visible text', async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");
    let actucalText = await headerElement.innerText();
    console.log(actucalText);

  });
  // create an empty test
     test('inputValue(): only works with <input>,<text area>, <select>', async ({ page }) => {

       let inputsLink = page.locator("//a[text()='Inputs']");
       //await inputsLink.scrollIntoViewIfNeeded();
       //await page.waitForTimeout(3000);
       await inputsLink.click();

       let inputBox = page.locator("//input[@type='number']");
       await inputBox.fill("222");
       let inputValue = await inputBox.inputValue();
       console.log(inputValue);


     });

});