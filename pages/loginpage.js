const {Builder, Browser, By, util, until} = require('selenium-webdriver');
const { BasePage } = require("./basepage");
const { ElementUtils } = require('../utils/elementUtil');

class LoginPage extends BasePage{

    #username = By.id("user-name");
    #password = By.id("password");
    #btnLogin = By.id("login-button");

    async enterUsername(user_name) {
        await this.ele.doSendKeysWithWait(this.#username, user_name, 5000);
    }
    async enterPassword(pass) {
        await this.ele.doSendKeysWithWait(this.#password, pass, 5000);
    }
    async clickLoginBtn() {
        await this.ele.doClickWithWait(this.#btnLogin, 5000);
    }

}

exports.LoginPage = LoginPage;