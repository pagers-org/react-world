const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});
const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
  };

module.exports = createJestConfig(config);
