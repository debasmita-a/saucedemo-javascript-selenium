const { BasePage } = require("../pages/basepage");

exports.mochaGlobalSetup = async function () {
    console.log("before hook function --- runs before any of the test files/suites.")
    const base = new BasePage();
    let driver = base.init_driver();
  };