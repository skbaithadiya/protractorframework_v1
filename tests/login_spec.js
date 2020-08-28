const { browser, protractor, element } = require("protractor");
let logger = require('../utilities/logger');
let log = logger.logger();
let excel = require('../utilities/excelUtils')

let home = require("../pages/home");
let login = require("../pages/login");
let register = require("../pages/register");
let testDataPath = process.cwd() + '\\testData';
let excelFilePath = testDataPath + '\\loginData.xlsx';
let sheetName = 'loginTC';


describe('Login - Valid User', function() {
   
    it('should login successfully', function() {
        browser.waitForAngularEnabled(true);
        loginlink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        tc_id = 'tc1';
        tc_username = excel(excelFilePath).excelRead(sheetName, tc_id, 'username');
        tc_password = excel(excelFilePath).excelRead(sheetName, tc_id, 'password');
        // browser.waitForAngularEnabled(false);
        browser.get(loginlink);
        login.doLogin(tc_username, tc_password);
        expect(home.isLoginSuccess()).toBe(true);
        // browser.waitForAngularEnabled(false);
        excel(excelFilePath).excelWrite(sheetName, tc_id, 'test_result', 'Passed');
        // browser.waitForAngularEnabled(true);
        
    });

});