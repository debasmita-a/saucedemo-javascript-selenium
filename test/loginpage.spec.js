const { describe, it } = require("mocha");
const {Builder, By, util, Browser} = require('selenium-webdriver');
const { LoginPage } = require("../pages/loginpage");
const loginPage = new LoginPage();

describe('Launch App home page', ()=>{

    it('Launch browser', async () =>{
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://www.saucedemo.com/");
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginBtn();
    })
})