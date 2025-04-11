const { describe, it } = require("mocha");
const {assert} = require('chai')
const { LoginPage } = require("../pages/loginpage");
const { InventoryPage } = require("../pages/inventorypage");
const { CartPage } = require("../pages/cartpage");
const { BasePage } = require("../pages/basepage");
const base = new BasePage();

describe('End to end tests', ()=>{

    let driver;
    let loginPage;
    let inventoryPage;
    let cartPage;

    before('End to end tests set up', async()=>{
        driver = await base.init_driver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        cartPage = new CartPage(driver);
    });

    it('User logs in successfully', async ()=>{
        await loginPage.init_driver();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginBtn();
        let text = await inventoryPage.getProductPageHeader();       
        assert.equal(text, "Products");
    });

    it('User adds a product to cart successfully', async ()=>{
        await inventoryPage.addAProductToCart("Sauce Labs Backpack");
        await inventoryPage.navigateToCartPage();
        assert.isTrue(await cartPage.getCartPageURL());
    });

})