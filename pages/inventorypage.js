const { BasePage } = require("./basepage");
const {By, until} = require('selenium-webdriver');

class InventoryPage extends BasePage{

    #headerText = By.className("title");
    
    #add_to_cart_backpack = By.id("add-to-cart-sauce-labs-backpack");
    //All the Add to cart button IDs contains the particular product names.
    //Need a custom method to build the ids' based on the product testdata provided.

    addToCartID(productname){
        let product_by_locator_id = `add-to-cart-sauce-labs-`+productname.toLowerCase().replace(" ", "-");
        return product_by_locator_id;
    }

    //TODO : Update the below methods

    addAProductToCart(productname){

    }

    getProductPageHeader(){

    }

    getDefaultFilterName(){

    }

    navigateToAboutPage(){

    }

    getProductPageURL(){

    }

    doLogout(){

    }

    navigateToCartPage(){

    }
}