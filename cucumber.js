module.exports = {
  default: {
    require: [
      'step-definitions/**/*.ts',
      'support/**/*.ts'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ]
  }
};
















