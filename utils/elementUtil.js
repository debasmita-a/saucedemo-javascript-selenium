const {By, until} = require('selenium-webdriver');
const { BasePage } = require('../pages/basepage');
const base = new BasePage();

class ElementUtils {

    getElement(locator) {
        return driver.findElement(locator);
    }

    getElementWithWait(locator, timeout) {
        return driver.wait(until.elementLocated(locator), timeout);
    }

    getElements(locator){
        return driver.findElements(locator);
    }

    doClick(locator){
        this.getElement(locator).click();
    }

    doSendKeys(locator, value){
        this.getElement(locator).sendKeys(value);
    }

    doClickWithWait(locator, timeout){
        driver.wait(until.elementLocated(locator), timeout).click();
    }

    doSendKeysWithWait(locator, value, timeout){
        driver.wait(until.elementLocated(locator), timeout).sendKeys(value);
    }

    isElementDisplayed(locator){
        return this.getElement(locator).isDisplayed();
    }

    isElementEnabled(locator){
        return this.getElement(locator).isEnabled();
    }

    getPageTitle(){
        return driver.getTitle();
    }

    getThisPageURL(){
        return driver.getCurrentUrl();
    }

    getThisPageUrlWithWait(suburl){
        return driver.wait(until.urlContains(suburl));
    }

    getElementAttributeValue(locator, attributeName){
        return this.getElement(locator).getAttribute(attributeName)
    }

    getElementText(locator){
        return this.getElement(locator).getText();
    }

   
}

//util = new ElementUtils();

exports.ElementUtils = ElementUtils;

