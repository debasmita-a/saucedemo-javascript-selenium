const {Builder, By, util, Browser} = require('selenium-webdriver');


class LoginPage{
    driver;
    #username = By.id("user-name");
    #password = By.id("password");
    #btnLogin = By.id("login-button");

    async enterUsername(user_name) {
        await driver.findElement(this.#username).sendKeys(user_name);
    }
    async enterPassword(pass) {
        await driver.findElement(this.#password).sendKeys(pass);
    }
    async clickLoginBtn() {
        await driver.findElement(this.#btnLogin).click();
    }

}

exports.LoginPage = LoginPage;