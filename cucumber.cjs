module.exports = {
  default: {
    // Required to transpile TypeScript steps on the fly
    requireModule: ['ts-node/register'],
    // New path after moving features up one level
    paths: ['tests/features/*.feature'],
    // Path to your step definitions
    require: ['tests/step-definitions/*.ts'],
    publishQuiet: true,
    format: ['progress']
  }
};














