const {By, util, until, select} = require('selenium-webdriver');
const { BasePage } = require('../pages/basepage');
const base = new BasePage();

class ElementUtils {

    getElement(locator) {
        return driver.findElement(locator);
    }

    getElements(locator){
        return driver.findElements(locator);
    }

    doClick(locator){
        this.getElement(locator).click();
    }
}

//util = new ElementUtils();

exports.ElementUtils = ElementUtils;

