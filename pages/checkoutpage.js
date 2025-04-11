const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By} = require('selenium-webdriver');

const base = new BasePage();
const ele = new ElementUtils();

class CheckoutInfoPage extends BasePage{

     #infoPageHeader = By.className("title");
    #firstNameTextbox = By.id("first-name");
    #lastNameTextbox = By.id("last-name");
    #postalCodeTextbox = By.id("postal-code");
    #cancelBtn = By.id("cancel");
    #continueBtn = By.id("continue");
    #errorMessage = By.xpath("//h3[@data-test='error']");

    async getCheckoutPageUrl(){
        return await this.ele.getThisPageURL();
    }

    async getCheckoutInfoPageHeader(){
        return await this.ele.getElementText(this.#infoPageHeader);
    }

    async fillFirstName(fname){
        await this.ele.doSendKeysWithWait(this.#firstNameTextbox, fname, 3000);
        return this;
    }

    async fillLastName(lname){
        await this.ele.doSendKeysWithWait(this.#lastNameTextbox, lname, 3000);
        return this;
    }

    async fillPostalCode(code){
        await this.ele.doSendKeysWithWait(this.#postalCodeTextbox, code, 3000);
        return this;
    }

    async navigateBackToCartPage(){
        await this.ele.doClickWithWait(this.#cancelBtn, 2000);
    }

    async doClickContinue(){
        await this.ele.doClickWithWait(this.#continueBtn, 2000);
    }

    async getErrorMessage(){
        return await this.ele.getElementText(this.#errorMessage);
    }
}

exports.CheckoutInfoPage = CheckoutInfoPage;