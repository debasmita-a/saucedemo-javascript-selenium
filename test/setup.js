
const { BasePage } = require("../pages/basepage");
const { LoginPage } = require("../pages/loginpage");
const { InventoryPage } = require("../pages/inventorypage");
const { CartPage } = require("../pages/cartpage");


before('Set up', ()=>{
    const loginPage = new LoginPage(driver);
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
});
