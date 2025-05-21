// import { expect, test} from "@playwright/test";

// test("Add to cart", async({page}) =>{
//     await page.goto("https://www.amazon.in/");
//     await page.getByPlaceholder("Search Amazon.in").fill("i phone 16 pro");
//     await page.keyboard.press("Enter");
//     await page.locator("//span[.='128 GB']/parent::a/descendant::input").check();
//     await page.click("//span[text()='POCO C61 Ethereal Blue 4GB RAM 64GB ROM']/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::button[text()='Add to cart']");
//     await page.locator("#nav-cart-count-container").click();
//     await page.waitForSelector("//span[text()='POCO C61 Ethereal Blue 4GB RAM 64GB ROM' and @class='a-truncate-full a-offscreen']");
//     await expect(page.locator("//span[text()='POCO C61 Ethereal Blue 4GB RAM 64GB ROM' and @class='a-truncate-full a-offscreen']")).toBeVisible();
//     await page.locator("//input[@data-action='delete' and @value='Delete']").click();
//     await expect(page.locator(" //span[text()=' was removed from Shopping Cart.']")).toBeVisible();

//     await page.locator("#demo").toBeVisible();
//     await expect(page.locator("#demo")).
// })
