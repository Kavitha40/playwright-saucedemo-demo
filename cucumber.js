export default {
  // Add 'tests/**/*.ts' to the import list
  import: [
    'steps/**/*.ts',
      ],
  
  paths: ['features/**/*.feature'],
  
  format: ['progress', 'summary'],

  formatOptions: {
    snippetInterface: 'async-await'
  }
};











