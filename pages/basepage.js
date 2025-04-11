const {Builder, Browser, WebDriver} = require('selenium-webdriver');
const {config} = require('../config/config.js');
const { ElementUtils } = require('../utils/elementUtil.js')

class BasePage{
  
    /**
     * Description placeholder
     *
     * @type {WebDriver | null}
     */

    constructor(driver) {
        this.driver = driver;
        this.ele = new ElementUtils(driver);
    }

    async init_driver(){
       try{
        console.log("Launching browser session..");
        if(config.browser == "chrome"){
            this.driver = await new Builder().forBrowser(Browser.CHROME).build();
        }else if(config.browser == "edge"){
            this.driver = await new Builder().forBrowser(Browser.EDGE).build();
        }else{
            console.log("Please provide a valid browser name.")
        }
        await this.driver.get(config.url);
        await this.driver.manage().window().maximize(); 
        
       }finally{
      //  console.log("Quitting browser session..");
        //driver.quit(); 
       }
      return this.driver;
    }
}

exports.BasePage = BasePage;