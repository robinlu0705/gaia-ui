// mocha-tests.webpack.js
var context = require.context('./components', true, /-mocha-test\.js?$/);
context.keys().forEach(context);