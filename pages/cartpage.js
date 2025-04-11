const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');
const ele = new ElementUtils();

class CartPage extends BasePage{

    #cartHeader = By.className("title");
    #checkout = By.id("checkout");
    #continueShoppingBtn = By.id("continue-shopping");
    #cartItems = By.className("cart_item");
    #cartItemBadgeNum = By.className("shopping_cart_badge");

    async getCartPageHeader(){
        return await this.ele.getElementWithWait(this.#cartHeader, 2000).getText();
    }

    async getCartPageURL(){
        return await this.ele.getThisPageUrlWithWait("cart");
    }

    //TODO: Check that the Checkout button is enabled when atleat 1 item is avilable in the cart.

    async navigateToCheckoutPage(){
        this.ele.doClickWithWait(this.#checkout, 2000);
    }

    async navigateToProductsPage(){
        this.ele.doClickWithWait(this.#continueShoppingBtn, 2000);
        //navigate back to cart page
    }

    async getCartBadgeNumber(){
        return await this.ele.getElementText(this.#cartItemBadgeNum).getText();
    }

    async getItemCountOnCartPage(){
        return await this.ele.getElements(this.#cartItems).length;
    }
}

exports.CartPage = CartPage;