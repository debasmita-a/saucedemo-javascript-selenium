const { describe, it } = require("mocha");
const { assert } = require('chai')
const { LoginPage } = require("../pages/loginpage");
const { BasePage } = require("../pages/basepage");
const { InventoryPage } = require("../pages/inventorypage");
const base = new BasePage();

describe('Login page tests', ()=>{

    let driver;
    let loginPage;

    before('Login page set up', async()=>{
        driver = await base.init_driver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
    });

    it('Launch browser', async () =>{
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginBtn();
        const inventoryPageUrl  = await inventoryPage.getProductPageURL();
        assert.include(inventoryPageUrl, "inventory.html");
    });

})