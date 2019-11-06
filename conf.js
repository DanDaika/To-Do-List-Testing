var HtmlReporter = require('protractor-beautiful-reporter');
var today = new Date(),
timeStamp = '0' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '--' + today.getHours() + 'h-' + today.getMinutes() + 'm';

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/tests.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }],
  jasmineNodeOpts: {defaultTimeoutInterval: 60000},
  onPrepare: () => {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/'+timeStamp,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      excludeSkippedSpecs: true,
      takeScreenShotsOnlyForFailedSpecs: true,
      docTitle: 'Test Report To-Do List -- Test run on: '+timeStamp,
      docName: 'report.html'
    }).getJasmine2Reporter());
  }
}