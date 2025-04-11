const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');

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
        this.ele.doClickWithWait(By.id(id), 2000); //cart badge number should change
    }
/**
 * @param {testdata array from a json file} data 
 * It will iterate on the products list 
 * and add products to the cart one by one.
 */
    async addProductsToCart(data){
        data.forEach(element => {
            let id = this.addToCartID(element);
            this.ele.doClickWithWait(By.id(id), 2000);
        });
    }

    async getProductPageHeader(){
        return await this.ele.getElementTextWithWait(this.#headerText, 3000);
    }

    async getDefaultFilterName(){
        return await this.ele.getElementWithWait(this.#filterDropdown, 2000); 
    }

    async navigateToAboutPage(){
        this.ele.doClickWithWait(this.#burgerMenuBtn, 2000);
        this.ele.doClickWithWait(this.#aboutLink, 2000); 
        //validate here. -- About page
        driver.navigate().back();
    }

    async getProductPageURL(){
        return await this.ele.getThisPageURL();
    }

    async doLogout(){
        this.ele.doClickWithWait(this.#burgerMenuBtn, 2000);
        this.ele.doClickWithWait(this.#logoutLink, 2000);
    }

    async navigateToCartPage(){
        this.ele.doClickWithWait(this.#cartLink, 2000);
    }

    async getFooterText(){
        await this.ele.getElementText(this.#footerText);
    }
}

exports.InventoryPage = InventoryPage;