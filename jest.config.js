export default {
  // Test environment
  testEnvironment: 'jsdom',
  
  // Enable ES6 modules
  extensionsToTreatAsEsm: ['.js'],
  
  // Transform configuration - no transformation for ES modules
  transform: {},
  
  // File extensions Jest will handle
  moduleFileExtensions: ['js', 'mjs'],
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Coverage configuration
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/*.spec.js'
  ],
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  
  // Verbose output
  verbose: true
};
