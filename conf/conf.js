// conf.js
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['../tests/*.js']
    specs: ['../tests/register_spec.js','../tests/login_spec.js'],
    // SELENIUM_PROMISE_MANAGER: false,
    // onPrepare: async () => {
    //     await browser.waitForAngularEnabled(false);
    // }
    onPrepare: function(){
        let HtmlReporter = require('protractor-beautiful-reporter');
                     jasmine.getEnv().addReporter(new HtmlReporter({
                        baseDirectory: 'reports',
                        screenshotsSubfolder: 'screenshotsOnFailure',
                        takeScreenShotsOnlyForFailedSpecs: true,
                        jsonsSubfolder: 'jsonFiles',
                        excludeSkippedSpecs: true,
                        preserveDirectory: false,
                        clientDefaults:{
                        showTotalDurationIn: "header",
                        totalDurationFormat: "h:m:s",
                        gatherBrowserLogs: true
                      },
                     }).getJasmine2Reporter());
        }
}