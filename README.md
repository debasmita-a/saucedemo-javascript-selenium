# Selenium Javascript Mocha (Page Object Model)
A Test Automation framework with Selenium WebDriver, Mocha Testing framework, Chai Assertions library and Mochawesome report. 

## Pre-requisites :
* Basic understanding of Javascript and NodeJS 
* Selenium WebDriver and how the APIs work

## Dependencies used :
* Selenium WebDriver - [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
* Mocha - [mocha](https://www.npmjs.com/package/mocha)
* Mochawesome - [mochawesome](https://www.npmjs.com/package/mochawesome)
* Chai - [chai@4.5.0](https://www.npmjs.com/package/chai)

  Note : Chai@5 onwards, the packages are now ESM modules, they do not support CommonJS environments anymore.
  The Chai@4.5.0 version works fine with Mocha latest versions.
  
## Test environment :
* Application On Test: [Saucedemo](https://www.saucedemo.com/)
* Browsers : Chrome/Firefox/Edge

## Approach to building the framework :
The general structure of the framework is very much similar to how we do it using Java and Selenium WebDriver libraries.
Instead of using a src folder, I have created the `pages` and `test` folders directly inside the root folder.

## .mocharc.yml file :
```
package: './package.json'
parallel: true
recursive: false
#reporter: 'spec'
timeout: '6000'
reporter : 'mochawesome'
require: 'mochawesome/register'
reporter-option: [
   reportFilename: 'mochawesome-reports',
   quiet: true,
   html: true
]

extension: ['js', 'cjs', 'mjs']
```
"parallel" is set to true, so that the tests run in parallel. 
## Sample test class :
```
describe('End to end tests', ()=>{

    let driver;
    let loginPage;
    let inventoryPage;
    let cartPage;

    before('End to end tests set up', async()=>{
        driver = await base.init_driver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        cartPage = new CartPage(driver);
    });

    it('User logs in successfully', async ()=>{
        await loginPage.init_driver();
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginBtn();
        let text = await inventoryPage.getProductPageHeader();       
        assert.equal(text, "Products");
    });

    it('User adds a product to cart successfully', async ()=>{
        await inventoryPage.addAProductToCart("Sauce Labs Backpack");
        await inventoryPage.navigateToCartPage();
        assert.isTrue(await cartPage.getCartPageURL());
    });

})
```
## Mocha report :

![alt text][Mocha HTML Report]

[Mocha HTML Report]: https://github.com/debasmita-a/saucedemo-javascript-selenium/blob/master/screenshots/mocha_html_report.jpeg "Mocha test report"

  

  
  

  
