const { browser, element } = require("protractor");
var logger = require('../utilities/logger');
var log = logger.logger();
let register = require("../pages/register");

describe('Login - Valid User', function() { 
    it('should login successfully', function() {
        registerLink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register";
        browser.get(registerLink);
        register.fillRegisterForm('first', 'last', 'user2', 'pass2');
        register.submitRegistrationForm();
        browser.sleep(3000);
    });

});