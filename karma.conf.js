// karma.conf.js
var webpack = require('webpack');

var frameworkName = 'mocha';

module.exports = function (config) {
  config.set({
    hostname: 'localhost',
    browsers: ['PhantomJS'],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    transports: ['websocket', 'polling'],
    singleRun: true,
    frameworks: [frameworkName],
    files: [
      'phantomjs.polyfill.js',
      frameworkName + '-tests.webpack.js'
    ],
    preprocessors: {
      [frameworkName + '-tests.webpack.js']: ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'junit'],
    junitReporter: {
      outputDir: './', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: false // add browser name to report and classes names
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              // https://github.com/babel/babel-loader#options
              cacheDirectory: '',
              presets: [
                'es2015',
                'react',
                'stage-0'
              ],
              plugins: [
                ["transform-object-assign"]
              ]
            }
          },
          {
            test: /\.less$/,
            loader: "style!css!less"
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};