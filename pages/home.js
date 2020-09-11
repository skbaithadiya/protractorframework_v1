const { element } = require("protractor");
var logger = require('../utilities/logger');
var log = logger.logger();

let home = function() {

    this.isLoginSuccess = function () {
        let logoutBtn = element(by.css('a[href*="#/login"]'));
        return logoutBtn.isPresent().then(function(present){
            if(present){
                let result = logoutBtn.isDisplayed();
                log.info(`logoutBtn.isDisplayed(): ${result}`);
                return result;
            } else {
                log.info(`element: ${logoutBtn} is not present`);
                return false;
            }
        }, function(error){
            log.error(`logoutBtn.isPresent() got error: ${error}`);
            return false;
        });

    }
}
module.exports = new home();