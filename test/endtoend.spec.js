const { describe, it } = require("mocha");
const {assert} = require('chai')
const { LoginPage } = require("../pages/loginpage");
const { InventoryPage } = require("../pages/inventorypage");
const { CartPage } = require("../pages/cartpage");
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

describe.only('End to end tests', ()=>{

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

    it('User is checks out')


})