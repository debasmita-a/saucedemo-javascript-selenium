const {By, until, wait} = require('selenium-webdriver');

class ElementUtils {

    constructor(driver){
        this.driver = driver;
    }

    async getElement(locator) {
        return await this.driver.findElement(locator);
    }

    async getElementWithWait(locator, timeout) {
        return await this.driver.wait(until.elementLocated(locator), timeout);
    }

    async getElements(locator){
        return await this.driver.findElements(locator);
    }

    async doClick(locator){
        await this.getElement(locator).click();
    }

    async doSendKeys(locator, value){
        await this.getElement(locator).sendKeys(value);
    }

    async doClickWithWait(locator, timeout){
        const element = await this.getElementWithWait(locator, timeout);
        await element.click();
    }

    async doSendKeysWithWait(locator, value, timeout){
        await this.driver.wait(until.elementLocated(locator), timeout).sendKeys(value);
    }

    async isElementDisplayed(locator){
        return await this.getElement(locator).isDisplayed();
    }

    async isElementEnabled(locator){
        return await this.getElement(locator).isEnabled();
    }

    async getPageTitle(){
        return await this.driver.getTitle();
    }

    async getThisPageURL(){
        return await this.driver.getCurrentUrl();
    }

    async getThisPageUrlWithWait(suburl){
        const isSubUrlAvailable = await this.driver.wait(until.urlContains(suburl));
        return isSubUrlAvailable;
    }

    async getElementAttributeValue(locator, attributeName){
        return await this.getElement(locator).getAttribute(attributeName)
    }

    async getElementText(locator){
        return await this.getElement(locator).getText();
    }

    async getElementTextWithWait(locator, timeout){
        const element = await this.getElementWithWait(locator, timeout);
        return await element.getText();
    }

   
}

exports.ElementUtils = ElementUtils;

