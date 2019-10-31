exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/tests.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }],
  jasmineNodeOpts: {defaultTimeoutInterval: 60000}
}