require('reflect-metadata');

var testing = require('angular2/testing');
var browser = require('angular2/platform/testing/browser');
testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS);

var testsContext = require.context("./src", true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
