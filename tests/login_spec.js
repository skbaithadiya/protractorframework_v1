const { browser, protractor, element } = require("protractor");
let logger = require('../utilities/logger');
let log = logger.logger();
let excel = require('../utilities/excelUtils')
let excelJSON = require('../utilities/excelJSON')

let home = require("../pages/home");
let login = require("../pages/login");
let register = require("../pages/register");
let testDataPath = process.cwd() + '\\testData';
let excelFilePath = testDataPath + '\\loginData.xlsx';
let sheetName = 'registerTC';


describe('Login - Valid User', function() {

    it('should login successfully - DataDriven', function() {
        loginlink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        let testData = excelJSON(excelFilePath, sheetName);
        testData[sheetName].forEach(rowData => {
            browser.get(loginlink);
            login.doLogin(rowData['username'], rowData['password']);
            isLogin = home.isLoginSuccess();
            expect(isLogin).toBe(false);
        });
       
    });
   
    it('should login successfully', async function() {
        loginlink = "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login";
        tc_id = 'tc1';
        tc_username = await excel(excelFilePath).excelRead(sheetName, tc_id, 'username');
        tc_password = await excel(excelFilePath).excelRead(sheetName, tc_id, 'password');

        browser.get(loginlink);
        login.doLogin(tc_username, tc_password);
        expect(home.isLoginSuccess()).toBe(true);
        await excel(excelFilePath).excelWrite(sheetName, tc_id, 'test_result', 'Passed');
        
    });

});