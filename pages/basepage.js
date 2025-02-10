const {Builder, By, util} = require('selenium-webdriver');
const {config} = require('../config.js');

class BasePage{

    BasePage(driver){
        global.driver = driver;
    }

    init_driver(){
        if(config.browser == "chrome"){
            driver = new Builder().forBrowser(Browser.CHROME).build();
        }else if(config.browser == "edge"){
            driver = new Builder().forBrowser(Browser.EDGE).build();
        }else{
            console.log("Please provide a valid browser name.")
        }

        driver.get(config.url);
        driver.manager

        
    }

    launch_browser(){

    }
}