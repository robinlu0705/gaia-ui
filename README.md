# Gaia

An in-house React UI framework

## Setup
1. `npm install` - install all node_modules needed

## Gaia Styleguide
1. `npm run build-styleguide` - build component styleguide into `/styleguide`
2. visit `/styleguide` to see the styleguide page

### Unit tests
1. unit tests using Karma(along with Mocha or Jasmine) are in `/components/**/__karma-tests__`. Switch framework by changing `frameworkName` variable in `karma.conf.js`
2. `npm run karma-test` to start a test server, then karma will automatically start phantom.js to simulate a headless browser accessing test server and collect test results.