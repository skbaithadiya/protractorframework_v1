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
}