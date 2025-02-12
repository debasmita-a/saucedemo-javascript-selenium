const {Builder, Browser, By, util, until} = require('selenium-webdriver');
const { BasePage } = require("./basepage");
const { ElementUtils } = require('../utils/elementUtil');
const base = new BasePage();
const ele = new ElementUtils();

class LoginPage extends BasePage{
    
    #username = By.id("user-name");
    #password = By.id("password");
    #btnLogin = By.id("login-button");

    async enterUsername(user_name) {
        await driver.wait(until.elementLocated(this.#username), 5000).sendKeys(user_name);
    }
    async enterPassword(pass) {
        await ele.getElement(this.#password).sendKeys(pass);
        //await driver.findElement(this.#password).sendKeys(pass);
    }
    async clickLoginBtn() {
        await ele.doClick(this.#btnLogin);
        //await ele.getElement(this.#btnLogin).click();
        //await driver.findElement(this.#btnLogin).click();
    }

}

exports.LoginPage = LoginPage;