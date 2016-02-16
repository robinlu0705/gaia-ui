var gulp = require("gulp");
var gutil = require("gulp-util");

var webpack = require("webpack");

var RSG = require('react-styleguide-generator');

var path = require('path');

var styleguideRoot = '';

// available tasks
gulp.task("build-styleguide", ['styleguide:build']);

gulp.task('styleguide:build', [], function(done) {
  var rsg = RSG('components/**/sg/*.jsx', {
    title: "Gaia Style Guide",
    output: './styleguide',
    root: styleguideRoot,
    babelConfig: {
      "stage": 0
    },
    browserifyConfig: {
      paths: ['./components'],
      extensions: ['.js', '.jsx'],
      transform: [
        ["node-lessify", {"textMode": false }]
      ]
    },
    pushstate: false,
    files: [
      'files/global.css'
    ]
  });

  rsg.generate(function (err) {
    if (err) {
      console.error(String(err))
    }
    done();
  })
});
