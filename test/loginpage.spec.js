const { describe, it } = require("mocha");
const {assert} = require('chai')
const { LoginPage } = require("../pages/loginpage");
const loginPage = new LoginPage();

describe('Launch App home page', ()=>{

    it('Launch browser', async () =>{
        await loginPage.init_driver();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginBtn();
       // assert.
    })
})