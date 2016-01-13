// jasmine-tests.webpack.js
var context = require.context('./components', true, /-jasmine-test\.js?$/);
context.keys().forEach(context);