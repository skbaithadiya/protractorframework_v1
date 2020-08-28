var logger = require('../utilities/logger');
var log = logger.logger();

let login = function() {

    let username = element(by.model('vm.username'));
    let password = element(by.model('vm.password'));
    let loginBtn = element(by.css('div.form-actions > button'));
    let registerBtn = element(by.linkText('Register'));

     this.doLogin = function(user, pass){
        username.sendKeys(user);
        log.info(`Input username: ${user}`);
        password.sendKeys(pass);
        log.info(`Input password: ${pass}`);
        loginBtn.click();
        log.info(`Clicked on Login Button`);
    };

    this.enterUsername = function(user){
        username.sendKeys(user);
        log.info(`Input username: ${user}`);
    };

    this.enterPassword = function(pass){
        password.sendKeys(pass);
        log.info(`Input password: ${pass}`);
    };

    this.clickLoginButton = function(pass){
        loginBtn.click();
        log.info(`Clicked on Login Button`);
    };

    this.navigateToRegistration = function(){
        registerBtn.click();
        log.info(`Clicked on Register Button`);
    }
}
module.exports = new login();