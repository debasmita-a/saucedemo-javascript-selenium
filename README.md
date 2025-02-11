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
Instead of using a src folder, I have created the pages and test folders directly inside the root folder.

  

  
  

  
