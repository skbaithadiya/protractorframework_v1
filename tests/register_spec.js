const { browser, element } = require("protractor");
let logger = require('../utilities/logger');
let log = logger.logger();
let register = require("../pages/register");

describe('Register - New User', function() { 
    it('should register new user successfully', function() {
        registerLink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register";
        browser.get(registerLink);
        register.fillRegisterForm('first', 'last', 'user3', 'pass3');
        register.submitRegistrationForm();
        browser.sleep(3000);
    });

});