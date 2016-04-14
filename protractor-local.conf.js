/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: [
        // 'e2e/**/*.e2e.ts'
        'e2e/**/*.js'
    ],
    capability: 'chrome',
    directConnect: true,
    baseUrl: 'http://127.0.0.1:9001/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    useAllAngular2AppRoots: true,
    ignoreSynchronization: false,
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};

// exports.config = {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['todo-spec.js']
// };
