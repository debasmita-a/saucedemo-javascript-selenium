const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');
const ele = new ElementUtils();

class InventoryPage extends BasePage{

    #headerText = By.xpath("//span[@data-test='title']");
    #cartLink = By.className("shopping_cart_link");
    #burgerMenuBtn = By.id("react-burger-menu-btn");
    #aboutLink = By.linkText("about_sidebar_link");
    #logoutLink = By.linkText("logout_sidebar_link");
    #filterDropdown = By.className("active_option");
    #footerText = By.className("footer_copy");

/**
 * 
 * @param {product name as string} productname 
 * @returns a string formatted as the element DOM id
 * and it will be passed to the By locator.
 * It is unique for each product name.
 */
    addToCartID(productname){
        let product_by_locator_id = "add-to-cart-" 
                                    + productname
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-");
        return product_by_locator_id;
    }

    async addAProductToCart(productname){
        let id = this.addToCartID(productname);
        console.log(id);
        ele.doClickWithWait(By.id(id), 2000); //cart badge number should change
    }
/**
 * @param {testdata array from a json file} data 
 * It will iterate on the products list 
 * and add products to the cart one by one.
 */
    async addProductsToCart(data){
        data.forEach(element => {
            let id = this.addToCartID(element);
            ele.doClickWithWait(By.id(id), 2000);
        });
    }

    async getProductPageHeader(){
        return await ele.getElementWithWait(this.#headerText, 3000).getText();
    }

    async getDefaultFilterName(){
        return await ele.getElementWithWait(this.#filterDropdown, 2000).getText(); 
    }

    async navigateToAboutPage(){
        ele.doClickWithWait(this.#burgerMenuBtn, 2000);
        ele.doClickWithWait(this.#aboutLink, 2000); 
        //validate here. -- About page
        driver.navigate().back();
    }

    async getProductPageURL(){
        return await ele.getThisPageURL();
    }

    async doLogout(){
        ele.doClickWithWait(this.#burgerMenuBtn, 2000);
        ele.doClickWithWait(this.#logoutLink, 2000);
    }

    async navigateToCartPage(){
        ele.doClickWithWait(this.#cartLink, 2000);
    }

    async getFooterText(){
        await ele.getElementText(this.#footerText);
    }
}

exports.InventoryPage = InventoryPage;