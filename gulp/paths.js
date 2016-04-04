const path = require('path');
const projectDir = path.resolve(__dirname, '../');

module.exports = {
  sourceStyles: `${projectDir}/source/stylesheets`,
  outputStyles: `${projectDir}/.tmp/dist/stylesheets`,
  sourceJS: `${projectDir}/source/javascripts`,
  webpackConfig: `${projectDir}/webpack.config.js`
};