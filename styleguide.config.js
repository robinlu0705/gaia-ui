"use strict";

var path = require('path');
var glob = require('glob');

module.exports = {
  serverHost: '0.0.0.0',
  serverPort: process.env.PORT || '3000',
  title: 'Gaia Style Guide',
  // components: './components/*/*.jsx',
  sections: glob.sync(path.resolve(__dirname, 'components/*')).map(function(match) {
    var sectionName = (/.*\/(.*)$/.exec(match))[1];
    sectionName = sectionName[0].toUpperCase() + sectionName.slice(1);

    return {
      name: sectionName,
      components: match + '/*.jsx'
    };
  }),

  getExampleFilename: function(componentpath) {
    return componentpath.replace(/\.jsx?$/,   '.examples.md');
  },

  updateWebpackConfig: function(webpackConfig, env) {
    // Your source files folder or array of folders, should not include node_modules
    let componentsDir = path.join(__dirname, 'components');
    let assetsDir = path.join(__dirname, 'assets');

    webpackConfig.entry.push(path.join(__dirname, 'assets/material-icons/material-icons.css'));
    webpackConfig.entry.push(path.join(__dirname, 'styleguide.css'));
    webpackConfig.module.loaders.push(
      // Babel loader will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        include: componentsDir,
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
      // Other loaders that is needed for your components
      {
        test: /\.less$/,
        include: componentsDir,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        include: [assetsDir, componentsDir],
        loader: "style-loader!css-loader"
      },
      {
        test: /styleguide\.css$/,
        include: __dirname,
        loader: "style-loader!css-loader"
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: assetsDir,
        loader : 'file-loader'
      }
    );

    return webpackConfig;
  }
};
