var logger = require('../utilities/logger');
var log = logger.logger();

let register = function() {

    let firstName = element(by.model('vm.user.firstName'));
    let lastName = element(by.model('vm.user.lastName'));
    let username = element(by.model('vm.user.username'));
    let password = element(by.model('vm.user.password'));
    let registerBtn = element(by.css('div.form-actions > button'));
    let cancelBtn = element(by.linkText('Cancel'));

    this.fillRegisterForm = function (fName, lName, user, pass){
        firstName.sendKeys(fName);
        lastName.sendKeys(lName);
        username.sendKeys(user);
        password.sendKeys(pass);
    };

    this.submitRegistrationForm = function () {
        registerBtn.click();
    };

    this.cancelRegistration = function () {
        cancelBtn.click();
    };
}
module.exports = new register();