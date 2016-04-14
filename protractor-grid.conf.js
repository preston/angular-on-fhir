/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    baseUrl: 'http://localhost:9001/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: [
        // 'e2e/**/*.e2e.ts'
        'e2e/**/*.js'
    ],
    multiCapabilities: [{
        browserName: 'internet explorer',
        platform: 'WIN10'
    }, {
        // browserName: 'edge',
        // platform: 'WIN10'
    // }, {
        browserName: 'chrome',
        platform: 'WIN10'
    // }, {
    //     browserName: 'firefox',
    //     platform: 'WIN10'
    // }, {
        //     browserName: 'safari',
        //     platform: 'MAC'
        }, {
        browserName: 'chrome',
        platform: 'MAC'
    }, {
        browserName: 'firefox',
        platform: 'LINUX'
    // }, {
    //     browserName: 'chrome',
    //     platform: 'LINUX'
    }],
    // splitTestsBetweenCapabilities: true,
    // directConnect: true,
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
