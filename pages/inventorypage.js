const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');
const ele = new ElementUtils();

class InventoryPage extends BasePage{

    #headerText = By.xpath("//span[@data-test='title']");
    #cart = By.className("shopping_cart_link");
    
    #add_to_cart_backpack = By.id("add-to-cart-sauce-labs-backpack");
    //All the Add to cart button IDs contains the particular product names.
    //Need a custom method to build the ids' based on the product testdata provided.

    addToCartID(productname){
        let product_by_locator_id = "add-to-cart-" + productname.toLowerCase().split(" ").join("-");
        return product_by_locator_id;
    }

    //TODO : Update the below methods

    async addAProductToCart(productname){
        let id = this.addToCartID(productname);
        console.log(id);
        ele.doClickWithWait(By.id(id), 2000);
    }

    async getProductPageHeader(){
        return await ele.getElementWithWait(this.#headerText, 3000).getText();
    }

    getDefaultFilterName(){

    }

    navigateToAboutPage(){

    }

    getProductPageURL(){

    }

    doLogout(){

    }

    async navigateToCartPage(){
        ele.doClickWithWait(this.#cart, 2000);
    }
}

exports.InventoryPage = InventoryPage;