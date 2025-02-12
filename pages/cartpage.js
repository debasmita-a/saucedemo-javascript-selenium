const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');
const ele = new ElementUtils();

class CartPage extends BasePage{

    #cartHeader = By.className("title");

    async getCartPageHeader(){
        return await ele.getElementWithWait(this.#cartHeader, 2000).getText();
    }

    async getCartPageURL(){
        return await ele.getThisPageUrlWithWait("cart");
    }
}

exports.CartPage = CartPage;