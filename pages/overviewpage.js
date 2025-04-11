const { ElementUtils } = require("../utils/elementUtil");
const { BasePage } = require("./basepage");
const {By} = require('selenium-webdriver');

const base = new BasePage();
const ele = new ElementUtils();

class CheckoutOverviewPage extends BasePage{

    #summaryInfo = By.className("summary_info");
    #cancelBtn = By.id("cancel");
    #finishBtn = By.id("finish");
    #overviewHeader = By.className("title");

    /**
     * store the payment and shipping info into a map
     * e.g. [Payment Information : SauceCard #31337]
     * [Shipping Information : Free Pony Express Delivery!]
     * [Price Total : [Item total : $9.99], [Tax : $0.80]]
     * [Total : $10.79]
     * 
     */

    async getOverviewPageUrl(){
        return await this.ele.getThisPageURL();
    }

    async getOverviewHeader(){
        return await this.ele.getElementText(this.#overviewHeader);
    }

    /**
     * Implement a Map to store the price details
     */
    async getPriceDetails(){

    }
    /**
     * Implement a Map to store the payment info details
     */
    async getPaymentInfo(){

    }

    async clickFinsihBtn(){
        this.ele.doClickWithWait(this.#finishBtn, 2000);
    }
}

exports.CheckoutOverviewPage = CheckoutOverviewPage;