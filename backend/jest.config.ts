// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // See ütleb, et otsi teste "tests" kaustast
  testMatch: ['**/tests/**/*.test.ts'], 
  verbose: true,
};

export default config;