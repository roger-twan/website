/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  testMatch: [
    '<rootDir>/tests/unit/**/*.test.tsx',
    '<rootDir>/tests/unit/**/*.test.ts',
  ],
};

module.exports = createJestConfig(customJestConfig);
