const { browser, element } = require("protractor");
var logger = require('../utilities/logger');
var log = logger.logger();

let home = require("../pages/home");
let login = require("../pages/login");
let register = require("../pages/register");

describe('Login - Valid User', function() {
    it('should login successfully', function() {
        loginlink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        browser.get(loginlink);
        login.doLogin('user2', 'pass2');
        expect(home.isLoginSuccess()).toBe(true);
        browser.sleep(3000);
    });

});