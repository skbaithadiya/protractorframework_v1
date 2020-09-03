const { browser, element, promise } = require("protractor");
let logger = require('../utilities/logger');
let log = logger.logger();
let excel = require('../utilities/excelUtils');
let testDataPath = process.cwd() + '\\testData';
let excelFilePath = testDataPath + '\\loginData.xlsx';
let sheetName = 'registerTC';
let register = require("../pages/register");


describe('Register - New User', function() { 

    it('should register new user successfully',async function() {
        
        registerLink = "https://globalsqa.com/angularJs-protractor/registration-login-example/#/register";
        tc_id = 'tc1';
        tc_data = await excel(excelFilePath).excelReadEntireRow(sheetName,tc_id);
        log.info(`testcase data: ${tc_data}`);

        browser.get(registerLink);
        register.fillRegisterForm(tc_data['firstname'], tc_data['lastname'],
            tc_data['username'], tc_data['password']);
        register.submitRegistrationForm();
        log.info('registration complete')
        await excel(excelFilePath).excelWrite(sheetName, tc_id, 'test_result', 'Passed');

    });

});