
exports.config = {
    directConnect: true,
    multiCapabilities: [
        {
            shardTestFiles: true,
            maxInstances: 1,
            sequential: true,
            browserName: 'chrome',
            specs: ['../tests/register_spec.js']
        },
        {
            shardTestFiles: true,
            maxInstances: 1,
            sequential: true,
            browserName: 'chrome',
            specs: ['../tests/login_spec.js']
        }
    ],
    // using beautiful reporter for protractor
    framework: 'jasmine',
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
                            totalDurationFormat: "hh:mm:ss",
                            gatherBrowserLogs: true
                      },
                     }).getJasmine2Reporter());
        }
   
}