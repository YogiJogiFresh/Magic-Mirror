// jest.config.ts
import type {Config} from '@jest/types';

const SRC_PATH = '<rootDir>/src';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@middleware(.*)$": "<rootDir>/src/middleware$1",
    "^@routes(.*)$": "<rootDir>/src/routes$1",
    "^@models(.*)$": "<rootDir>/src/models$1",
    "^@controllers(.*)$": "<rootDir>/src/controllers$1",
    
  },
  rootDir: './',
  'roots': [
    SRC_PATH
  ],
    
  
};

export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };