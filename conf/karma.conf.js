const conf = require('./gulp.conf');
const listFiles = require('./karma-files.conf');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'PhantomJS', 'Chrome'
    ],
    frameworks: [
      'phantomjs-shim',
      'jasmine',
      'angular-filesort'
    ],
    files: listFiles(),
    preprocessors: {
      [conf.path.src('**/*.html')]: [
        'ng-html2js'
      ],
      [conf.path.tmp('**/!(*.spec).js')]: [
        'coverage'
      ]
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters:[
        {type: 'html', dir:'coverage/'},
        {type: 'teamcity'},
        {type: 'text-summary'}
      ],
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: `${conf.paths.src}/`,
      moduleName: 'app'
    },
    angularFilesort: {
      whitelist: [
        conf.path.tmp('**/!(*.html|*.spec|*.mock).js')
      ]
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-phantomjs-shim'),
      require('karma-chrome-launcher'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-angular-filesort')
    ]
  };

  config.set(configuration);
};
