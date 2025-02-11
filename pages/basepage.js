const {Builder, Browser, By, util, until} = require('selenium-webdriver');
const {config} = require('../config/config.js');

class BasePage{

    constructor(driver){
        global.driver = driver;
    }

    async init_driver(){
       try{
        console.log("Launching browser session..");
        if(config.browser == "chrome"){
            driver = await new Builder().forBrowser(Browser.CHROME).build();
        }else if(config.browser == "edge"){
            driver = await new Builder().forBrowser(Browser.EDGE).build();
        }else{
            console.log("Please provide a valid browser name.")
        }

        await driver.get(config.url);
        await driver.manage().window().maximize(); 
       }finally{
        //FIXME : Figure out how to quit session after all tests are executed.
        console.log("Quitting browser session..");
        //driver.quit(); 
       }
       
    }

}

//base = new BasePage();
//base.init_driver();
//base.teardown();


exports.BasePage = BasePage;