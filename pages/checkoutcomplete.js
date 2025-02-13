const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By} = require('selenium-webdriver');

const base = new BasePage();
const ele = new ElementUtils();

class CheckoutCompletePage extends BasePage{

    #checkoutCompleteHeader = By.className("title");
    #thankyouMsg = By.className("complete-header");
    #shoppingCartLink = By.className("shopping_cart_link"); // It should be blank
    #backToProductsPage = By.id("back-to-products");

    async getCheckoutCompletePageUrl(){
        return await ele.getThisPageURL();
    }

    async getCheckoutCompletePageHeader(){
        return await ele.getElementText(this.getCheckoutCompletePageHeader());
    }

    async getCheckoutSuccessMessage(){
        return await ele.getElementText(this.#thankyouMsg);
    }

    async navigateToProductsPage(){
        ele.doClickWithWait(this.#backToProductsPage, 2000);
        //TODO : Validate with Product page URL/Header
    }

    async getCartBadgeNumber(){
        let items = ele.getElements(this.getCartBadgeNumber());
        return items == 0; 
    }
}