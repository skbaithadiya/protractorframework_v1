const { element } = require("protractor");
var logger = require('../utilities/logger');
var log = logger.logger();



let home = function() {
    let logoutBtn = element(by.css('a[href*="#/login"]'));

    this.isLoginSuccess = function () {
        let result = logoutBtn.isDisplayed();
        log.info(`logoutBtn.isDisplayed(): ${result}`);
        return result;
    }
}
module.exports = new home();